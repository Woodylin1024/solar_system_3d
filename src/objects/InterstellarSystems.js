import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v23.0.0 - "Volumetric Particle Plume"
 * RESTORING IMAGE 4 AESTHETIC:
 * - Volumetric Scatter: Increased radial jitter significantly to create a thick, 3D gaseous plume instead of a flat ribbon.
 * - Isotropic Randomness: Ensured particle offsets are truly 3D (X, Y, Z) to prevent "flatness" from all angles.
 * - Frustum Stability: Explicitly set a massive Bounding Sphere and disabled culling to ensure visibility at all perspectives.
 * - Particle Density: Boosted count to 5000+ for that "Image 4" cloud richness.
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
            grad.addColorStop(0.2, 'rgba(180, 245, 255, 1)');
            grad.addColorStop(0.5, 'rgba(80, 200, 255, 0.8)');
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
            // Softer, cloudier texture for the stream (Image 4 style)
            grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
            grad.addColorStop(0.4, 'rgba(255, 255, 255, 0.6)');
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
            const jetMat = new THREE.MeshBasicMaterial({ color: 0xbbf5ff, map: hqPlumeTex, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false });
            const jN = new THREE.Mesh(jetGeo, jetMat); jN.position.y = jetLen / 2;
            const jS = new THREE.Mesh(jetGeo, jetMat.clone()); jS.position.y = -jetLen / 2; jS.rotation.z = Math.PI;
            jetGroup.add(jN, jS); container.add(jetGroup); relativisticJets.push({ group: jetGroup, parentName: data.name });
        }

        if (data.hasAccretionDisk) {
            const count = 9500;
            const diskSize = data.diskRadius || (baseScale * 25);
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const colorObj = new THREE.Color(0xccf5ff);
            for (let i = 0; i < count; i++) {
                const r = Math.pow(Math.random(), 0.6) * diskSize + baseScale * 0.4;
                const theta = Math.random() * Math.PI * 2;
                positions[i * 3] = Math.cos(theta) * r;
                positions[i * 3 + 1] = (Math.random() - 0.5) * diskSize * 0.4;
                positions[i * 3 + 2] = Math.sin(theta) * r;
                const brightness = 0.9 + Math.random() * 0.1;
                colors[i * 3] = colorObj.r * brightness;
                colors[i * 3 + 1] = colorObj.g * brightness;
                colors[i * 3 + 2] = colorObj.b * brightness;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            const material = new THREE.PointsMaterial({
                size: baseScale * 4.8, map: hqDiskTex, transparent: true, opacity: 1.0,
                vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
            });
            const points = new THREE.Points(geometry, material);
            container.add(points); accretionDisks.push({ points: points, parentName: data.name, outerRadius: diskSize });
        }

        if (data.hasGasStream) {
            const count = 5500; // Boosted count for "Image 4" richness
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

            // v23 Fix: Extreme visibility stability
            points.frustumCulled = false;
            // Create a massive conceptual bounding sphere to keep it rendering from any angle
            geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 5000);

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
                    ad.points.rotation.y += 0.45 * simSpeed * delta;
                    const posSet = ad.points.geometry.attributes.position;
                    for (let i = 0; i < posSet.count; i++) {
                        if (Math.random() > 0.82) posSet.setY(i, (Math.random() - 0.5) * ad.outerRadius * 0.7);
                    }
                    posSet.needsUpdate = true;
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
                    const pMid = s.position.clone().add(dirToTarget.clone().multiplyScalar(dist * 0.55)).add(tangent.clone().multiplyScalar(disk.outerRadius * 1.4));
                    const pEnd = t.position.clone().add(tangent.clone().multiplyScalar(disk.outerRadius * 0.6));

                    const curve = new THREE.CatmullRomCurve3([p1, pMid, pEnd], false, 'centripetal', 0.2);
                    const { points } = gs, { tArray, seedArray, count } = points.userData;
                    const posAttr = points.geometry.attributes.position, colAttr = points.geometry.attributes.color;
                    const cCool = new THREE.Color(0xffaa22), cHot = new THREE.Color(0xbbf5ff);

                    for (let i = 0; i < count; i++) {
                        tArray[i] = (tArray[i] + 0.26 * delta * simSpeed * (0.8 + seedArray[i] * 0.2)) % 1.0;
                        const tVal = tArray[i], seed = seedArray[i], curvePos = curve.getPoint(tVal);

                        // v23: VOLUMETRIC SCATTER - Restoring that thick gaseous look from Image 4
                        const baseSpread = s.userData.visualScale * 3.5; // Massive wide base
                        const spreadFactor = (0.5 + seed * 2.5) * (1.2 - tVal * 0.75);

                        // 3D Isotropic Jitter (X, Y, Z) to ensure it's not a ribbon from any angle
                        // Use seed-based fixed offsets + high-frequency irregular pops
                        const offsetX = (Math.sin(seed * 100) * baseSpread * spreadFactor);
                        const offsetY = (Math.cos(seed * 200) * baseSpread * spreadFactor);
                        const offsetZ = (Math.sin(seed * 300) * baseSpread * spreadFactor);

                        // Disk-style irregular popup logic
                        let popX = 0, popY = 0, popZ = 0;
                        if (Math.random() > 0.96) {
                            popX = (Math.random() - 0.5) * baseSpread * 4.0;
                            popY = (Math.random() - 0.5) * baseSpread * 4.0;
                            popZ = (Math.random() - 0.5) * baseSpread * 4.0;
                        }

                        posAttr.setXYZ(i, curvePos.x + offsetX + popX, curvePos.y + offsetY + popY, curvePos.z + offsetZ + popZ);

                        const col = cCool.clone().lerp(cHot, Math.pow(tVal, 1.5));
                        const flicker = 1.0 + (Math.random() - 0.5) * 0.9;
                        const alpha = Math.sin(tVal * Math.PI) * 4.8 * flicker;
                        colAttr.setXYZ(i, col.r * alpha, col.g * alpha, col.b * alpha);
                    }
                    posAttr.needsUpdate = true; colAttr.needsUpdate = true;
                    points.material.size = s.userData.visualScale * 18.0; // Huge gaseous particles for cloud look
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
