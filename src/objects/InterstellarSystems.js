import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v45.19.2 - "Planetary Visibility Restore"
 * - Fix: Restored material visibility for planets (non-stars).
 * - Logic: Stars remain self-luminous via emissive (color 0x000000); planets use standard color + moderate emissive.
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const accretionDisks = [];
    const gasStreams = [];
    const relativisticJets = [];
    const interstellarBelts = [];

    // Reusable vectors for performance
    const _v1 = new THREE.Vector3();

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    const createUnifiedSparkTexture = () => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);

        const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.08, 'rgba(255, 252, 240, 0.8)');
        grad.addColorStop(0.25, 'rgba(255, 242, 190, 0.35)');
        grad.addColorStop(0.55, 'rgba(255, 230, 150, 0.05)');
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
            const isStar = data.type === 'star';
            const isBlackHole = data.isBlackHole;

            let material;
            if (isBlackHole) {
                // For Black Holes, we create a transparent hit-box mesh 
                // to avoid blocking the custom shader proxy.
                material = new THREE.MeshBasicMaterial({
                    color: 0x000000,
                    transparent: true,
                    opacity: 0.0,
                    depthWrite: false
                });
            } else {
                material = new THREE.MeshStandardMaterial({
                    color: isStar ? 0x000000 : (data.color || 0xffffff),
                    emissive: data.color || (isStar ? 0xbbccff : 0xffffff),
                    emissiveIntensity: data.emissiveIntensity ?? (isStar ? 6.0 : 1.2),
                    side: THREE.DoubleSide,
                    transparent: false,
                    depthWrite: true
                });
            }

            if (data.texture) {
                const tex = textureLoader.load(`textures/${data.texture}?v=${Date.now()}`);
                material.map = tex;
                if (!isBlackHole) {
                    material.emissiveMap = tex;
                    if (isStar && data.color) material.emissive.set(data.color);
                }
            }
            mesh = new THREE.Mesh(geometry, material);
            if (data.isDistorted && data.distortionAxes) {
                mesh.scale.set(baseScale * (data.distortionAxes.x || 1), baseScale * (data.distortionAxes.y || 1), baseScale * (data.distortionAxes.z || 1.8));
            } else { mesh.scale.setScalar(baseScale); }
            selectable.push(mesh);
        } else { mesh = new THREE.Object3D(); }

        const maxD = data.distortionAxes ? Math.max(data.distortionAxes.x || 1, data.distortionAxes.y || 1, data.distortionAxes.z || 1.8) : 1;
        mesh.userData = { ...data, isInterstellar: true, name: data.name, visualScale: baseScale, maxVisualRadius: baseScale * maxD, parentName: parentName, depth: depth, angle: data.orbit?.startAngle ?? Math.random() * Math.PI * 2 };
        container.add(mesh);
        allEntities.push(mesh);

        if (data.hasRelativisticJets) {
            const jetGroup = new THREE.Group();
            const jetLen = baseScale * 1100;
            const jetGeo = new THREE.CylinderGeometry(baseScale * 0.1, baseScale * 5.5, jetLen, 32, 1, true);
            const jetMat = new THREE.MeshBasicMaterial({ color: data.jetColor || 0xccf6ff, map: unifiedSparkTex, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false });
            const jN = new THREE.Mesh(jetGeo, jetMat); jN.position.y = jetLen / 2;
            const jS = new THREE.Mesh(jetGeo, jetMat.clone()); jS.position.y = -jetLen / 2; jS.rotation.z = Math.PI;
            jetGroup.add(jN, jS); container.add(jetGroup); relativisticJets.push({ group: jetGroup, parentName: data.name });
        }

        if (data.hasAccretionDisk) {
            const count = 225000;
            const diskSize = data.diskRadius || (baseScale * 25);
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const colorObj = new THREE.Color(data.diskColor || 0xfff5cc);
            for (let i = 0; i < count; i++) {
                const r = (Math.random() * 0.95 + 0.05) * diskSize + baseScale * 0.45;
                const theta = Math.random() * Math.PI * 2;
                const pSeed = Math.random();

                // Advanced Noise to kill spokes: use irrational numbers for sampling
                const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio for distribution
                const noiseBase = theta * phi + r * 1.618 + pSeed * 3.14;

                const rJitter = 1.0 + 0.22 * (
                    Math.sin(noiseBase * 5.71) * Math.cos(noiseBase * 11.39) +
                    Math.sin(theta * 2.13) * 0.25
                );

                // Asynchronous spiral twist
                const spiralAngle = theta + (r / diskSize) * 2.8 + Math.sin(r * 0.05) * 0.45;
                const noisyR = r * rJitter * (0.92 + Math.random() * 0.16);

                positions[i * 3] = Math.cos(spiralAngle) * noisyR;
                positions[i * 3 + 2] = Math.sin(spiralAngle) * noisyR;

                const rNorm = r / diskSize;
                const flareHeight = diskSize * (0.15 + rNorm * 0.65);

                // Turbulance without radial bias
                const localTurbulence = (
                    Math.sin(theta * 6.7 + r * 0.015) * Math.cos(theta * 13.1) +
                    Math.sin(pSeed * 62.8) * 0.4
                );
                const wavyTurbulence = 0.85 + 0.45 * localTurbulence;

                // Bell-curve vertical distribution for softer edges
                const vDist = (Math.random() + Math.random() + Math.random() + Math.random() - 2.0);
                positions[i * 3 + 1] = vDist * flareHeight * wavyTurbulence * (1.1 - rNorm * 0.4);

                const brightness = 0.85 + Math.random() * 0.3;
                colors[i * 3] = colorObj.r * brightness;
                colors[i * 3 + 1] = colorObj.g * brightness;
                colors[i * 3 + 2] = colorObj.b * brightness;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            if (data.isBlackHole) {
                // v45.11.0: Pure Shader Black Hole (Interstellar Style)
                // This replaces the particle system with a single high-performance shader sphere
                const proxyGeo = new THREE.SphereGeometry(1, 64, 64);
                const uniforms = {
                    uTime: { value: 0 },
                    uColor: { value: new THREE.Color(data.diskColor || 0xffaa33) },
                    uHorizonRadius: { value: baseScale },
                    uDiskRadius: { value: diskSize || baseScale * 25 },
                    uCamPos: { value: new THREE.Vector3() },
                    uSingularityPos: { value: new THREE.Vector3() },
                    uLocalCamPos: { value: new THREE.Vector3() },
                    uDiskScale: { value: 1.0 }
                };

                const material = new THREE.ShaderMaterial({
                    uniforms: uniforms,
                    transparent: true,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    depthTest: true,
                    blending: THREE.NormalBlending, // Switch back to normal but with high emissive output
                    vertexShader: `
                        varying vec3 vWorldPos;
                        varying vec3 vLocalPos;
void main() {
    vLocalPos = position;
                            vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,
                    fragmentShader: `
                        uniform float uTime;
                        uniform vec3 uColor;
                        uniform float uHorizonRadius;
                        uniform float uDiskRadius;
                        uniform vec3 uCamPos;
                        uniform vec3 uSingularityPos;
                        uniform vec3 uLocalCamPos;
                        uniform float uDiskScale;
                        
                        varying vec3 vWorldPos;
                        varying vec3 vLocalPos;

                        // Simplex Noise
                        float hash(float n) { return fract(sin(n) * 43758.5453123); }
                        float noise(vec3 x) {
                            vec3 p = floor(x); vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
                            float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
        mix(mix(hash(n + 113.0), hash(n + 114.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y), f.z);
}

                        float fbm(vec3 p) {
                            float v = 0.0;
                            float a = 0.5;
    for (int i = 0; i < 6; i++) {
        v += a * noise(p);
        p = p * 2.2;
        a *= 0.55;
    }
    return v;
}

void main() {
                            // Corrected Math (v45.15.0):
                            // uLocalCamPos is already in units where 1.0 = Event Horizon
                            vec3 rayOrigin = uLocalCamPos; 
                            float hRelScale = uDiskScale / uHorizonRadius;
                            vec3 localFragPos = vLocalPos * hRelScale; 
                            vec3 rayDir = normalize(localFragPos - rayOrigin);
                            
                            float closestDist = length(cross(rayDir, rayOrigin));

                            // 1. Ultra-Dense Starfield
                            vec3 starField = vec3(pow(noise(rayDir * 250.0), 20.0) * 2.5);

                            // 2. Accretion Disk - Thin Horizontal Plane
                            vec3 diskColor = vec3(0.0);
                            float diskOpacity = 0.0;
                            float dLimit = uDiskRadius / uHorizonRadius;

    // Ray-plane intersection for Y=0
    if (abs(rayDir.y) > 0.0001) {
                                float t = -rayOrigin.y / rayDir.y;
        if (t > 0.0) {
                                    vec3 p = rayOrigin + rayDir * t;
                                    float d = length(p);
            if (d > 1.25 && d < dLimit) {
                                        float shift = uTime * 0.8;
                                        float swirl = atan(p.z, p.x) + (3.0 / d) + shift;
                                        vec3 samplePos = vec3(cos(swirl) * d, 0.0, sin(swirl) * d) * 0.6;
                                        
                                        float n = fbm(samplePos + vec3(0.0, 0.0, uTime * 0.15));
                                        // High-contrast turbulent wisps
                                        float wisp = pow(n, 2.2) * 1.5;

                                        // Gargantua Palette: Burnt Orange, Fiery Amber, Deep Red
                                        vec3 inner = vec3(1.0, 0.7, 0.2); // Amber
                                        vec3 mid = vec3(0.9, 0.35, 0.05);  // Burnt Orange
                                        vec3 outer = vec3(0.6, 0.05, 0.01); // Deep Red
                                        
                                        float grad = smoothstep(1.3, dLimit, d);
                                        vec3 col = mix(inner, mid, grad * 1.5);
                col = mix(col, outer, smoothstep(0.4, 1.0, grad));

                diskColor = col * 12.0 * wisp;
                diskOpacity = smoothstep(dLimit, dLimit * 0.7, d) * smoothstep(1.25, 2.0, d) * 0.95;
            }
        }
    }

                            // 3. Gravitational Lensing (Double-Ring Warp)
                            // We boost the warping for that iconic 'circular' look around the shadow
                            float alignment = dot(normalize(rayOrigin), rayDir);
    if (alignment < -0.1) {
                                float warpStrength = 4.5 / (closestDist + 0.1);
                                float warpFactor = pow(1.0 - abs(alignment), 4.5) * warpStrength;
        if (warpFactor > 0.01) {
                                    vec3 warpCol = vec3(1.0, 0.4, 0.05) * warpFactor * 10.0;
            diskColor += warpCol;
            diskOpacity = max(diskOpacity, warpFactor * 0.8);
        }
    }

    // 4. Final Luminance Assembly
    if (closestDist < 0.98) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // Absolute Singularity Shadow
    } else {
                                // Sharper Fiery Einstein Ring
                                float ring = pow(smoothstep(1.4, 0.98, closestDist), 12.0);
                                vec3 ringColor = vec3(1.0, 0.6, 0.1) * ring * 25.0;
                                
                                float glow = exp(-3.8 * (closestDist - 1.2));
                                vec3 glowColor = vec3(0.7, 0.2, 0.0) * glow * 6.0;
                                
                                vec3 finalRGB = starField + diskColor + ringColor + glowColor;
                                float finalA = clamp(diskOpacity + ring + glow * 0.5, 0.0, 1.0);
        gl_FragColor = vec4(finalRGB, finalA);
    }
}
`
                });

                const finalDiskRadius = diskSize || baseScale * 25;
                const bhProxy = new THREE.Mesh(proxyGeo, material);
                bhProxy.scale.setScalar(finalDiskRadius * 1.2 / baseScale); // Relative to Star Mesh scale
                bhProxy.userData.isBlackHoleProxy = true;
                uniforms.uDiskScale.value = finalDiskRadius * 1.2;
                mesh.add(bhProxy); // Child of Star Mesh for perfect sync

                // Add ONE internal opaque core at the exact horizon size
                const coreGeo = new THREE.SphereGeometry(1, 32, 32);
                const coreMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
                const core = new THREE.Mesh(coreGeo, coreMat);
                core.scale.setScalar(1.0); // Exactly the baseScale since it's child of 'mesh'
                mesh.add(core);

                // Use bhProxy for selection logic
                mesh.userData.proxy = bhProxy;
                selectable.push(bhProxy);

                accretionDisks.push({ points: bhProxy, isProcedural: true, parentName: data.name, uniforms: uniforms, outerRadius: finalDiskRadius, starMesh: mesh });
            } else {
                // Particle disk for non-black holes
                const material = new THREE.PointsMaterial({
                    size: baseScale * 2.7,
                    map: unifiedSparkTex, transparent: true, opacity: 1.0,
                    vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
                });
                const points = new THREE.Points(geometry, material);
                container.add(points); accretionDisks.push({ points: points, parentName: data.name, outerRadius: diskSize });
            }
        }

        if (data.hasGasStream) {
            const count = 12000;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            const material = new THREE.PointsMaterial({
                size: 1.0, map: unifiedSparkTex, transparent: true, opacity: 1.0,
                vertexColors: true, blending: THREE.AdditiveBlending,
                depthTest: false, depthWrite: false, sizeAttenuation: true
            });
            const points = new THREE.Points(geometry, material);
            // v40.3: High render order and no culling
            points.frustumCulled = false;
            points.renderOrder = 100;
            geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1000000);

            const tArray = new Float32Array(count);
            const seedArray = new Float32Array(count);
            for (let i = 0; i < count; i++) {
                tArray[i] = Math.random();
                seedArray[i] = Math.random();
            }
            points.userData = { tArray, seedArray, count };
            const streamTarget = data.gasStreamTarget || parentName;
            container.add(points); gasStreams.push({ points: points, source: data.name, target: streamTarget });
        }

        if (data.orbit) {
            const pts = [];
            const sma = data.orbit.radius;
            const ecc = data.orbit.eccentricity || 0;
            const argP = THREE.MathUtils.degToRad(data.orbit.argumentOfPeriapsis || 0);
            const inc = THREE.MathUtils.degToRad(data.orbit.inclination || 0);
            const lonA = THREE.MathUtils.degToRad(data.orbit.longitudeOfAscendingNode || 0);

            for (let i = 0; i <= 256; i++) {
                const m = (i / 256) * Math.PI * 2;
                // Solve Kepler (Approx for line drawing)
                let E = m;
                for (let k = 0; k < 3; k++) E = E - (E - ecc * Math.sin(E) - m) / (1 - ecc * Math.cos(E));

                const x_orb = sma * (Math.cos(E) - ecc);
                const z_orb = sma * Math.sqrt(1.0 - ecc * ecc) * Math.sin(E);

                const v = new THREE.Vector3(x_orb, 0, z_orb);
                v.applyAxisAngle(new THREE.Vector3(0, 1, 0), argP);
                v.applyAxisAngle(new THREE.Vector3(1, 0, 0), inc);
                v.applyAxisAngle(new THREE.Vector3(0, 1, 0), lonA);
                pts.push(v);
            }
            const orbitColor = data.type === 'planet' ? 0x00d2ff : 0xff5500;
            const o = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: orbitColor, transparent: true, opacity: 0.25 }));
            o.userData = { parentName };
            container.add(o);
            orbitLines.push(o);
        }

        if (data.belts) {
            data.belts.forEach(beltData => {
                const count = beltData.count || 1000;
                const geometry = new THREE.BufferGeometry();
                const posArr = new Float32Array(count * 3);
                const beltOrbitData = [];

                for (let i = 0; i < count; i++) {
                    const r = THREE.MathUtils.lerp(beltData.minRadius, beltData.maxRadius, Math.random());
                    const angle = Math.random() * Math.PI * 2;
                    const y = (Math.random() - 0.5) * (r * 0.05);

                    posArr[i * 3] = Math.cos(angle) * r;
                    posArr[i * 3 + 1] = y;
                    posArr[i * 3 + 2] = Math.sin(angle) * r;

                    beltOrbitData.push({ r, angle, y, speed: (0.005 / Math.sqrt(r)) * (0.8 + Math.random() * 0.4) });
                }

                geometry.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
                const material = new THREE.PointsMaterial({
                    color: beltData.color || 0x888888,
                    size: radius * 3.5, // Relative to star size
                    transparent: true,
                    opacity: beltData.opacity || 0.5,
                    sizeAttenuation: true,
                    blending: THREE.AdditiveBlending
                });

                const points = new THREE.Points(geometry, material);
                container.add(points);
                interstellarBelts.push({ mesh: points, orbitData: beltOrbitData, parentName: data.name });
            });
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
            allEntities.forEach(e => {
                const d = e.userData; if (!d.orbit) return;
                const p = d.parentName ? allEntities.find(parent => parent.userData.name === d.parentName) : null;
                if (!p) return;

                // Orbit Calculation (Full Keplerian)
                d.angle += (d.orbit.speed || 0.1) * simSpeed * delta * 0.1; // d.angle acts as Mean Anomaly (M)
                const sma = d.orbit.radius;
                const ecc = d.orbit.eccentricity || 0;

                // Solve Kepler's Equation: M = E - e*sin(E) for Eccentric Anomaly (E)
                let eccentricAnomaly = d.angle;
                if (ecc > 0) {
                    // Newton-Raphson iteration
                    for (let i = 0; i < 4; i++) {
                        eccentricAnomaly = eccentricAnomaly - (eccentricAnomaly - ecc * Math.sin(eccentricAnomaly) - d.angle) / (1 - ecc * Math.cos(eccentricAnomaly));
                    }
                }

                // Position in orbital plane (XZ plane, focused on one focus at origin)
                const x_orb = sma * (Math.cos(eccentricAnomaly) - ecc);
                const z_orb = sma * Math.sqrt(1.0 - ecc * ecc) * Math.sin(eccentricAnomaly);

                _v1.set(x_orb, 0, z_orb);

                if (d.orbit.inclination || d.orbit.argumentOfPeriapsis || d.orbit.longitudeOfAscendingNode) {
                    const argP = THREE.MathUtils.degToRad(d.orbit.argumentOfPeriapsis || 0);
                    const inc = THREE.MathUtils.degToRad(d.orbit.inclination || 0);
                    const lonA = THREE.MathUtils.degToRad(d.orbit.longitudeOfAscendingNode || 0);

                    // Sequence: Arg of Periapsis -> Inclination -> Longitude of Ascending Node
                    _v1.applyAxisAngle(new THREE.Vector3(0, 1, 0), argP);
                    _v1.applyAxisAngle(new THREE.Vector3(1, 0, 0), inc);
                    _v1.applyAxisAngle(new THREE.Vector3(0, 1, 0), lonA);
                }

                e.position.addVectors(p.position, _v1);

                if (d.isDistorted) { e.lookAt(p.position); }
            });

            orbitLines.forEach(o => {
                const p = allEntities.find(parent => parent.userData.name === o.userData.parentName);
                if (p) o.position.copy(p.position);
            });

            accretionDisks.forEach(ad => {
                const p = allEntities.find(e => e.userData.name === ad.parentName);
                if (p) {
                    if (ad.isProcedural) {
                        // Position sync is handled by parenting now
                        if (ad.uniforms) {
                            ad.uniforms.uTime.value += delta * simSpeed;
                            ad.uniforms.uCamPos.value.copy(scene.userData.camera?.position || new THREE.Vector3());
                            ad.uniforms.uSingularityPos.value.copy(p.position);

                            // Calculate camera in local space of the black hole
                            p.updateMatrixWorld(true);
                            _v1.copy(scene.userData.camera.position);
                            p.worldToLocal(_v1);
                            ad.uniforms.uLocalCamPos.value.copy(_v1);
                        }
                    } else {
                        ad.points.position.copy(p.position);
                        ad.points.rotation.y += 0.6 * simSpeed * delta;
                    }
                }
            });

            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source), t = allEntities.find(e => e.userData.name === gs.target), disk = accretionDisks.find(d => d.parentName === gs.target);
                if (s && t && disk) {
                    const sToT = new THREE.Vector3().subVectors(t.position, s.position);
                    const dist = sToT.length();
                    const dirToTarget = sToT.clone().normalize();

                    // v40.3: Improved 3D tangent calculation
                    const up = new THREE.Vector3(0, 1, 0);
                    const tangent = new THREE.Vector3().crossVectors(dirToTarget, up).normalize();
                    if (tangent.length() < 0.1) tangent.set(1, 0, 0); // Fallback for vertical alignment

                    const scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8);
                    // v40.3: Start point further out (1.1x) to ensure clear separation
                    const pStart = s.position.clone().add(dirToTarget.clone().multiplyScalar(scaledZ * 1.1));

                    const diskRadius = disk.outerRadius || (disk.uniforms ? disk.uniforms.uDiskRadius.value : 100);
                    const pEnd = t.position.clone()
                        .add(tangent.clone().multiplyScalar(diskRadius * 0.95));

                    const ctrlHandle = pEnd.clone()
                        .sub(dirToTarget.clone().multiplyScalar(dist * 0.6));

                    const curve = new THREE.QuadraticBezierCurve3(pStart, ctrlHandle, pEnd);

                    const { points } = gs, { tArray, seedArray, count } = points.userData;
                    const posAttr = points.geometry.attributes.position, colAttr = points.geometry.attributes.color;
                    const cCool = new THREE.Color(0xff8822), cHot = new THREE.Color(0xfff5cc);

                    for (let i = 0; i < count; i++) {
                        tArray[i] = (tArray[i] + 0.35 * delta * simSpeed * (0.85 + seedArray[i] * 0.15)) % 1.0;
                        const tVal = tArray[i], seed = seedArray[i], curvePos = curve.getPoint(tVal);

                        const baseSpread = s.userData.visualScale * 0.48;
                        const spreadFactor = (0.2 + seed * 1.5) * (1.1 - tVal * 0.75);

                        const randX = baseSpread * spreadFactor * Math.sin(seed * 20) * Math.cos(seed * 40);
                        const randY = baseSpread * spreadFactor * Math.sin(seed * 30) * (1.0 + tVal * 3.5);
                        const randZ = baseSpread * spreadFactor * Math.cos(seed * 50);

                        posAttr.setXYZ(i, curvePos.x + randX, curvePos.y + randY, curvePos.z + randZ);

                        const col = cCool.clone().lerp(cHot, Math.pow(tVal, 1.3));
                        let lumMultiplier = 15.0;
                        if (tVal > 0.9) lumMultiplier *= (1.0 - (tVal - 0.9) * 10);

                        const flicker = 0.82 + Math.random() * 0.48;
                        colAttr.setXYZ(i, col.r * lumMultiplier * flicker, col.g * lumMultiplier * flicker, col.b * lumMultiplier * flicker);
                    }
                    posAttr.needsUpdate = true; colAttr.needsUpdate = true;
                    // v40.3: Sync size with Target (Accretor) at 3.5x for consistent flow appearance
                    points.material.size = t.userData.visualScale * 3.5;
                }
            });

            orbitLines.forEach(l => { const p = allEntities.find(e => e.userData.name === l.userData.parentName); if (p) l.position.copy(p.position); });
            relativisticJets.forEach(jet => {
                const p = allEntities.find(e => e.userData.name === jet.parentName);
                if (p) { jet.group.position.copy(p.position); jet.group.children.forEach(j => j.material.map.offset.y -= 7.0 * simSpeed * delta); }
            });

            interstellarBelts.forEach(belt => {
                const p = allEntities.find(e => e.userData.name === belt.parentName);
                if (p) {
                    belt.mesh.position.copy(p.position);
                    const posAttr = belt.mesh.geometry.attributes.position;
                    for (let i = 0; i < belt.orbitData.length; i++) {
                        const d = belt.orbitData[i];
                        d.angle += d.speed * simSpeed * delta * 5.0;
                        posAttr.setXYZ(i, Math.cos(d.angle) * d.r, d.y, Math.sin(d.angle) * d.r);
                    }
                    posAttr.needsUpdate = true;
                }
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => { orbitLines.forEach(l => l.visible = b); }
    };
}
