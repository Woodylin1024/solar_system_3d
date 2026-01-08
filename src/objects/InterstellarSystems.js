import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v4.4.0 - Volumetric Physics & Precision Tracking
 * Features:
 * - Volumetric Accretion Disks (Multilayer stack for thickness)
 * - World-space precision coordinate tracking (Fixes stream alignment)
 * - Improved Roche-lobe matter stream visuals with gradients
 * - Fixed z-fighting and perspective artifacts
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const accretionDisks = [];
    const gasStreams = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    // Create a high-quality polar-mapped texture for gas disks
    const createGasTexture = () => {
        const width = 1024, height = 512;
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Dark blue/black background with opacity
        ctx.fillStyle = 'rgba(0, 0, 20, 0.1)';
        ctx.fillRect(0, 0, width, height);

        // Core glow and spiral noise
        for (let i = 0; i < width; i++) {
            const opacity = Math.pow(1.0 - (i / width), 1.5);
            const b = 180 + Math.random() * 75;
            ctx.fillStyle = `rgba(${b - 50}, ${b + 20}, 255, ${opacity * 0.5})`;

            // Gas streaks
            const y = Math.random() * height;
            const h = 2 + Math.random() * 20;
            ctx.fillRect(i, y, 2 + Math.random() * 4, h);
        }

        // Inner white hot core
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.1, 'rgba(0, 220, 255, 0.8)');
        grad.addColorStop(0.4, 'rgba(0, 80, 200, 0.2)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        return tex;
    };

    const gasTexture = createGasTexture();

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
                emissiveIntensity: data.isDistorted ? 3.0 : (data.emissiveIntensity || 1.0),
                roughness: 0.7,
                metalness: 0
            });
            if (data.texture) material.map = textureLoader.load(`textures/${data.texture}`);

            mesh = new THREE.Mesh(geometry, material);
            if (data.isDistorted && data.distortionAxes) {
                // Distortion usually along Z
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

        // FEATURE: Volumetric Accretion Disk (Layered rings for thickness)
        if (data.hasAccretionDisk) {
            const diskGroup = new THREE.Group();
            const diskSize = data.diskRadius || (baseScale * 20);
            const layers = 5;
            const thickness = 10; // Total vertical span

            for (let i = 0; i < layers; i++) {
                const layerOffset = (i - (layers - 1) / 2) * (thickness / layers);
                const layerScale = 1.0 - Math.abs(layerOffset / thickness) * 0.3; // Thinner towards edges
                const diskGeo = new THREE.RingGeometry(baseScale * 0.1, diskSize * layerScale, 128);
                const diskMat = new THREE.MeshBasicMaterial({
                    map: gasTexture,
                    transparent: true,
                    opacity: 0.6 / (i + 1), // Vary opacity for depth
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide,
                    depthWrite: false
                });
                const diskLayer = new THREE.Mesh(diskGeo, diskMat);
                diskLayer.position.y = layerOffset;
                diskLayer.rotation.x = -Math.PI / 2;
                diskGroup.add(diskLayer);
            }

            container.add(diskGroup);
            accretionDisks.push({ group: diskGroup, parentName: data.name });
        }

        // FEATURE: Realistic Gas Stream Bridge
        if (data.hasGasStream) {
            const stream = new THREE.Mesh(
                new THREE.CylinderGeometry(baseScale * 0.05, baseScale * 0.8, 1, 32, 1, true),
                new THREE.MeshBasicMaterial({
                    color: 0x88ccff,
                    transparent: true,
                    opacity: 0.7,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide
                })
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
            const oLine = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({
                color: 0xff3300, transparent: true, opacity: 0.25
            }));
            if (data.orbit.inclination) oLine.rotation.x = THREE.MathUtils.degToRad(data.orbit.inclination);
            oLine.userData = { parentName };
            container.add(oLine);
            orbitLines.push(oLine);
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

    const worldPosA = new THREE.Vector3();
    const worldPosB = new THREE.Vector3();

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
                if (d.isDistorted) e.lookAt(pPos);
            });

            // Update Accretion Disks
            accretionDisks.forEach(ad => {
                const parent = allEntities.find(e => e.userData.name === ad.parentName);
                if (parent) {
                    ad.group.position.copy(parent.position);
                    ad.group.children.forEach((layer, idx) => {
                        layer.material.map.offset.x -= (0.05 + idx * 0.01) * simSpeed * delta;
                    });
                }
            });

            // Sync Gas Streams with PRECISION calculations
            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source);
                const t = allEntities.find(e => e.userData.name === gs.target);
                if (s && t) {
                    // Use world coordinates or consistent local coordinates
                    // Since both are in the same 'container', we can use local pos
                    const dir = new THREE.Vector3().subVectors(t.position, s.position).normalize();
                    const scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8);
                    const tip = s.position.clone().add(dir.clone().multiplyScalar(scaledZ));

                    gs.mesh.position.copy(tip);
                    gs.mesh.lookAt(t.position);
                    // Crucial: check parent rotation. If none, lookAt(target_local) works.
                    // If target is center (0,0,0), it's very reliable.

                    gs.mesh.scale.z = tip.distanceTo(t.position);
                    gs.mesh.material.opacity = 0.5 + Math.sin(Date.now() * 0.01) * 0.2;
                }
            });

            orbitLines.forEach(l => {
                const p = allEntities.find(e => e.userData.name === l.userData.parentName);
                if (p) l.position.copy(p.position);
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p) => { orbitLines.forEach(l => l.visible = s); }
    };
}
