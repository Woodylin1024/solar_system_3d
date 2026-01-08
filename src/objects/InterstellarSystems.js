import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v4.2.0 - High Definition Accretion & Bio-Luminous Streams
 * Features:
 * - Particle-like textured Accretion Disks (multi-layered).
 * - Precise Roche Lobe matter stream connection.
 * - Improved orbital mechanics and hierarchical syncing.
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const accretionDisks = [];
    const gasStreams = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    // Generate a procedural noise texture for the accretion disk to avoid "paper" look
    const createDiskTexture = () => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Circular gradient base
        const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(0, 204, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 102, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 50, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        // Add some noise streaks
        for (let i = 0; i < 2000; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * size / 2;
            const x = size / 2 + Math.cos(angle) * dist;
            const y = size / 2 + Math.sin(angle) * dist;
            ctx.fillStyle = `rgba(150, 230, 255, ${Math.random() * 0.3})`;
            ctx.fillRect(x, y, 2, 2);
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        return texture;
    };

    const diskTex = createDiskTexture();

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
                // Distortion usually along Z. Z axis tip will be at Z = distortion.z
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

            // Accretion Disk - Multi-layered textured disks
            if (data.hasAccretionDisk) {
                const diskGroup = new THREE.Group();
                const outerR = data.diskRadius || (baseScale * 20);

                // Layer 1: Main Disk with radial texture
                const mainDisk = new THREE.Mesh(
                    new THREE.PlaneGeometry(outerR * 2, outerR * 2),
                    new THREE.MeshBasicMaterial({
                        map: diskTex,
                        transparent: true,
                        opacity: 0.8,
                        side: THREE.DoubleSide,
                        blending: THREE.AdditiveBlending
                    })
                );
                mainDisk.rotation.x = -Math.PI / 2;
                diskGroup.add(mainDisk);

                // Layer 2: Inner Glow
                const glow = new THREE.Mesh(
                    new THREE.CircleGeometry(outerR * 0.3, 32),
                    new THREE.MeshBasicMaterial({
                        color: data.diskColor || 0x00ccff,
                        transparent: true,
                        opacity: 0.4,
                        blending: THREE.AdditiveBlending
                    })
                );
                glow.rotation.x = -Math.PI / 2;
                diskGroup.add(glow);

                container.add(diskGroup);
                accretionDisks.push({ mesh: diskGroup, parentName: data.name, speed: 1.0 });
            }

            // Gas Stream - Now with precision connecting logic
            if (data.hasGasStream) {
                const streamGeo = new THREE.CylinderGeometry(baseScale * 0.05, baseScale * 0.3, 1, 16, 1, true);
                streamGeo.translate(0, 0.5, 0);
                streamGeo.rotateX(Math.PI / 2);
                const streamMat = new THREE.MeshBasicMaterial({
                    color: 0x88ccff,
                    transparent: true,
                    opacity: 0.6,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide
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

        // Orbit creation logic
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
                opacity: isStar ? 0.3 : 0.15
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

                    if (d.isDistorted) {
                        mesh.lookAt(pPos); // Points Z axis (tear tip) to center
                    }
                }
            });

            // Update Gas Streams - Precision bridge logic
            gasStreams.forEach(stream => {
                const sMesh = allEntities.find(e => e.userData.name === stream.source);
                const tMesh = allEntities.find(e => e.userData.name === stream.target);
                if (sMesh && tMesh) {
                    // Start from the "tip" of the distorted planet
                    // The tip is at mesh.position + (forward vector * scaled_radius)
                    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(sMesh.quaternion);
                    // Use userData to get the actual distortion scale. 
                    const stretch = sMesh.userData.distortionAxes?.z || 1.0;
                    const tipOffset = sMesh.userData.visualScale * stretch;

                    const startPos = sMesh.position.clone().add(forward.multiplyScalar(tipOffset));

                    stream.mesh.position.copy(startPos);
                    stream.mesh.lookAt(tMesh.position);
                    const dist = startPos.distanceTo(tMesh.position);
                    stream.mesh.scale.z = dist;
                    stream.mesh.material.opacity = 0.5 + Math.sin(Date.now() * 0.01) * 0.3;
                }
            });

            // Update Accretion Disks (Rotation & Sync)
            accretionDisks.forEach(disk => {
                const parent = allEntities.find(e => e.userData.name === disk.parentName);
                if (parent) {
                    disk.mesh.position.copy(parent.position);
                    disk.mesh.children[0].rotation.z += disk.speed * simSpeed * delta * 2.0;
                }
            });

            orbitLines.forEach(l => {
                const p = allEntities.find(e => e.userData.name === l.userData.parentName);
                if (p) l.position.copy(p.position);
            });
        }
    };
}
