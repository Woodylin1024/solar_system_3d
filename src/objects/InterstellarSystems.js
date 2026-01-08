import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v21.0.0 - "Plasma Cloud Inflow"
 * VISUAL SYNC & CONNECTION FIX:
 * - Fluttering Gas Stream: Replaced smooth jitter with irregular particle "jumps" to match the accretion disk style.
 * - Gap Repair: Extended the stream path deeper into the accretion disk and adjusted alpha falloff to prevent "disconnection".
 * - High-Energy Plasma: Both stream and disk now share a consistent animated particle-cluster aesthetic.
 * - Brightness & Color: Maintained the thermal Gold-to-Cyan transition with boosted luminosity.
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

    const createNebulaTexture = (type = 'disk') => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);

        const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        if (type === 'disk') {
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.25, 'rgba(180, 245, 255, 1)');
            grad.addColorStop(0.5, 'rgba(80, 200, 255, 0.9)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }
        ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);
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
                emissiveIntensity: 8.0
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
            const jetLen = baseScale * 1100;
            const jetGeo = new THREE.CylinderGeometry(baseScale * 0.1, baseScale * 4.5, jetLen, 32, 1, true);
            const jetMat = new THREE.MeshBasicMaterial({ color: 0x99f7ff, map: hqPlumeTex, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false });
            const jN = new THREE.Mesh(jetGeo, jetMat); jN.position.y = jetLen / 2;
            const jS = new THREE.Mesh(jetGeo, jetMat.clone()); jS.position.y = -jetLen / 2; jS.rotation.z = Math.PI;
            jetGroup.add(jN, jS); container.add(jetGroup); relativisticJets.push({ group: jetGroup, parentName: data.name });
        }

        if (data.hasAccretionDisk) {
            const count = 9000;
            const diskSize = data.diskRadius || (baseScale * 25);
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const colorObj = new THREE.Color(0xbbf5ff);
            for (let i = 0; i < count; i++) {
                const r = Math.pow(Math.random(), 0.6) * diskSize + baseScale * 0.4;
                const theta = Math.random() * Math.PI * 2;
                positions[i * 3] = Math.cos(theta) * r;
                positions[i * 3 + 1] = (Math.random() - 0.5) * diskSize * 0.32;
                positions[i * 3 + 2] = Math.sin(theta) * r;
                const brightness = 0.9 + Math.random() * 0.1;
                colors[i * 3] = colorObj.r * brightness;
                colors[i * 3 + 1] = colorObj.g * brightness;
                colors[i * 3 + 2] = colorObj.b * brightness;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            const material = new THREE.PointsMaterial({
                size: baseScale * 4.2, map: hqDiskTex, transparent: true, opacity: 1.0,
                vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
            });
            const points = new THREE.Points(geometry, material);
            container.add(points); accretionDisks.push({ points: points, parentName: data.name, outerRadius: diskSize });
        }

        if (data.hasGasStream) {
            const count = 4500;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            const material = new THREE.PointsMaterial({
                size: 1.0, map: hqPlumeTex, transparent: true, opacity: 1.0,
                vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
            });
            const points = new THREE.Points(geometry, material);
            const tArray = new Float32Array(count);
            const seedArray = new Float32Array(count);
            for (let i = 0; i < count; i++) {
                tArray[i] = Math.random();
                seedArray[i] = Math.random();
            }
            points.userData = { tArray, seedArray, count };
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
                if (p) {
                    ad.points.position.copy(p.position);
                    ad.points.rotation.y += 0.4 * simSpeed * delta;
                    const pos = ad.points.geometry.attributes.position;
                    for (let i = 0; i < pos.count; i++) {
                        if (Math.random() > 0.90) pos.setY(i, (Math.random() - 0.5) * ad.outerRadius * 0.5);
                    }
                    pos.needsUpdate = true;
                }
            });

            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source), t = allEntities.find(e => e.userData.name === gs.target), disk = accretionDisks.find(d => d.parentName === gs.target);
                if (s && t && disk) {
                    const sToT = new THREE.Vector3().subVectors(t.position, s.position);
                    const dist = sToT.length();
                    const dirToTarget = sToT.clone().normalize();
                    const tangent = new THREE.Vector3(-dirToTarget.z, 0, dirToTarget.x).normalize();

                    const scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8);
                    const p1 = s.position.clone().add(dirToTarget.clone().multiplyScalar(scaledZ));
                    const pMid = s.position.clone().add(dirToTarget.clone().multiplyScalar(dist * 0.55)).add(tangent.clone().multiplyScalar(disk.outerRadius * 1.3));
                    // v21: Extended pEnd deeper into the disk to prevent gaps
                    const pEnd = t.position.clone().add(tangent.clone().multiplyScalar(disk.outerRadius * 0.7));

                    const curve = new THREE.CatmullRomCurve3([p1, pMid, pEnd], false, 'centripetal', 0.15);
                    const { points } = gs, { tArray, seedArray, count } = points.userData;
                    const posAttr = points.geometry.attributes.position, colAttr = points.geometry.attributes.color;
                    const cCool = new THREE.Color(0xffaa22), cHot = new THREE.Color(0xbbf5ff);

                    for (let i = 0; i < count; i++) {
                        tArray[i] = (tArray[i] + 0.22 * delta * simSpeed * (0.8 + seedArray[i] * 0.2)) % 1.0;
                        const tVal = tArray[i], seed = seedArray[i], curvePos = curve.getPoint(tVal);

                        // v21: "Irregular Particle Movement" - Hybrid Sine + Random Pop
                        const spread = s.userData.visualScale * (0.3 + seed * 0.8) * (1.1 - tVal * 0.7);
                        let jitterX = (Math.sin(time * 4.5 + seed * 40) * 0.6 + (seed - 0.5)) * spread;
                        let jitterY = (Math.cos(time * 5.0 + seed * 50) * 0.6 + (seed - 0.5)) * spread;
                        let jitterZ = (Math.sin(time * 5.5 + seed * 60) * 0.6 + (seed - 0.5)) * spread;

                        // Add the "irregular jump" similar to disk flutter
                        if (Math.random() > 0.97) {
                            jitterX += (Math.random() - 0.5) * spread * 2.5;
                            jitterY += (Math.random() - 0.5) * spread * 2.5;
                            jitterZ += (Math.random() - 0.5) * spread * 2.5;
                        }

                        posAttr.setXYZ(i, curvePos.x + jitterX, curvePos.y + jitterY, curvePos.z + jitterZ);

                        const col = cCool.clone().lerp(cHot, Math.pow(tVal, 1.6));

                        // v21: Repair Discontinuity - Adjusted Alpha to stay visible as it merges
                        // Fade in at start (0-0.1), stay bright, then merge into disk (0.9-1.0)
                        let alpha = 1.0;
                        if (tVal < 0.1) alpha = tVal / 0.1;
                        // No fade-out at the end, let it vanish inside the disk naturally

                        const flicker = (1.0 + Math.sin(time * 8.0 + seed * 20.0) * 0.4);
                        const finalAlpha = alpha * flicker * 4.5;
                        colAttr.setXYZ(i, col.r * finalAlpha, col.g * finalAlpha, col.b * finalAlpha);
                    }
                    posAttr.needsUpdate = true; colAttr.needsUpdate = true;
                    points.material.size = s.userData.visualScale * 11.0; // Optimized for "Cloud" look
                }
            });

            orbitLines.forEach(l => { const p = allEntities.find(e => e.userData.name === l.userData.parentName); if (p) l.position.copy(p.position); });
            relativisticJets.forEach(jet => {
                const p = allEntities.find(e => e.userData.name === jet.parentName);
                if (p) { jet.group.position.copy(p.position); jet.group.children.forEach(j => j.material.map.offset.y -= 4.0 * simSpeed * delta); }
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => { orbitLines.forEach(l => l.visible = b); }
    };
}
