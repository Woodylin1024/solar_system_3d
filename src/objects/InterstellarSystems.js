import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v4.0.0 - Advanced Celestial Physics Engine
 * Added support for: 
 * - Accretion Disks (Neutron Stars/Black Holes)
 * - Tidal Distortion (Teardrop/Ellipsoid shapes for binary companions)
 * - Ultra-high emissive rendering
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const beltMeshes = [];
    const accretionDisks = []; // Specialized high-energy disks

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    const createEntity = (data, parentName, container, depth = 0, systemName) => {
        let mesh;
        if (data.radius >= 0) {
            // Check for tidal distortion (Teardrop/Ellipsoid)
            const isDistorted = data.isDistorted || false;

            const geometry = isDistorted ? new THREE.SphereGeometry(1, 64, 64) : new THREE.SphereGeometry(1, 48, 48);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

            if (data.texture) {
                material.map = textureLoader.load(`textures/${data.texture}`);
            } else {
                material.color.set(data.color || 0xffffff);
            }

            mesh = new THREE.Mesh(geometry, material);

            // Apply scale
            const scaleFactor = data.type === 'star' ? 50 : 40;
            const baseScale = data.radius * scaleFactor;

            if (isDistorted && data.distortionAxes) {
                // Teardrop effect via non-uniform scaling
                mesh.scale.set(
                    baseScale * (data.distortionAxes.x || 1.3),
                    baseScale * (data.distortionAxes.y || 1.0),
                    baseScale * (data.distortionAxes.z || 1.0)
                );
            } else if (data.radius > 0) {
                mesh.scale.setScalar(baseScale);
            } else {
                // Virtual node
                mesh = new THREE.Object3D();
            }

            mesh.userData = {
                ...data,
                visualScale: baseScale,
                isInterstellar: true,
                parentSystem: systemName,
                isExoplanet: data.type !== 'star'
            };

            // If it's a neutron star or has an accretion disk
            if (data.hasAccretionDisk) {
                const diskGeo = new THREE.RingGeometry(baseScale * 1.5, baseScale * 10, 128);
                const diskMat = new THREE.MeshBasicMaterial({
                    color: data.diskColor || 0x00ccff,
                    transparent: true,
                    opacity: 0.7,
                    side: THREE.DoubleSide,
                    blending: THREE.AdditiveBlending
                });
                const disk = new THREE.Mesh(diskGeo, diskMat);
                disk.rotation.x = Math.PI / 2;
                mesh.add(disk);
                accretionDisks.push({ mesh: disk, speed: 1.5 });
            }

            if (data.radius > 0) selectable.push(mesh);
        }

        mesh.userData.parentName = parentName;
        mesh.userData.depth = depth;
        mesh.userData.angle = data.orbit?.startAngle ?? Math.random() * Math.PI * 2;

        allEntities.push(mesh);
        container.add(mesh);

        if (data.orbit) {
            const orbitPts = [];
            const segments = 512;
            for (let j = 0; j <= segments; j++) {
                const angle = (j / segments) * Math.PI * 2;
                orbitPts.push(new THREE.Vector3(
                    data.orbit.radius * Math.cos(angle),
                    0,
                    data.orbit.radius * Math.sin(angle)
                ));
            }
            const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPts);
            const isStar = data.type === 'star';
            const orbitLine = new THREE.LineLoop(orbitGeo, new THREE.LineBasicMaterial({
                color: isStar ? 0xff4400 : 0x00d2ff,
                transparent: true,
                opacity: isStar ? 0.3 : 0.15
            }));
            orbitLine.userData = { parentName: parentName, type: isStar ? 'star_orbit' : 'planet_orbit' };
            container.add(orbitLine);
            orbitLines.push(orbitLine);
        }

        if (data.belts) {
            data.belts.forEach(beltData => {
                const geometry = new THREE.BufferGeometry();
                const pos = new Float32Array(beltData.count * 3);
                const orbitPoints = [];
                for (let i = 0; i < beltData.count; i++) {
                    const r = THREE.MathUtils.lerp(beltData.minRadius, beltData.maxRadius, Math.random());
                    const a = Math.random() * Math.PI * 2;
                    pos[i * 3] = Math.cos(a) * r;
                    pos[i * 3 + 2] = Math.sin(a) * r;
                    orbitPoints.push({ radius: r, angle: a, speed: 0.05 / Math.sqrt(r) });
                }
                geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
                const points = new THREE.Points(geometry, new THREE.PointsMaterial({
                    color: beltData.color || 0x888888,
                    size: 2,
                    transparent: true,
                    opacity: beltData.opacity || 0.5
                }));
                points.userData = { type: 'interstellar_belt', parentName: data.name, orbitPoints };
                container.add(points);
                beltMeshes.push(points);
            });
        }

        if (data.planets) {
            data.planets.forEach(child => createEntity(child, data.name, container, depth + 1, systemName));
        }
    };

    nearbyStarSystemsData.forEach(sys => {
        const g = new THREE.Group();
        g.position.set(sys.position.x, sys.position.y, sys.position.z);
        sys.stars.forEach(star => createEntity(star, null, g, 0, sys.name));
        systemsGroup.add(g);
    });

    scene.add(systemsGroup);
    allEntities.sort((a, b) => a.userData.depth - b.userData.depth);

    return {
        group: systemsGroup,
        allSelectable: selectable,
        update: (simSpeed, delta) => {
            allEntities.forEach(mesh => {
                const d = mesh.userData;
                const parent = d.parentName ? allEntities.find(e => e.userData.name === d.parentName) : null;
                const pPos = parent ? parent.position : new THREE.Vector3(0, 0, 0);

                if (d.orbit) {
                    d.angle += (d.orbit.speed || 0.1) * simSpeed * delta * 0.1;
                    const r = d.orbit.radius;
                    const x = r * Math.cos(d.angle);
                    const z = r * Math.sin(d.angle);
                    if (d.orbit.inclination) {
                        const t = THREE.MathUtils.degToRad(d.orbit.inclination);
                        mesh.position.set(pPos.x + x, pPos.y - z * Math.sin(t), pPos.z + z * Math.cos(t));
                    } else {
                        mesh.position.set(pPos.x + x, pPos.y, pPos.z + z);
                    }

                    // Rotate distorted stars to always point toward their parent (Roche lobe overflow direction)
                    if (d.isDistorted) {
                        mesh.lookAt(pPos);
                    }
                } else if (d.parentName && parent) {
                    mesh.position.copy(pPos);
                }
            });

            // Animate accretion disks
            accretionDisks.forEach(disk => {
                disk.mesh.rotation.z += disk.speed * simSpeed * delta * 0.5;
            });

            orbitLines.forEach(l => {
                const p = allEntities.find(e => e.userData.name === l.userData.parentName);
                if (p) l.position.copy(p.position);
            });

            beltMeshes.forEach(b => {
                const p = allEntities.find(e => e.userData.name === b.userData.parentName);
                if (p) {
                    b.position.copy(p.position);
                    const pos = b.geometry.attributes.position;
                    b.userData.orbitPoints.forEach((pt, i) => {
                        pt.angle += pt.speed * simSpeed * delta * 0.2;
                        pos.setXYZ(i, Math.cos(pt.angle) * pt.radius, 0, Math.sin(pt.angle) * pt.radius);
                    });
                    pos.needsUpdate = true;
                }
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => {
            orbitLines.forEach(l => {
                if (l.userData.type === 'star_orbit') l.visible = s;
                if (l.userData.type === 'planet_orbit') l.visible = p;
            });
            beltMeshes.forEach(be => be.visible = b);
        }
    };
}
