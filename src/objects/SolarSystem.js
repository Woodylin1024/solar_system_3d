import * as THREE from 'three';
import { solarSystemData } from '../data/solarSystemData.js';

export function createSolarSystem(scene) {
    const bodies = [];
    const textureLoader = new THREE.TextureLoader();

    solarSystemData.forEach(data => {
        // Create Geometry
        const geometry = new THREE.SphereGeometry(data.radius, 32, 32);

        // Define Material
        let material;
        if (data.texture) {
            const texture = textureLoader.load(`/textures/${data.texture}`);
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

        const body = {
            name: data.name,
            mesh: mesh,
            distance: data.distance,
            speed: data.speed,
            angle: Math.random() * Math.PI * 2,
            rotationSpeed: 0.005,
            satellites: []
        };

        // Orbit Line
        if (data.name !== 'Sun') {
            const curve = new THREE.EllipseCurve(0, 0, data.distance, data.distance, 0, 2 * Math.PI, false, 0);
            const points = curve.getPoints(128);
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            lineGeometry.rotateX(Math.PI / 2);
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.5 });
            const orbitLine = new THREE.LineLoop(lineGeometry, lineMaterial);
            scene.add(orbitLine);
        }

        // Saturn Rings
        if (data.ring) {
            const ringGeo = new THREE.RingGeometry(data.ring.innerRadius, data.ring.outerRadius, 128);
            const pos = ringGeo.attributes.position;
            const uv = ringGeo.attributes.uv;
            for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i);
                const y = pos.getY(i);
                const distance = Math.sqrt(x * x + y * y);
                const radialRatio = (distance - data.ring.innerRadius) / (data.ring.outerRadius - data.ring.innerRadius);
                uv.setXY(i, 0.5, radialRatio);
            }
            const ringTex = textureLoader.load('/textures/saturn_ring_v3.png');
            const ringMat = new THREE.MeshStandardMaterial({
                map: ringTex,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.85
            });
            const ringMesh = new THREE.Mesh(ringGeo, ringMat);
            ringMesh.rotation.x = Math.PI / 2;
            mesh.add(ringMesh);
        }

        // Satellites
        if (data.satellites) {
            data.satellites.forEach(satData => {
                const satGeo = new THREE.SphereGeometry(satData.radius, 64, 64);
                let satMat;
                if (satData.texture) {
                    satMat = new THREE.MeshStandardMaterial({
                        map: textureLoader.load(`/textures/${satData.texture}`)
                    });
                } else {
                    satMat = new THREE.MeshStandardMaterial({ color: satData.color });
                }
                const satMesh = new THREE.Mesh(satGeo, satMat);
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
                    sat.angle += sat.data.speed * speedMultiplier;
                    sat.mesh.position.x = body.mesh.position.x + Math.cos(sat.angle) * sat.data.distance;
                    sat.mesh.position.y = body.mesh.position.y;
                    sat.mesh.position.z = body.mesh.position.z + Math.sin(sat.angle) * sat.data.distance;
                    sat.mesh.rotation.y += 0.01 * speedMultiplier;
                });
            });
        }
    };
}
