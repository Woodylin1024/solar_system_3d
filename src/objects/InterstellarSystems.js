import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v5.3.0 - Volumetric Gas Cloud Overhaul
 * Fixes:
 * - Replaced "geometric donut" (Torus) with a soft, volumetric gaseous envelope.
 * - Improved matter stream entry points for natural spiral flow.
 * - Enhanced nebula textures with multi-layered depth.
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

    // High-resolution "Gaseous/Volumetric" texture generator
    const createVolumetricTexture = (type = 'disk') => {
        const size = 1024;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);

        if (type === 'disk') {
            const grad = ctx.createRadialGradient(size / 2, size / 2, size * 0.05, size / 2, size / 2, size / 2);
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.2, 'rgba(0, 230, 255, 0.7)');
            grad.addColorStop(0.4, 'rgba(0, 100, 255, 0.3)');
            grad.addColorStop(0.8, 'rgba(0, 20, 100, 0.1)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, size, size);

            // Add turbulence
            for (let i = 0; i < 4000; i++) {
                const a = Math.random() * Math.PI * 2;
                const r = Math.random() * size / 2;
                ctx.fillStyle = `rgba(180, 240, 255, ${Math.random() * 0.1})`;
                ctx.beginPath();
                ctx.arc(size / 2 + Math.cos(a) * r, size / 2 + Math.sin(a) * r, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        } else {
            // Stream nebulosity
            const grad = ctx.createLinearGradient(0, 0, 0, size);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
            grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, size, size);
        }

        const tex = new THREE.CanvasTexture(canvas);
        tex.anisotropy = 16;
        return tex;
    };

    const hqDiskTex = createVolumetricTexture('disk');
    const hqStreamTex = createVolumetricTexture('stream');

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
                emissiveIntensity: data.isDistorted ? 4.5 : (data.emissiveIntensity || 1.0)
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

        if (data.hasRelativisticJets) {
            const jetGroup = new THREE.Group();
            const jetLen = baseScale * 500;
            const jetGeo = new THREE.CylinderGeometry(baseScale * 0.2, baseScale * 4, jetLen, 32, 1, true);
            const jetMat = new THREE.MeshBasicMaterial({ color: 0x00ccff, map: hqStreamTex, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending });
            const jN = new THREE.Mesh(jetGeo, jetMat); jN.position.y = jetLen / 2;
            const jS = new THREE.Mesh(jetGeo, jetMat.clone()); jS.position.y = -jetLen / 2; jS.rotation.z = Math.PI;
            jetGroup.add(jN, jS);
            container.add(jetGroup);
            relativisticJets.push({ group: jetGroup, parentName: data.name });
        }

        // NEW: FOOL-PROOF VOLUMETRIC ACCRETION DISK
        if (data.hasAccretionDisk) {
            const diskSize = data.diskRadius || (baseScale * 20);
            const diskGroup = new THREE.Group();

            // Layer 1: Volumetric Envelope (A flattened sphere - looks like gas, not a donut)
            const envGeo = new THREE.SphereGeometry(1, 64, 32);
            const envMat = new THREE.MeshBasicMaterial({
                color: 0x0066ff,
                transparent: true,
                opacity: 0.25,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            const envelope = new THREE.Mesh(envGeo, envMat);
            envelope.scale.set(diskSize, diskSize * 0.15, diskSize); // High aspect ratio
            diskGroup.add(envelope);

            // Layer 2: Glowing Core Dust (Another even softer layer)
            const coreEnv = envelope.clone();
            coreEnv.scale.set(diskSize * 0.6, diskSize * 0.1, diskSize * 0.6);
            coreEnv.material = new THREE.MeshBasicMaterial({
                color: 0x00ccff,
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            diskGroup.add(coreEnv);

            // Layer 3: High-Res Detailed Spinning Ring (The part that looks good)
            const ringGeo = new THREE.RingGeometry(baseScale * 0.1, diskSize, 128);
            const ringMat = new THREE.MeshBasicMaterial({
                map: hqDiskTex,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = -Math.PI / 2;
            diskGroup.add(ring);

            container.add(diskGroup);
            accretionDisks.push({ group: diskGroup, parentName: data.name, outerRadius: diskSize });
        }

        if (data.hasGasStream) {
            const mat = new THREE.MeshBasicMaterial({
                map: hqStreamTex, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false
            });
            const sMesh = new THREE.Mesh(new THREE.BufferGeometry(), mat);
            container.add(sMesh);
            gasStreams.push({ mesh: sMesh, source: data.name, target: parentName });
        }

        if (data.orbit) {
            const pts = [];
            for (let i = 0; i <= 128; i++) {
                const a = (i / 128) * Math.PI * 2;
                pts.push(new THREE.Vector3(Math.cos(a) * data.orbit.radius, 0, Math.sin(a) * data.orbit.radius));
            }
            const o = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xff3300, transparent: true, opacity: 0.15 }));
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

    const wp = new THREE.Vector3();

    return {
        group: systemsGroup,
        allSelectable: selectable,
        update: (simSpeed, delta) => {
            allEntities.forEach(e => {
                const d = e.userData;
                if (!d.orbit) return;
                const p = d.parentName ? allEntities.find(parent => parent.userData.name === d.parentName) : null;
                if (!p) return;
                d.angle += (d.orbit.speed || 0.1) * simSpeed * delta * 0.1;
                const r = d.orbit.radius, x = Math.cos(d.angle) * r, z = Math.sin(d.angle) * r;
                if (d.orbit.inclination) {
                    const inc = THREE.MathUtils.degToRad(d.orbit.inclination);
                    e.position.set(p.position.x + x, p.position.y - z * Math.sin(inc), p.position.z + z * Math.cos(inc));
                } else {
                    e.position.set(p.position.x + x, p.position.y, p.position.z + z);
                }
                if (d.isDistorted) { p.getWorldPosition(wp); e.lookAt(wp); }
            });

            accretionDisks.forEach(ad => {
                const p = allEntities.find(e => e.userData.name === ad.parentName);
                if (p) {
                    ad.group.position.copy(p.position);
                    // Rotate the ring layer
                    ad.group.children[2].rotation.z += 0.03 * simSpeed;
                }
            });

            relativisticJets.forEach(jet => {
                const p = allEntities.find(e => e.userData.name === jet.parentName);
                if (p) {
                    jet.group.position.copy(p.position);
                    jet.group.children.forEach(j => j.material.map.offset.y -= 3.0 * simSpeed * delta);
                }
            });

            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source);
                const t = allEntities.find(e => e.userData.name === gs.target);
                const disk = accretionDisks.find(d => d.parentName === gs.target);
                if (s && t && disk) {
                    const dir = new THREE.Vector3().subVectors(t.position, s.position).normalize();
                    if (isNaN(dir.x)) return;

                    const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
                    const dist = s.position.distanceTo(t.position);
                    const scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8);
                    const tip = s.position.clone().add(dir.clone().multiplyScalar(scaledZ));

                    const p1 = tip;
                    const p2 = s.position.clone().add(dir.clone().multiplyScalar(dist * 0.4)).add(perp.clone().multiplyScalar(disk.outerRadius * 2.0));
                    const p3 = t.position.clone().add(dir.clone().multiplyScalar(-disk.outerRadius * 0.7)).add(perp.clone().multiplyScalar(disk.outerRadius * 1.3));
                    const p4 = t.position.clone().add(perp.clone().multiplyScalar(disk.outerRadius * 0.4));

                    const curve = new THREE.CatmullRomCurve3([p1, p2, p3, p4], false, 'catmullrom', 0.5);
                    const pipeGeo = new THREE.TubeGeometry(curve, 64, s.userData.visualScale * 0.25, 8, false);

                    const colors = [];
                    const cS = new THREE.Color(0xffbb33);
                    const cT = new THREE.Color(0x33e0ff);
                    const count = pipeGeo.attributes.position.count;
                    for (let i = 0; i < count; i++) {
                        const tVal = (i / count);
                        const c = cS.clone().lerp(cT, tVal);
                        colors.push(c.r, c.g, c.b);
                    }
                    pipeGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

                    if (gs.mesh.geometry) gs.mesh.geometry.dispose();
                    gs.mesh.geometry = pipeGeo;
                    gs.mesh.material.map.offset.y -= 1.5 * simSpeed * delta;
                }
            });

            orbitLines.forEach(l => {
                const p = allEntities.find(e => e.userData.name === l.userData.parentName);
                if (p) l.position.copy(p.position);
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => { orbitLines.forEach(l => l.visible = b); }
    };
}
