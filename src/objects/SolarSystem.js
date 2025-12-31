import * as THREE from 'three';
import { solarSystemData } from '../data/solarSystemData.js';

export function createSolarSystem(scene) {
    const bodies = [];
    const textureLoader = new THREE.TextureLoader();
    let isRealScale = false;

    solarSystemData.forEach(data => {
        // We initialize with radius 1 and use mesh.scale for the actual sizes
        const geometry = new THREE.SphereGeometry(1, 64, 64);

        let material;
        if (data.texture) {
            const texture = textureLoader.load(`textures/${data.texture}`);
            material = new THREE.MeshStandardMaterial({
                map: texture,
                emissive: data.type === 'star' ? 0xffffff : 0x000000,
                emissiveMap: data.type === 'star' ? texture : null,
                emissiveIntensity: data.type === 'star' ? 1 : 0
            });
        } else {
            material = new THREE.MeshStandardMaterial({
                color: data.color,
                emissive: data.type === 'star' ? data.color : 0x000000,
                emissiveIntensity: data.type === 'star' ? 1 : 0
            });
        }

        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData = data;
        mesh.name = data.name;

        // Initial scale
        mesh.scale.setScalar(data.radius);

        const body = {
            name: data.name,
            data: data,
            mesh: mesh,
            distance: data.distance,
            speed: data.speed,
            angle: Math.random() * Math.PI * 2,
            rotationSpeed: 0.005,
            satellites: [],
            orbitLine: null,
            ringMesh: null
        };

        // Orbit Line
        if (data.name !== 'Sun') {
            const curve = new THREE.EllipseCurve(0, 0, data.distance, data.distance, 0, 2 * Math.PI, false, 0);
            const points = curve.getPoints(256);
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.5 });
            const orbitLine = new THREE.LineLoop(lineGeometry, lineMaterial);
            orbitLine.rotation.x = Math.PI / 2; // Rotate the MESH once
            scene.add(orbitLine);
            body.orbitLine = orbitLine;
        }

        // Saturn Rings
        if (data.ring) {
            // Rings use local scale usually, but here we add it to the planet mesh
            const ringGeo = new THREE.RingGeometry(data.ring.innerRadius / data.radius, data.ring.outerRadius / data.radius, 128);
            const pos = ringGeo.attributes.position;
            const uv = ringGeo.attributes.uv;
            for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i);
                const y = pos.getY(i);
                const d = Math.sqrt(x * x + y * y);
                const inner = data.ring.innerRadius / data.radius;
                const outer = data.ring.outerRadius / data.radius;
                const radialRatio = (d - inner) / (outer - inner);
                uv.setXY(i, 0.5, radialRatio);
            }
            const ringTex = textureLoader.load('textures/saturn_ring_v3.png');
            const ringMat = new THREE.MeshStandardMaterial({
                map: ringTex,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.85
            });
            const ringMesh = new THREE.Mesh(ringGeo, ringMat);
            ringMesh.rotation.x = Math.PI / 2;
            mesh.add(ringMesh);
            body.ringMesh = ringMesh;
        }

        // Satellites
        if (data.satellites) {
            data.satellites.forEach(satData => {
                const satGeo = new THREE.SphereGeometry(1, 64, 64);
                let satMat;
                if (satData.texture) {
                    satMat = new THREE.MeshStandardMaterial({
                        map: textureLoader.load(`textures/${satData.texture}`)
                    });
                } else {
                    satMat = new THREE.MeshStandardMaterial({ color: satData.color });
                }
                const satMesh = new THREE.Mesh(satGeo, satMat);
                satMesh.scale.setScalar(satData.radius);
                scene.add(satMesh);

                const satellite = {
                    mesh: satMesh,
                    data: satData,
                    angle: Math.random() * Math.PI * 2
                };
                body.satellites.push(satellite);

                satMesh.userData = satData;
                satMesh.name = satData.name;
            });
        }

        bodies.push(body);
        scene.add(mesh);
    });

    let speedMultiplier = 1.0;

    return {
        setSpeedMultiplier: (multiplier) => {
            speedMultiplier = multiplier;
        },
        setViewMode: (real) => {
            isRealScale = real;
            bodies.forEach(body => {
                const d = body.data;
                const targetRadius = isRealScale ? d.realScaleRadius : d.radius;
                const targetDistance = isRealScale ? d.realScaleDistance : d.distance;

                // Update mesh scale
                body.mesh.scale.setScalar(targetRadius);
                body.mesh.updateMatrix();
                body.distance = targetDistance;

                // Update Orbit Line
                if (body.orbitLine) {
                    const curve = new THREE.EllipseCurve(0, 0, targetDistance, targetDistance, 0, 2 * Math.PI, false, 0);
                    const points = curve.getPoints(256);
                    body.orbitLine.geometry.setFromPoints(points);
                    body.orbitLine.geometry.computeBoundingSphere();
                }

                // Update Saturn Ring geometry
                if (body.ringMesh) {
                    const r = body.data.ring;
                    const inner = isRealScale ? r.realInner : r.innerRadius;
                    const outer = isRealScale ? r.realOuter : r.outerRadius;

                    // We need a NEW geometry to avoid uv issues or scale appropriately
                    // Simple way: recreate geometry since it's just one object
                    body.ringMesh.geometry.dispose();
                    body.ringMesh.geometry = new THREE.RingGeometry(inner / targetRadius, outer / targetRadius, 128);

                    const pos = body.ringMesh.geometry.attributes.position;
                    const uv = body.ringMesh.geometry.attributes.uv;
                    const localInner = inner / targetRadius;
                    const localOuter = outer / targetRadius;
                    for (let i = 0; i < pos.count; i++) {
                        const x = pos.getX(i);
                        const y = pos.getY(i);
                        const dist = Math.sqrt(x * x + y * y);
                        const radialRatio = (dist - localInner) / (localOuter - localInner);
                        uv.setXY(i, 0.5, radialRatio);
                    }
                }

                // Update Satellites
                body.satellites.forEach(sat => {
                    const s = sat.data;
                    const sRadius = isRealScale ? (s.realScaleRadius || s.radius) : s.radius;
                    const sDist = isRealScale ? (s.realScaleDistance || s.distance) : s.data.distance;
                    sat.mesh.scale.setScalar(sRadius);
                    sat.mesh.updateMatrix();
                    sat.distance = sDist;
                });
            });
        },
        isRealScale: () => isRealScale,
        getBodies: () => bodies,
        update: () => {
            bodies.forEach(body => {
                if (body.distance > 0) {
                    body.angle += body.speed * speedMultiplier;
                    body.mesh.position.x = Math.cos(body.angle) * body.distance;
                    body.mesh.position.z = Math.sin(body.angle) * body.distance;
                }
                body.mesh.rotation.y += body.rotationSpeed * speedMultiplier;

                body.satellites.forEach(sat => {
                    const sDist = sat.distance || sat.data.distance;
                    sat.angle += sat.data.speed * speedMultiplier;
                    sat.mesh.position.x = body.mesh.position.x + Math.cos(sat.angle) * sDist;
                    sat.mesh.position.y = body.mesh.position.y;
                    sat.mesh.position.z = body.mesh.position.z + Math.sin(sat.angle) * sDist;
                    sat.mesh.rotation.y += 0.01 * speedMultiplier;
                });
            });
        }
    };
}
