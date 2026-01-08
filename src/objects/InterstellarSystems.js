import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v11.0.0 - "Roche Lobe Nebula Plume" 
 * Fixes:
 * - Resolved fatal syntax error (constpts).
 * - Removed "Geometry Pipe" appearance using Gaussian Radial Alpha.
 * - Implemented high-frequency nebula filaments for RLOF realism.
 * - Ultra-Smooth Physics: Large radius centrifugal spiral.
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

    // Procedural Nebula Texture for Gaseous Plumes
    const createNebulaTexture = (type = 'disk') => {
        const size = 1024;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);

        if (type === 'disk') {
            const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.1, 'rgba(120, 245, 255, 0.9)');
            grad.addColorStop(0.4, 'rgba(40, 160, 255, 0.45)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);
            ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < 3000; i++) {
                const a = Math.random() * Math.PI * 2, r = Math.pow(Math.random(), 0.7) * size / 2;
                ctx.fillStyle = `rgba(180, 240, 255, ${Math.random() * 0.05})`;
                ctx.beginPath(); ctx.arc(size / 2 + Math.cos(a) * r, size / 2 + Math.sin(a) * r, Math.random() * 2 + 1, 0, Math.PI * 2); ctx.fill();
            }
        } else {
            // "Gaseous Plume Texture": Gaussian radial fade + longitudinal wisps
            // This is the secret to killing the "Pipe" look.
            const grad = ctx.createLinearGradient(0, 0, 0, size);
            // Alpha falls off towards edges (0 and 1) VERY aggressively
            grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
            grad.addColorStop(0.25, 'rgba(255, 255, 255, 0.1)');
            grad.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.75, 'rgba(255, 255, 255, 0.1)');
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);

            // Add high-frequency filaments along the flow axis
            ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < 1800; i++) {
                const x = Math.random() * size, y = Math.random() * size;
                const w = Math.random() * 400 + 100;
                // Density bias towards the center of the flow
                const bias = Math.exp(-Math.pow(x / size - 0.5, 2) * 20);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.12 * bias})`;
                ctx.fillRect(x, y, w, 1);
            }
        }
        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.anisotropy = 16;
        return tex;
    };

    const hqDiskTex = createNebulaTexture('disk');
    const hqPlumeTex = createNebulaTexture('plume');

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
                emissiveIntensity: 5.0
            });
            if (data.texture) material.map = textureLoader.load(`textures/${data.texture}`);
            mesh = new THREE.Mesh(geometry, material);
            if (data.isDistorted && data.distortionAxes) {
                mesh.scale.set(baseScale * (data.distortionAxes.x || 1), baseScale * (data.distortionAxes.y || 1), baseScale * (data.distortionAxes.z || 1.8));
            } else { mesh.scale.setScalar(baseScale); }
            selectable.push(mesh);
        } else { mesh = new THREE.Object3D(); }

        const maxD = data.distortionAxes ? Math.max(data.distortionAxes.x || 1, data.distortionAxes.y || 1, data.distortionAxes.z || 1.8) : 1;
        mesh.userData = { ...data, name: data.name, visualScale: baseScale, maxVisualRadius: baseScale * maxD, parentName: parentName, depth: depth, angle: data.orbit?.startAngle ?? Math.random() * Math.PI * 2 };
        container.add(mesh);
        allEntities.push(mesh);

        if (data.hasRelativisticJets) {
            const jetGroup = new THREE.Group();
            const jetLen = baseScale * 900;
            const jetGeo = new THREE.CylinderGeometry(baseScale * 0.1, baseScale * 4, jetLen, 32, 1, true);
            const jetMat = new THREE.MeshBasicMaterial({ color: 0x00ccff, map: hqDiskTex, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
            const jN = new THREE.Mesh(jetGeo, jetMat); jN.position.y = jetLen / 2;
            const jS = new THREE.Mesh(jetGeo, jetMat.clone()); jS.position.y = -jetLen / 2; jS.rotation.z = Math.PI;
            jetGroup.add(jN, jS); container.add(jetGroup); relativisticJets.push({ group: jetGroup, parentName: data.name });
        }

        if (data.hasAccretionDisk) {
            const diskSize = data.diskRadius || (baseScale * 20);
            const dg = new THREE.Group();
            for (let i = 0; i < 4; i++) {
                const rs = diskSize * (1.0 + i * 0.1);
                const r = new THREE.Mesh(new THREE.RingGeometry(baseScale * 0.1, rs, 128), new THREE.MeshBasicMaterial({ map: hqDiskTex, transparent: true, opacity: 0.8 - i * 0.2, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false }));
                r.rotation.x = -Math.PI / 2; r.position.y = (i - 1.5) * (diskSize * 0.04); dg.add(r);
            }
            container.add(dg); accretionDisks.push({ group: dg, parentName: data.name, outerRadius: diskSize });
        }

        if (data.hasGasStream) {
            const sg = new THREE.Group();
            const mat = new THREE.MeshBasicMaterial({
                map: hqPlumeTex, vertexColors: true, transparent: true,
                blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false
            });
            const m = new THREE.Mesh(new THREE.BufferGeometry(), mat);
            sg.add(m);
            container.add(sg); gasStreams.push({ group: sg, source: data.name, target: parentName });
        }

        if (data.orbit) {
            const pts = [];
            for (let i = 0; i <= 128; i++) {
                const a = (i / 128) * Math.PI * 2;
                pts.push(new THREE.Vector3(Math.cos(a) * data.orbit.radius, 0, Math.sin(a) * data.orbit.radius));
            }
            const o = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xff3300, transparent: true, opacity: 0.3 }));
            if (data.orbit.inclination) o.rotation.x = THREE.MathUtils.degToRad(data.orbit.inclination);
            o.userData = { parentName }; container.add(o); orbitLines.push(o);
        }

        if (data.planets) { data.planets.forEach(p => createEntity(p, data.name, container, depth + 1, systemName)); }
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
                const d = e.userData; if (!d.orbit) return;
                const p = d.parentName ? allEntities.find(parent => parent.userData.name === d.parentName) : null;
                if (!p) return;
                d.angle += (d.orbit.speed || 0.1) * simSpeed * delta * 0.1;
                const r = d.orbit.radius, x = Math.cos(d.angle) * r, z = Math.sin(d.angle) * r;
                if (d.orbit.inclination) {
                    const inc = THREE.MathUtils.degToRad(d.orbit.inclination);
                    e.position.set(p.position.x + x, p.position.y - z * Math.sin(inc), p.position.z + z * Math.cos(inc));
                } else { e.position.set(p.position.x + x, p.position.y, p.position.z + z); }
                if (d.isDistorted) { p.getWorldPosition(wp); e.lookAt(wp); }
            });

            accretionDisks.forEach(ad => {
                const p = allEntities.find(e => e.userData.name === ad.parentName);
                if (p) { ad.group.position.copy(p.position); ad.group.children.forEach((r, i) => r.rotation.z += (0.04 - i * 0.01) * simSpeed); }
            });

            relativisticJets.forEach(jet => {
                const p = allEntities.find(e => e.userData.name === jet.parentName);
                if (p) { jet.group.position.copy(p.position); jet.group.children.forEach(j => j.material.map.offset.y -= 3.0 * simSpeed * delta); }
            });

            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source), t = allEntities.find(e => e.userData.name === gs.target), disk = accretionDisks.find(d => d.parentName === gs.target);
                if (s && t && disk) {
                    const dir = new THREE.Vector3().subVectors(t.position, s.position).normalize(); if (isNaN(dir.x)) return;
                    const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
                    const dist = s.position.distanceTo(t.position), scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8), tip = s.position.clone().add(dir.clone().multiplyScalar(scaledZ));

                    // RLOF NATURAL SPIRAL: Final High-Physics Curve
                    const p1 = tip;
                    const p2 = s.position.clone().add(dir.clone().multiplyScalar(dist * 0.45)).add(perp.clone().multiplyScalar(disk.outerRadius * 2.5));
                    const p3 = t.position.clone().add(dir.clone().multiplyScalar(-disk.outerRadius * 1.5)).add(perp.clone().multiplyScalar(disk.outerRadius * 1.8));
                    const p4 = t.position.clone().add(perp.clone().multiplyScalar(disk.outerRadius * 0.9));

                    const curve = new THREE.CatmullRomCurve3([p1, p2, p3, p4], false, 'centripetal', 0.5);
                    const mesh = gs.group.children[0];
                    // Dynamic Plume Scaling: Wide at source, focused at target
                    const tubeGeo = new THREE.TubeGeometry(curve, 64, s.userData.visualScale * 5.0, 10, false);

                    const colors = [];
                    const cS = new THREE.Color(0xff8822), cT = new THREE.Color(0x33bcff);
                    const count = tubeGeo.attributes.position.count;
                    for (let i = 0; i < count; i++) {
                        const tVal = i / count;
                        const c = cS.clone().lerp(cT, Math.pow(tVal, 1.3));
                        colors.push(c.r, c.g, c.b);
                    }
                    tubeGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                    if (mesh.geometry) mesh.geometry.dispose();
                    mesh.geometry = tubeGeo;
                    mesh.material.map.offset.y -= 1.5 * simSpeed * delta;
                    mesh.material.opacity = 0.82 + Math.sin(Date.now() * 0.003) * 0.04;
                }
            });

            orbitLines.forEach(l => { const p = allEntities.find(e => e.userData.name === l.userData.parentName); if (p) l.position.copy(p.position); });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => { orbitLines.forEach(l => l.visible = b); }
    };
}
