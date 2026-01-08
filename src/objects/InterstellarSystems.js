import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v4.1.2 - Proportional Scale Fix
 * Features:
 * - Fixed Accretion Disk scale inheritance (moved to container-level syncing).
 * - Corrected Neutron Star orbital behavior.
 * - Dynamic matter stream between binary pairs.
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const accretionDisks = [];
    const gasStreams = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    const createEntity = (data, parentName, container, depth = 0, systemName) => {
        let mesh;
        if (data.radius >= 0) {
            const isDistorted = data.isDistorted || false;
            const geometry = isDistorted ? new THREE.SphereGeometry(1, 64, 64) : new THREE.SphereGeometry(1, 48, 48);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

            if (data.texture) {
                material.map = textureLoader.load(`textures/${data.texture}`);
            } else {
                material.color.set(data.color || 0xffffff);
            }

            mesh = new THREE.Mesh(geometry, material);
            const scaleFactor = data.type === 'star' ? 50 : 40;
            const baseScale = data.radius * scaleFactor;

            if (isDistorted && data.distortionAxes) {
                mesh.scale.set(
                    baseScale * (data.distortionAxes.x || 1.0),
                    baseScale * (data.distortionAxes.y || 1.0),
                    baseScale * (data.distortionAxes.z || 1.0)
                );
            } else if (data.radius > 0) {
                mesh.scale.setScalar(baseScale);
            } else {
                mesh = new THREE.Object3D();
            }

            mesh.userData = {
                ...data,
                visualScale: baseScale,
                isInterstellar: true,
                parentSystem: systemName,
                isExoplanet: data.type !== 'star',
                angle: data.orbit?.startAngle ?? Math.random() * Math.PI * 2
            };

            // Accretion Disk - FIXED: No longer added as child to avoid scale inheritance
            if (data.hasAccretionDisk) {
                const innerR = baseScale * 2;
                const outerR = data.diskRadius || (baseScale * 20);
                const diskGeo = new THREE.RingGeometry(innerR, outerR, 128);
                const diskMat = new THREE.MeshBasicMaterial({
                    color: data.diskColor || 0x00ccff,
                    transparent: true,
                    opacity: 0.5,
                    side: THREE.DoubleSide,
                    blending: THREE.AdditiveBlending
                });
                const diskMesh = new THREE.Mesh(diskGeo, diskMat);
                diskMesh.rotation.x = Math.PI / 2;
                container.add(diskMesh); // Add to container directly
                accretionDisks.push({ mesh: diskMesh, parentName: data.name, speed: 1.5 });
            }

            // Gas Stream
            if (data.hasGasStream) {
                const streamGeo = new THREE.CylinderGeometry(baseScale * 0.1, baseScale * 0.4, 1, 16);
                streamGeo.translate(0, 0.5, 0);
                streamGeo.rotateX(Math.PI / 2);
                const streamMat = new THREE.MeshBasicMaterial({
                    color: data.color || 0x00ccff,
                    transparent: true,
                    opacity: 0.7,
                    blending: THREE.AdditiveBlending
                });
                const streamMesh = new THREE.Mesh(streamGeo, streamMat);
                gasStreams.push({ mesh: streamMesh, source: mesh.userData.name, target: parentName });
                container.add(streamMesh);
            }

            if (data.radius > 0) selectable.push(mesh);
        }

        mesh.userData.parentName = parentName;
        mesh.userData.depth = depth;
        allEntities.push(mesh);
        container.add(mesh);

        // Orbit creation
        if (data.orbit) {
            const orbitPts = [];
            const segments = 512;
            for (let j = 0; j <= segments; j++) {
                const angle = (j / segments) * Math.PI * 2;
                orbitPts.push(new THREE.Vector3(data.orbit.radius * Math.cos(angle), 0, data.orbit.radius * Math.sin(angle)));
            }
            const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPts);
            const isStar = data.type === 'star';
            const orbitLine = new THREE.LineLoop(orbitGeo, new THREE.LineBasicMaterial({
                color: isStar ? 0xff4400 : 0x00d2ff,
                transparent: true,
                opacity: isStar ? 0.4 : 0.2
            }));
            if (data.orbit.inclination) orbitLine.rotation.x = THREE.MathUtils.degToRad(data.orbit.inclination);
            orbitLine.userData = { parentName: parentName, type: isStar ? 'star_orbit' : 'planet_orbit' };
            container.add(orbitLine);
            orbitLines.push(orbitLine);
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
                    if (d.isDistorted) mesh.lookAt(pPos);
                }
            });

            // Sync Accretion Disks (now world-space sync to avoid scaling issues)
            accretionDisks.forEach(disk => {
                const parent = allEntities.find(e => e.userData.name === disk.parentName);
                if (parent) {
                    disk.mesh.position.copy(parent.position);
                    disk.mesh.rotation.z += disk.speed * simSpeed * delta * 1.5;
                }
            });

            gasStreams.forEach(stream => {
                const sMesh = allEntities.find(e => e.userData.name === stream.source);
                const tMesh = allEntities.find(e => e.userData.name === stream.target);
                if (sMesh && tMesh) {
                    stream.mesh.position.copy(sMesh.position);
                    stream.mesh.lookAt(tMesh.position);
                    stream.mesh.scale.z = sMesh.position.distanceTo(tMesh.position);
                    stream.mesh.material.opacity = 0.4 + Math.sin(Date.now() * 0.005) * 0.2;
                }
            });

            orbitLines.forEach(l => {
                const p = allEntities.find(e => e.userData.name === l.userData.parentName);
                if (p) l.position.copy(p.position);
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p) => {
            orbitLines.forEach(l => {
                if (l.userData.type === 'star_orbit') l.visible = s;
                if (l.userData.type === 'planet_orbit') l.visible = p;
            });
        }
    };
}
