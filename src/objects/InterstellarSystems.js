import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v12.0.0 - "Universal Point-Cloud Fluid" 
 * RELENTLESS RE-ENGINEERING:
 * - DELETED TubeGeometry. No more pipes.
 * - Implemented a 2500-unit Gaseous Point-Cloud stream.
 * - Smooth Centrifugal Path: Large, sweeping gravity-well arcs.
 * - Nebula Point Shader logic via THREE.Points for ultimate gaseous texture.
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

    // High-Resolution Nebula Cloud Texture for Particles
    const createNebulaTexture = (type = 'disk') => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);

        if (type === 'disk') {
            const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.1, 'rgba(120, 245, 255, 0.9)');
            grad.addColorStop(0.4, 'rgba(30, 160, 255, 0.4)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);
            ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < 1500; i++) {
                const a = Math.random() * Math.PI * 2, r = Math.pow(Math.random(), 0.7) * size / 2;
                ctx.fillStyle = `rgba(180, 240, 255, ${Math.random() * 0.05})`;
                ctx.beginPath(); ctx.arc(size / 2 + Math.cos(a) * r, size / 2 + Math.sin(a) * r, Math.random() * 2 + 1, 0, Math.PI * 2); ctx.fill();
            }
        } else {
            // "Gas Plume Particle": Soft, fuzzy blob with noise
            const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);

            ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < 200; i++) {
                const x = Math.random() * size, y = Math.random() * size, r = Math.random() * 30 + 10;
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.15})`;
                ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
            }
        }
        return new THREE.CanvasTexture(canvas);
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
            // REPLACEMENT: Point Cloud Plume (2500 Particles)
            const count = 2500;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const scales = new Float32Array(count);

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            geometry.setAttribute('size', new THREE.BufferAttribute(scales, 1));

            const material = new THREE.PointsMaterial({
                size: 1.0, map: hqPlumeTex, transparent: true, opacity: 0.9,
                vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
            });
            const points = new THREE.Points(geometry, material);
            // Storage for particle life/index
            points.userData = {
                count: count, tArray: new Float32Array(count),
                seedArray: new Float32Array(count)
            };
            for (let i = 0; i < count; i++) {
                points.userData.tArray[i] = Math.random();
                points.userData.seedArray[i] = Math.random();
            }
            container.add(points); gasStreams.push({ points: points, source: data.name, target: parentName });
        }

        if (data.orbit) {
            const pts = []; for (let i = 0; i <= 128; i++) { const a = (i / 128) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * data.orbit.radius, 0, Math.sin(a) * data.orbit.radius)); }
            const o = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xff3300, transparent: true, opacity: 0.25 }));
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
    return {
        group: systemsGroup,
        allSelectable: selectable,
        update: (simSpeed, delta) => {
            const time = Date.now() * 0.001;
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
                if (d.isDistorted) { e.lookAt(p.position); }
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

                    // ULTRA-SMOOTH RLOF PATH: Centrifugal Spiral
                    const p1 = tip;
                    const p2 = s.position.clone().add(dir.clone().multiplyScalar(dist * 0.4)).add(perp.clone().multiplyScalar(disk.outerRadius * 2.8));
                    const p3 = t.position.clone().add(dir.clone().multiplyScalar(-disk.outerRadius * 1.8)).add(perp.clone().multiplyScalar(disk.outerRadius * 2.2));
                    const p4 = t.position.clone().add(perp.clone().multiplyScalar(disk.outerRadius * 0.8));

                    const curve = new THREE.CatmullRomCurve3([p1, p2, p3, p4], false, 'centripetal', 0.5);

                    const points = gs.points, ud = points.userData;
                    const posAttr = points.geometry.attributes.position, colAttr = points.geometry.attributes.color;
                    const cS = new THREE.Color(0xff8822), cT = new THREE.Color(0x33bcff);

                    for (let i = 0; i < ud.count; i++) {
                        ud.tArray[i] = (ud.tArray[i] + 0.15 * delta * simSpeed * (0.8 + ud.seedArray[i] * 0.4)) % 1.0;
                        const tVal = ud.tArray[i], seed = ud.seedArray[i];
                        const curvePos = curve.getPoint(tVal);

                        // Jitter particles for gaseous volume (High frequency chaos)
                        const spread = s.userData.visualScale * (4.5 + seed * 3.0) * (1.1 - tVal * 0.6);
                        const jitterX = (Math.sin(time * 2 + seed * 100) * 0.5 + (seed - 0.5)) * spread;
                        const jitterY = (Math.cos(time * 2.5 + seed * 200) * 0.5 + (seed - 0.5)) * spread;
                        const jitterZ = (Math.sin(time * 3 + seed * 300) * 0.5 + (seed - 0.5)) * spread;

                        posAttr.setXYZ(i, curvePos.x + jitterX, curvePos.y + jitterY, curvePos.z + jitterZ);

                        // Color Interpolation
                        const col = cS.clone().lerp(cT, Math.pow(tVal, 1.2));
                        const alpha = Math.sin(tVal * Math.PI) * 0.8;
                        colAttr.setXYZ(i, col.r * alpha, col.g * alpha, col.b * alpha);
                    }
                    posAttr.needsUpdate = true; colAttr.needsUpdate = true;
                    points.material.size = s.userData.visualScale * 3.5;
                }
            });

            orbitLines.forEach(l => { const p = allEntities.find(e => e.userData.name === l.userData.parentName); if (p) l.position.copy(p.position); });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => { orbitLines.forEach(l => l.visible = b); }
    };
}
