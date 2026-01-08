import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v28.0.0 - "Tangential Flow & Hyper-Dense Disk"
 * FINAL PHYSICS ALIGNMENT:
 * - Tangential Entry: Adjusted spline control points to ensure the stream enters the disk at a near-zero angle (tangential).
 * - Hyper-Dense Disk: Tripled disk particle count to 30,000 for a solid, opaque mass feel.
 * - Heavy Stream: Boosted RLOF count to 20,000 micro-particles for extreme density.
 * - Zoom Stability: Maintained the massive 100k bounding volume for zero culling issues.
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

    const createUnifiedSparkTexture = () => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);

        const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.1, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.35, 'rgba(130, 240, 255, 0.5)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);
        return new THREE.CanvasTexture(canvas);
    };

    const unifiedSparkTex = createUnifiedSparkTexture();

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
            const jetGeo = new THREE.CylinderGeometry(baseScale * 0.1, baseScale * 5.2, jetLen, 32, 1, true);
            const jetMat = new THREE.MeshBasicMaterial({ color: 0xccf6ff, map: unifiedSparkTex, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false });
            const jN = new THREE.Mesh(jetGeo, jetMat); jN.position.y = jetLen / 2;
            const jS = new THREE.Mesh(jetGeo, jetMat.clone()); jS.position.y = -jetLen / 2; jS.rotation.z = Math.PI;
            jetGroup.add(jN, jS); container.add(jetGroup); relativisticJets.push({ group: jetGroup, parentName: data.name });
        }

        if (data.hasAccretionDisk) {
            const count = 32000; // TRIPLED DENSITY for "Heavy/Solid" look
            const diskSize = data.diskRadius || (baseScale * 25);
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const colorObj = new THREE.Color(0xbbf5ff);
            for (let i = 0; i < count; i++) {
                const r = Math.pow(Math.random(), 0.6) * diskSize + baseScale * 0.45;
                const theta = Math.random() * Math.PI * 2;
                positions[i * 3] = Math.cos(theta) * r;
                positions[i * 3 + 1] = (Math.random() - 0.5) * diskSize * 0.55;
                positions[i * 3 + 2] = Math.sin(theta) * r;
                const brightness = 0.9 + Math.random() * 0.1;
                colors[i * 3] = colorObj.r * brightness;
                colors[i * 3 + 1] = colorObj.g * brightness;
                colors[i * 3 + 2] = colorObj.b * brightness;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            const material = new THREE.PointsMaterial({
                size: baseScale * 4.0, // Slightly smaller particles but way more of them
                map: unifiedSparkTex, transparent: true, opacity: 1.0,
                vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
            });
            const points = new THREE.Points(geometry, material);
            container.add(points); accretionDisks.push({ points: points, parentName: data.name, outerRadius: diskSize });
        }

        if (data.hasGasStream) {
            const count = 22000; // Precision density
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            const material = new THREE.PointsMaterial({
                size: 1.0, map: unifiedSparkTex, transparent: true, opacity: 1.0,
                vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
            });
            const points = new THREE.Points(geometry, material);
            points.frustumCulled = false;
            geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 100000);

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
                    ad.points.rotation.y += 0.55 * simSpeed * delta;
                    const posSet = ad.points.geometry.attributes.position;
                    for (let i = 0; i < posSet.count; i++) {
                        if (Math.random() > 0.85) posSet.setY(i, (Math.random() - 0.5) * ad.outerRadius * 0.7);
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

                    // v28: ULTRA-TANGENTIAL ENTRY - Grazing Angle
                    // Push mid-point even further for more orbital momentum curve
                    const pMid = s.position.clone()
                        .add(dirToTarget.clone().multiplyScalar(dist * 0.42))
                        .add(tangent.clone().multiplyScalar(disk.outerRadius * 1.3));

                    // Entry point is way out on the tangent to force the curve to be parallel to disk boundary
                    const pEnd = t.position.clone().add(tangent.clone().multiplyScalar(disk.outerRadius * 0.85));

                    const curve = new THREE.CatmullRomCurve3([p1, pMid, pEnd], false, 'centripetal', 0.5);

                    const { points } = gs, { tArray, seedArray, count } = points.userData;
                    const posAttr = points.geometry.attributes.position, colAttr = points.geometry.attributes.color;
                    const cCool = new THREE.Color(0xef9922), cHot = new THREE.Color(0xbbf5ff);

                    for (let i = 0; i < count; i++) {
                        tArray[i] = (tArray[i] + 0.32 * delta * simSpeed * (0.85 + seedArray[i] * 0.15)) % 1.0;
                        const tVal = tArray[i], seed = seedArray[i], curvePos = curve.getPoint(tVal);

                        const baseSpread = s.userData.visualScale * 0.5; // Even tighter core
                        const spreadFactor = (0.1 + seed * 1.4) * (1.1 - tVal * 0.8);

                        const angSeed = seed * Math.PI * 2;
                        const phiSeed = Math.acos(2 * Math.random() - 1);
                        const r = baseSpread * spreadFactor;

                        const randX = r * Math.sin(phiSeed) * Math.cos(angSeed);
                        const randY = r * Math.sin(phiSeed) * Math.sin(angSeed);
                        const randZ = r * Math.cos(phiSeed);

                        let fX = randX, fY = randY, fZ = randZ;
                        if (Math.random() > 0.92) {
                            fX += (Math.random() - 0.5) * r * 0.4;
                            fY += (Math.random() - 0.5) * r * (1.2 + tVal * 3.5);
                            fZ += (Math.random() - 0.5) * r * 0.4;
                        }

                        posAttr.setXYZ(i, curvePos.x + fX, curvePos.y + fY, curvePos.z + fZ);

                        const col = cCool.clone().lerp(cHot, Math.pow(tVal, 1.2));
                        const alpha = Math.sin(tVal * Math.PI) * 12.0 * (0.8 + Math.random() * 0.4);
                        colAttr.setXYZ(i, col.r * alpha, col.g * alpha, col.b * alpha);
                    }
                    posAttr.needsUpdate = true; colAttr.needsUpdate = true;
                    points.material.size = s.userData.visualScale * 1.6; // Ultrafine particles
                }
            });

            orbitLines.forEach(l => { const p = allEntities.find(e => e.userData.name === l.userData.parentName); if (p) l.position.copy(p.position); });
            relativisticJets.forEach(jet => {
                const p = allEntities.find(e => e.userData.name === jet.parentName);
                if (p) { jet.group.position.copy(p.position); jet.group.children.forEach(j => j.material.map.offset.y -= 5.0 * simSpeed * delta); }
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => { orbitLines.forEach(l => l.visible = b); }
    };
}
