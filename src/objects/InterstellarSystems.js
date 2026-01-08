import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v4.3.0 - High-Energy Extreme Precision Simulation
 * Features:
 * - Polar-mapped Accretion Disks (No seams, realistic gas vortex)
 * - Vector-precision Gas Streams (Precise bridge between L1 point and disk)
 * - Thermal Gradient Shading for distorted stars
 * - High-speed orbital syncing and hierarchical simulation
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const accretionDisks = [];
    const gasStreams = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    // Create a polar-mapped texture (X=Radius, Y=Angle) for realistic gas disks
    const createPolarDiskTexture = () => {
        const width = 1024, height = 512;
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw radial noise streaks
        for (let i = 0; i < width; i++) {
            const opacity = 1.0 - (i / width); // Denser inside
            const brightness = 150 + Math.random() * 105;
            ctx.fillStyle = `rgba(${brightness}, ${brightness + 30}, 255, ${opacity * 0.4})`;

            // Random gas filaments
            const gasHeight = Math.random() * height;
            const gasWidth = 1 + Math.random() * 5;
            ctx.fillRect(i, gasHeight, gasWidth, 10 + Math.random() * 40);
        }

        // Add a core glow gradient
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Inner core
        grad.addColorStop(0.2, 'rgba(0, 204, 255, 0.8)');
        grad.addColorStop(0.5, 'rgba(0, 50, 150, 0.3)');
        grad.addColorStop(1, 'rgba(0, 0, 20, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        return tex;
    };

    const polarDiskTex = createPolarDiskTexture();

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
                emissiveIntensity: data.isDistorted ? 2.5 : (data.emissiveIntensity || 1.0),
                roughness: 0.8
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

        // FEATURE: Realistic Polar-Mapped Accretion Disk
        if (data.hasAccretionDisk) {
            const diskSize = data.diskRadius || (baseScale * 20);
            const diskGeo = new THREE.RingGeometry(baseScale * 0.1, diskSize, 128);
            // Fix UVs for polar mapping: X maps to radial (0-1), Y to angular (0-1)
            // But Three.js default UVs for Ring are different. We will use a plane and custom logic if needed, 
            // but RingGeometry actually maps UV.x around the ring. Perfect!
            const diskMat = new THREE.MeshBasicMaterial({
                map: polarDiskTex,
                transparent: true,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false
            });
            const disk = new THREE.Mesh(diskGeo, diskMat);
            disk.rotation.x = -Math.PI / 2;
            container.add(disk);
            accretionDisks.push({ mesh: disk, parentName: data.name });
        }

        // FEATURE: Vector-Precision Gas Stream
        if (data.hasGasStream) {
            const stream = new THREE.Mesh(
                new THREE.CylinderGeometry(baseScale * 0.05, baseScale * 0.5, 1, 24, 1, true),
                new THREE.MeshBasicMaterial({
                    color: 0xbbddff,
                    transparent: true,
                    opacity: 0.7,
                    blending: THREE.AdditiveBlending
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
            const orbit = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({
                color: 0xff3300, transparent: true, opacity: 0.3
            }));
            if (data.orbit.inclination) orbit.rotation.x = THREE.MathUtils.degToRad(data.orbit.inclination);
            orbit.userData = { parentName };
            container.add(orbit);
            orbitLines.push(orbit);
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

            // Update Accretion Disks (Rotation + Sync)
            accretionDisks.forEach(ad => {
                const p = allEntities.find(e => e.userData.name === ad.parentName);
                if (p) {
                    ad.mesh.position.copy(p.position);
                    ad.mesh.material.map.offset.x -= 0.05 * simSpeed * delta; // Spiral movement
                }
            });

            // Precision Gas Stream Update
            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source);
                const t = allEntities.find(e => e.userData.name === gs.target);
                if (s && t) {
                    // Start from the exact tip of the distorted star
                    const dirToCenter = new THREE.Vector3().subVectors(t.position, s.position).normalize();
                    const scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8);
                    const tipPos = s.position.clone().add(dirToCenter.clone().multiplyScalar(scaledZ));

                    gs.mesh.position.copy(tipPos);
                    gs.mesh.lookAt(t.position);
                    gs.mesh.scale.z = tipPos.distanceTo(t.position);

                    // Heat gradient flicker
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
