import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v5.0.0 - Microquasar Final Form
 * Features:
 * - Relativistic Jets (Polar particle beams)
 * - Curved Spline Gas Streams (Realistic spiral matter transfer)
 * - Volumetric Accretion Disks with gas swirls
 * - Dynamic Thermal Gradients & Lighting
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const accretionDisks = [];
    const gasStreams = [];
    const relativisticJets = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    // High-quality procedural textures
    const createGasTex = (isDisk = true) => {
        const size = 1024;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fillRect(0, 0, size, size);

        if (isDisk) {
            // Spiral gas for disk
            const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.2, 'rgba(0, 204, 255, 0.8)');
            grad.addColorStop(0.5, 'rgba(0, 80, 255, 0.4)');
            grad.addColorStop(1, 'rgba(0, 0, 50, 0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, size, size);

            for (let i = 0; i < 800; i++) {
                const a = Math.random() * Math.PI * 2;
                const r = Math.random() * size / 2;
                ctx.fillStyle = `rgba(150, 230, 255, ${Math.random() * 0.2})`;
                ctx.beginPath();
                ctx.arc(size / 2 + Math.cos(a) * r, size / 2 + Math.sin(a) * r, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        } else {
            // Linear gas for stream/jets
            const grad = ctx.createLinearGradient(0, 0, 0, size);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
            grad.addColorStop(0.5, 'rgba(0, 255, 255, 0.8)');
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, size, size);
        }

        return new THREE.CanvasTexture(canvas);
    };

    const diskTex = createGasTex(true);
    const beamTex = createGasTex(false);

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
                emissiveIntensity: data.isDistorted ? 4.0 : (data.emissiveIntensity || 1.0)
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

        // FEATURE: Realistic Jets
        if (data.hasRelativisticJets) {
            const jetLen = baseScale * 500;
            const jetGeo = new THREE.CylinderGeometry(baseScale * 0.5, baseScale * 5, jetLen, 32, 1, true);
            const jetMat = new THREE.MeshBasicMaterial({
                color: 0x00ccff, map: beamTex, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending
            });

            const jetNorth = new THREE.Mesh(jetGeo, jetMat);
            jetNorth.position.y = jetLen / 2;
            const jetSouth = new THREE.Mesh(jetGeo, jetMat);
            jetSouth.position.y = -jetLen / 2;
            jetSouth.rotation.z = Math.PI;

            const jetGroup = new THREE.Group();
            jetGroup.add(jetNorth);
            jetGroup.add(jetSouth);
            container.add(jetGroup);
            relativisticJets.push({ group: jetGroup, parentName: data.name });
        }

        // FEATURE: Volumetric Accretion Disk (HD Torus)
        if (data.hasAccretionDisk) {
            const diskSize = data.diskRadius || (baseScale * 20);
            const torGeo = new THREE.TorusGeometry(diskSize * 0.7, diskSize * 0.15, 32, 128);
            const torMat = new THREE.MeshBasicMaterial({
                color: data.diskColor || 0x00ccff, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending
            });
            const torus = new THREE.Mesh(torGeo, torMat);
            torus.rotation.x = Math.PI / 2;

            const ringGeo = new THREE.RingGeometry(baseScale * 0.1, diskSize, 128);
            const ringMat = new THREE.MeshBasicMaterial({
                map: diskTex, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = -Math.PI / 2;

            const diskGroup = new THREE.Group();
            diskGroup.add(torus); diskGroup.add(ring);
            container.add(diskGroup);
            accretionDisks.push({ group: diskGroup, parentName: data.name });
        }

        // FEATURE: Curved Spline Matter Stream (Tendex Line)
        if (data.hasGasStream) {
            // We use a TubeGeometry but update its vertices or points in the update loop
            // For now, prepare a structure
            const streamMat = new THREE.MeshBasicMaterial({
                color: 0xffaa00, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, side: THREE.DoubleSide
            });
            const streamMesh = new THREE.Mesh(new THREE.BufferGeometry(), streamMat);
            container.add(streamMesh);
            gasStreams.push({ mesh: streamMesh, source: data.name, target: parentName });
        }

        if (data.orbit) {
            const pts = [];
            for (let i = 0; i <= 256; i++) {
                const a = (i / 256) * Math.PI * 2;
                pts.push(new THREE.Vector3(Math.cos(a) * data.orbit.radius, 0, Math.sin(a) * data.orbit.radius));
            }
            const oLn = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xff3300, transparent: true, opacity: 0.2 }));
            if (data.orbit.inclination) oLn.rotation.x = THREE.MathUtils.degToRad(data.orbit.inclination);
            oLn.userData = { parentName };
            container.add(oLn);
            orbitLines.push(oLn);
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

    const wp = new THREE.Vector3();

    return {
        group: systemsGroup,
        allSelectable: selectable,
        update: (simSpeed, delta) => {
            allEntities.forEach(e => {
                const d = e.userData;
                if (!d.orbit) return;
                const parent = d.parentName ? allEntities.find(p => p.userData.name === d.parentName) : null;
                if (parent) {
                    d.angle += (d.orbit.speed || 0.1) * simSpeed * delta * 0.1;
                    const r = d.orbit.radius;
                    const x = Math.cos(d.angle) * r;
                    const z = Math.sin(d.angle) * r;
                    if (d.orbit.inclination) {
                        const inc = THREE.MathUtils.degToRad(d.orbit.inclination);
                        e.position.set(parent.position.x + x, parent.position.y - z * Math.sin(inc), parent.position.z + z * Math.cos(inc));
                    } else {
                        e.position.set(parent.position.x + x, parent.position.y, parent.position.z + z);
                    }
                    if (d.isDistorted) {
                        parent.getWorldPosition(wp);
                        e.lookAt(wp);
                    }
                }
            });

            accretionDisks.forEach(ad => {
                const p = allEntities.find(e => e.userData.name === ad.parentName);
                if (p) {
                    ad.group.position.copy(p.position);
                    ad.group.children[1].rotation.z += 0.05 * simSpeed;
                }
            });

            relativisticJets.forEach(jet => {
                const p = allEntities.find(e => e.userData.name === jet.parentName);
                if (p) {
                    jet.group.position.copy(p.position);
                    jet.group.children.forEach(j => {
                        j.material.map.offset.y -= 2.0 * simSpeed * delta;
                    });
                }
            });

            // UPDATE: Curved Matter Stream (Spline Path)
            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source);
                const t = allEntities.find(e => e.userData.name === gs.target);
                if (s && t) {
                    const dir = new THREE.Vector3().subVectors(t.position, s.position).normalize();
                    const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
                    const scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8);
                    const tip = s.position.clone().add(dir.clone().multiplyScalar(scaledZ));

                    // Create Spline
                    const mid = s.position.clone().add(dir.clone().multiplyScalar(s.position.distanceTo(t.position) * 0.6)).add(perp.multiplyScalar(300));
                    const impact = t.position.clone().add(perp.multiplyScalar(400));

                    const curve = new THREE.CatmullRomCurve3([tip, mid, impact, t.position]);
                    const points = curve.getPoints(50);
                    const pipeGeo = new THREE.TubeGeometry(curve, 50, s.userData.visualScale * 0.15, 8, false);

                    if (gs.mesh.geometry) gs.mesh.geometry.dispose();
                    gs.mesh.geometry = pipeGeo;

                    // Gradient: Orange near star, Blue near disk
                    gs.mesh.material.color.setHSL(0.08 + Math.sin(Date.now() * 0.001) * 0.02, 1.0, 0.6); // Slightly pulse orange
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
            orbitLines.forEach(l => l.visible = b);
        }
    };
}
