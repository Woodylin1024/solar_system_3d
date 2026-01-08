import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v4.5.0 - World-Space Precision & Volumetric Accretion
 * Fixes:
 * - Proper World-Space tracking for 'lookAt' (Ensures matter stream alignment)
 * - Volumetric Torus Accretion Disks (Adds physical thickness)
 * - Restored UI control compatibility for visibility toggles
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const accretionDisks = [];
    const gasStreams = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    // Procedural Noise Texture generator for gas disks
    const createDiskTexture = () => {
        const size = 1024;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(0, 5, 20, 0.1)';
        ctx.fillRect(0, 0, size, size);

        for (let i = 0; i < 5000; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r = Math.random() * size / 2;
            const b = 150 + Math.random() * 105;
            ctx.fillStyle = `rgba(${b - 50}, ${b + 30}, 255, ${0.1 + Math.random() * 0.3})`;
            ctx.fillRect(size / 2 + Math.cos(angle) * r, size / 2 + Math.sin(angle) * r, 1, 1);
        }

        const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.2, 'rgba(0, 200, 255, 0.7)');
        grad.addColorStop(0.5, 'rgba(0, 100, 255, 0.3)');
        grad.addColorStop(1, 'rgba(0, 0, 50, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);

        return new THREE.CanvasTexture(canvas);
    };

    const diskTex = createDiskTexture();

    const createEntity = (data, parentName, container, depth = 0, systemName) => {
        let mesh;
        const radius = data.radius ?? 1;
        const scaleFactor = data.type === 'star' ? 50 : 40;
        const baseScale = radius * scaleFactor;

        if (radius > 0) {
            const geometry = data.isDistorted ? new THREE.SphereGeometry(1, 64, 64) : new THREE.SphereGeometry(1, 48, 48);
            const material = new THREE.MeshStandardMaterial({
                color: data.color || 0xffffff,
                emissive: data.color || 0xffffff,
                emissiveIntensity: data.isDistorted ? 3.0 : (data.emissiveIntensity || 1.0)
            });
            if (data.texture) material.map = textureLoader.load(`textures/${data.texture}`);

            mesh = new THREE.Mesh(geometry, material);
            if (data.isDistorted && data.distortionAxes) {
                mesh.scale.set(baseScale * (data.distortionAxes.x || 1), baseScale * (data.distortionAxes.y || 1), baseScale * (data.distortionAxes.z || 1.8));
            } else {
                mesh.scale.setScalar(baseScale);
            }
            selectable.push(mesh);
        } else {
            mesh = new THREE.Object3D();
        }

        mesh.userData = {
            ...data,
            name: data.name,
            visualScale: baseScale,
            parentName: parentName,
            depth: depth,
            angle: data.orbit?.startAngle ?? Math.random() * Math.PI * 2
        };

        container.add(mesh);
        allEntities.push(mesh);

        // FEATURE: Volumetric Accretion Disk (Physical thickness)
        if (data.hasAccretionDisk) {
            const diskSize = data.diskRadius || (baseScale * 20);
            const tubeRadius = diskSize * 0.05; // Significant thickness

            // Layer 1: The Core Torus (Volume)
            const torusGeo = new THREE.TorusGeometry(diskSize * 0.6, tubeRadius, 16, 128);
            const torusMat = new THREE.MeshBasicMaterial({
                color: data.diskColor || 0x00ccff,
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending
            });
            const torus = new THREE.Mesh(torusGeo, torusMat);
            torus.rotation.x = Math.PI / 2;

            // Layer 2: Glowing Disk Plane (Detail)
            const diskGeo = new THREE.RingGeometry(baseScale * 0.1, diskSize, 128);
            const diskMat = new THREE.MeshBasicMaterial({ map: diskTex, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
            const diskPlane = new THREE.Mesh(diskGeo, diskMat);
            diskPlane.rotation.x = -Math.PI / 2;

            const diskGroup = new THREE.Group();
            diskGroup.add(torus);
            diskGroup.add(diskPlane);
            container.add(diskGroup);
            accretionDisks.push({ group: diskGroup, parentName: data.name });
        }

        // FEATURE: Matter Stream Bridge
        if (data.hasGasStream) {
            const stream = new THREE.Mesh(
                new THREE.CylinderGeometry(baseScale * 0.05, baseScale * 0.6, 1, 16, 1, true),
                new THREE.MeshBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
            );
            stream.geometry.translate(0, 0.5, 0);
            stream.geometry.rotateX(Math.PI / 2);
            container.add(stream);
            gasStreams.push({ mesh: stream, source: data.name, target: parentName });
        }

        if (data.orbit) {
            const pts = [];
            for (let i = 0; i <= 256; i++) {
                const a = (i / 256) * Math.PI * 2;
                pts.push(new THREE.Vector3(Math.cos(a) * data.orbit.radius, 0, Math.sin(a) * data.orbit.radius));
            }
            const o = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xff3300, transparent: true, opacity: 0.3 }));
            if (data.orbit.inclination) o.rotation.x = THREE.MathUtils.degToRad(data.orbit.inclination);
            o.userData = { parentName };
            container.add(o);
            orbitLines.push(o);
        }

        if (data.planets) {
            data.planets.forEach(p => createEntity(p, data.name, container, depth + 1, systemName));
        }
    };

    nearbyStarSystemsData.forEach(sys => {
        const group = new THREE.Group();
        group.position.set(sys.position.x, sys.position.y, sys.position.z);
        sys.stars.forEach(s => createEntity(s, null, group, 0, sys.name));
        systemsGroup.add(group);
    });

    scene.add(systemsGroup);
    allEntities.sort((a, b) => a.userData.depth - b.userData.depth);

    const worldPosTarget = new THREE.Vector3();

    return {
        group: systemsGroup,
        allSelectable: selectable,
        update: (simSpeed, delta) => {
            allEntities.forEach(e => {
                const d = e.userData;
                if (!d.orbit) return;
                const parent = d.parentName ? allEntities.find(p => p.userData.name === d.parentName) : null;
                const pPos = parent ? parent.position : new THREE.Vector3(0, 0, 0);

                d.angle += (d.orbit.speed || 0.1) * simSpeed * delta * 0.1;
                const r = d.orbit.radius;
                const x = Math.cos(d.angle) * r;
                const z = Math.sin(d.angle) * r;
                if (d.orbit.inclination) {
                    const inc = THREE.MathUtils.degToRad(d.orbit.inclination);
                    e.position.set(pPos.x + x, pPos.y - z * Math.sin(inc), pPos.z + z * Math.cos(inc));
                } else {
                    e.position.set(pPos.x + x, pPos.y, pPos.z + z);
                }

                if (d.isDistorted && parent) {
                    // FIX: Must use world coordinates for lookAt to avoid local space ambiguity
                    parent.getWorldPosition(worldPosTarget);
                    e.lookAt(worldPosTarget);
                }
            });

            accretionDisks.forEach(ad => {
                const p = allEntities.find(e => e.userData.name === ad.parentName);
                if (p) {
                    ad.group.position.copy(p.position);
                    ad.group.children[1].rotation.z += 0.05 * simSpeed;
                }
            });

            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source);
                const t = allEntities.find(e => e.userData.name === gs.target);
                if (s && t) {
                    // FIX: Precise world-aligned bridge
                    t.getWorldPosition(worldPosTarget);
                    const localTarget = gs.mesh.parent.worldToLocal(worldPosTarget.clone());

                    const dir = new THREE.Vector3().subVectors(localTarget, s.position).normalize();
                    const scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8);
                    const tip = s.position.clone().add(dir.multiplyScalar(scaledZ));

                    gs.mesh.position.copy(tip);
                    gs.mesh.lookAt(worldPosTarget); // Face the world target
                    gs.mesh.scale.z = tip.distanceTo(localTarget);
                    gs.mesh.material.opacity = 0.5 + Math.sin(Date.now() * 0.005) * 0.2;
                }
            });

            orbitLines.forEach(l => {
                const p = allEntities.find(e => e.userData.name === l.userData.parentName);
                if (p) l.position.copy(p.position);
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => {
            orbitLines.forEach(l => l.visible = b); // Corrected toggle association
        }
    };
}
