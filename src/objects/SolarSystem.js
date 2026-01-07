import * as THREE from 'three';
import { solarSystemData } from '../data/solarSystemData.js';

export function createSolarSystem(scene, manager) {
    const bodies = [];
    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();
    let isRealScale = false;

    // Reusable vectors for performance
    const _vS1 = new THREE.Vector3();
    const _vS2 = new THREE.Vector3();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    const orbitLineWidth = isMobile ? 2 : 1;

    solarSystemData.forEach(data => {
        // We initialize with radius 1 and use mesh.scale for the actual sizes
        const geometry = new THREE.SphereGeometry(1, 128, 128);

        // Apply irregularity/deformation if specified (e.g., for "potato" shaped asteroids)
        if (data.isIrregular) {
            const pos = geometry.attributes.position;
            const v = new THREE.Vector3();
            for (let i = 0; i < pos.count; i++) {
                v.fromBufferAttribute(pos, i);

                // Aggressive Jagged Organic Noise (high amplitude, jagged frequencies)
                const noise =
                    Math.sin(v.x * 2.5 + v.y * 1.8) * 0.35 +
                    Math.cos(v.z * 2.2 + v.x * 1.5) * 0.25 +
                    Math.sin(v.y * 4.0 + v.z * 2.5) * 0.20;

                // Deep Peanut/Bone Logic: 
                // Quadratic formula forces the center (v.x=0) to be thinner and ends (v.x=±1) to bulge.
                const peanutScale = 0.7 + Math.pow(v.x, 2) * 0.8;

                // 3D Compound Twisting Bend
                const bendY = Math.cos(v.x * 1.4) * 0.30;
                const bendZ = Math.sin(v.x * 1.6) * 0.25;

                v.y += bendY;
                v.z += bendZ;

                // Break circular symmetry (Warping the cross-section)
                const crossSectionWarp = 1.0 + Math.sin(Math.atan2(v.y, v.z) * 3.0) * 0.15;

                // Targeted Localized Collapse (The "Saddle" or big crater area)
                // We target a specific region to create a deep depression
                let craterEffect = 0;
                const craterDist = Math.sqrt(Math.pow(v.x + 0.6, 2) + Math.pow(v.z - 0.5, 2));
                if (craterDist < 0.8) {
                    craterEffect = (1.0 - Math.pow(craterDist / 0.8, 2)) * 0.45;
                }

                v.multiplyScalar(1.0 + noise * 0.7 - craterEffect);
                v.y *= peanutScale * crossSectionWarp;
                v.z *= peanutScale * (crossSectionWarp * 0.9); // Slightly flattened on one side

                pos.setXYZ(i, v.x, v.y, v.z);
            }
            geometry.computeVertexNormals();
        }

        let material;
        if (data.name === 'Sun') {
            const texture = textureLoader.load(`textures/${data.texture}?v=25.5`);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.generateMipmaps = false;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;

            material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: false
            });
        } else if (data.texture) {
            const texture = textureLoader.load(`textures/${data.texture}?v=27.4`);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping; // Prevents artifacts at poles
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.anisotropy = 16;

            // Balanced filtering: Use Mipmapping but with LinearFilter 
            // to minimize the hard edge at the UV boundary.
            texture.minFilter = THREE.LinearMipmapLinearFilter;
            texture.generateMipmaps = true;

            material = new THREE.MeshStandardMaterial({
                map: texture,
                emissive: (data.isComet || data.type === 'comet') ? 0x4488ff : (data.type === 'star' ? 0xffffff : 0x222222),
                emissiveMap: data.type === 'star' ? texture : ((data.isComet || data.type === 'comet') ? texture : null),
                emissiveIntensity: (data.isComet || data.type === 'comet') ? 0.8 : (data.type === 'star' ? 1 : 0.05),
                roughness: 1,
                metalness: 0
            });
        }
        else {
            material = new THREE.MeshStandardMaterial({
                color: data.color,
                emissive: data.type === 'star' ? data.color : 0x000000,
                emissiveIntensity: data.type === 'star' ? 1 : 0
            });
        }

        const mesh = new THREE.Mesh(geometry, material);
        mesh.userData = data;
        mesh.name = data.name;

        // Apply Axial Tilt (Obliquity) to the mesh
        mesh.rotation.z = THREE.MathUtils.degToRad(data.obliquity || 0);

        // Initial scale
        if (data.geometryScale) {
            mesh.scale.set(
                data.radius * data.geometryScale[0],
                data.radius * data.geometryScale[1],
                data.radius * data.geometryScale[2]
            );
        } else {
            mesh.scale.setScalar(data.radius);
        }

        const body = {
            name: data.name,
            data: data,
            mesh: mesh,
            distance: data.distance,
            speed: data.speed,
            angle: Math.random() * Math.PI * 2,
            rotationSpeed: data.rotationSpeed || 0.005,
            satellites: [],
            orbitLine: null,
            ringMesh: null,
            obliquity: THREE.MathUtils.degToRad(data.obliquity || 0),
            isSunShader: data.name === 'Sun'
        };


        // Orbit Line
        if (data.name !== 'Sun') {
            let orbitLine;
            let orbitColor = 0x00d2ff; // Planet blue

            if (data.type === 'dwarf_planet') {
                orbitColor = 0xffaa00; // Dwarf planet amber
            } else if (data.type === 'dwarf_planet_candidate') {
                orbitColor = 0xcc66ff; // Candidate purple
            } else if (data.type === 'interstellar') {
                orbitColor = 0x88ffff; // Interstellar icy teal
            } else if (data.type === 'comet' || data.isComet) {
                orbitColor = 0xff3333; // Comet red
            } else if (data.type === 'asteroid') {
                orbitColor = 0x84ff00; // Asteroid bright lime green
            }

            const lineMaterial = new THREE.LineBasicMaterial({
                color: orbitColor,
                transparent: true,
                opacity: 0.35,
                blending: THREE.AdditiveBlending,
                linewidth: orbitLineWidth
            });

            if (data.pathPoints) {
                // Path-based orbit (e.g. interstellar or long-period comets)
                const pts = data.pathPoints.map(p => new THREE.Vector3(p[0], p[1], p[2]));
                const closed = !!data.isClosed;
                const curve = new THREE.CatmullRomCurve3(pts, closed);
                body.orbitCurve = curve;
                body.progress = Math.random();

                const points = curve.getPoints(closed ? 1000 : 400);
                const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                orbitLine = closed ? new THREE.LineLoop(lineGeometry, lineMaterial) : new THREE.Line(lineGeometry, lineMaterial);
            } else {
                // Standard: Circular closed orbit
                const curve = new THREE.EllipseCurve(0, 0, data.distance, data.distance, 0, 2 * Math.PI, false, 0);
                const points = curve.getPoints(256);
                const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                orbitLine = new THREE.LineLoop(lineGeometry, lineMaterial);

                // Apply Inclination for standard orbits
                orbitLine.rotation.x = Math.PI / 2 + THREE.MathUtils.degToRad(data.inclination || 0);
            }

            scene.add(orbitLine);
            body.orbitLine = orbitLine;
        }

        // Saturn Rings
        if (data.ring) {
            const ringGeo = new THREE.RingGeometry(data.ring.innerRadius / data.radius, data.ring.outerRadius / data.radius, 128);
            const pos = ringGeo.attributes.position;
            const uv = ringGeo.attributes.uv;
            for (let i = 0; i < pos.count; i++) {
                const x = pos.getX(i);
                const y = pos.getY(i);
                const d = Math.sqrt(x * x + y * y);
                const inner = data.ring.innerRadius / data.radius;
                const outer = data.ring.outerRadius / data.radius;
                const radialRatio = (d - inner) / (outer - inner);
                uv.setXY(i, 0.5, radialRatio);
            }
            const ringTex = textureLoader.load('textures/saturn_ring_v3.png?v=23.4');
            const ringMat = new THREE.MeshStandardMaterial({
                map: ringTex,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.85
            });
            const ringMesh = new THREE.Mesh(ringGeo, ringMat);
            ringMesh.rotation.x = Math.PI / 2;
            mesh.add(ringMesh);
            body.ringMesh = ringMesh;
        }

        // Satellites
        if (data.satellites) {
            data.satellites.forEach(satData => {
                let satMesh;

                if (satData.type === 'space_station') {
                    const stationGroup = new THREE.Group();

                    const coreMat = new THREE.MeshStandardMaterial({
                        color: 0xdddddd,
                        metalness: 0.5,
                        roughness: 0.4
                    });

                    const panelMat = new THREE.MeshStandardMaterial({
                        color: 0x1e3a5f, // Photovoltaic dark blue
                        metalness: 0.8,
                        roughness: 0.2,
                        emissive: 0x001122,
                        emissiveIntensity: 0.2,
                        side: THREE.DoubleSide
                    });

                    const goldPanelMat = new THREE.MeshStandardMaterial({
                        color: 0xffaa00,
                        metalness: 0.9,
                        roughness: 0.1,
                        emissive: 0x442200,
                        emissiveIntensity: 0.2,
                        side: THREE.DoubleSide
                    });

                    if (satData.name === 'ISS') {
                        // --- ISS Structure (Truss based) ---
                        // 1. Central Truss (Extra long)
                        const truss = new THREE.Mesh(new THREE.BoxGeometry(10, 0.15, 0.15), coreMat);
                        stationGroup.add(truss);

                        // 2. Main Modules (Concentrated in center)
                        const modules = new THREE.Group();
                        const core1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.8, 12), coreMat);
                        core1.rotation.z = Math.PI / 2;
                        modules.add(core1);

                        const core2 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.2, 12), coreMat);
                        core2.position.set(0, 0.6, 0.1);
                        modules.add(core2);

                        stationGroup.add(modules);

                        // 3. Huge Solar Arrays (8 Main Wings)
                        const endPositions = [-4.6, -3.8, 3.8, 4.6];
                        endPositions.forEach(xPos => {
                            // Upper Panel
                            const pUp = new THREE.Mesh(new THREE.BoxGeometry(0.04, 4, 1.3), goldPanelMat);
                            pUp.position.set(xPos, 2.2, 0);
                            stationGroup.add(pUp);
                            // Lower Panel
                            const pDown = new THREE.Mesh(new THREE.BoxGeometry(0.04, 4, 1.3), goldPanelMat);
                            pDown.position.set(xPos, -2.2, 0);
                            stationGroup.add(pDown);
                        });

                        // 4. Smaller Radiators (White/Silver)
                        const radMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.2, roughness: 0.8 });
                        const r1 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.5, 2), radMat);
                        r1.position.set(-1, -0.8, 0);
                        stationGroup.add(r1);

                    } else if (satData.name === 'CSS') {
                        // --- Tiangong Space Station (Modular T-shape) ---
                        // 1. Tianhe Core Module
                        const tianhe = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 3.2, 16), coreMat);
                        tianhe.rotation.z = Math.PI / 2;
                        stationGroup.add(tianhe);

                        // 2. Wentian & Mengtian Experiment Modules
                        const wentian = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.8, 16), coreMat);
                        wentian.position.set(0.6, 1.4, 0);
                        stationGroup.add(wentian);

                        const mengtian = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 2.8, 16), coreMat);
                        mengtian.position.set(0.6, -1.4, 0);
                        stationGroup.add(mengtian);

                        // 3. Iconic Huge Solar Wings (End of modules)
                        const wingGeo = new THREE.BoxGeometry(0.03, 1.5, 7);
                        const wingW = new THREE.Mesh(wingGeo, panelMat);
                        wingW.position.set(0.6, 3.2, 0);
                        stationGroup.add(wingW);

                        const wingM = new THREE.Mesh(wingGeo, panelMat);
                        wingM.position.set(0.6, -3.2, 0);
                        stationGroup.add(wingM);

                        // 4. Tianhe Core Panels (Smaller)
                        const coreWing = new THREE.Mesh(new THREE.BoxGeometry(0.03, 5, 0.8), panelMat);
                        coreWing.position.set(-2, 0, 0);
                        stationGroup.add(coreWing);
                    }

                    satMesh = stationGroup;
                } else {
                    // Standard Sphere for natural satellites
                    const satGeo = new THREE.SphereGeometry(1, 64, 64);
                    let satMat;
                    if (satData.texture) {
                        const satTex = textureLoader.load(`textures/${satData.texture}?v=25.1`);
                        satTex.wrapS = THREE.RepeatWrapping;
                        satTex.wrapT = THREE.RepeatWrapping;
                        satTex.colorSpace = THREE.SRGBColorSpace;
                        satTex.anisotropy = 8; // Lower anisotropy for satellites for performance

                        satMat = new THREE.MeshStandardMaterial({
                            map: satTex,
                            emissive: 0x222222,
                            emissiveIntensity: 0.05
                        });
                    } else {
                        satMat = new THREE.MeshStandardMaterial({ color: satData.color });
                    }
                    satMesh = new THREE.Mesh(satGeo, satMat);
                }

                satMesh.scale.setScalar(satData.radius);
                satMesh.userData = satData;
                satMesh.name = satData.name;
                scene.add(satMesh);

                const satCurve = new THREE.EllipseCurve(0, 0, satData.distance, satData.distance, 0, 2 * Math.PI, false, 0);
                const satPoints = satCurve.getPoints(128);
                const satOrbitGeo = new THREE.BufferGeometry().setFromPoints(satPoints);

                let satOrbitMat;
                if (satData.type === 'space_station') {
                    satOrbitMat = new THREE.LineDashedMaterial({
                        color: 0xffffff,
                        transparent: true,
                        opacity: 0.3,
                        blending: THREE.AdditiveBlending,
                        dashSize: 0.5,
                        gapSize: 0.3,
                        linewidth: orbitLineWidth
                    });
                } else {
                    satOrbitMat = new THREE.LineBasicMaterial({
                        color: 0xffffff,
                        transparent: true,
                        opacity: 0.15,
                        blending: THREE.AdditiveBlending,
                        linewidth: orbitLineWidth
                    });
                }

                const satOrbitLine = new THREE.LineLoop(satOrbitGeo, satOrbitMat);
                if (satData.type === 'space_station') {
                    satOrbitLine.computeLineDistances();
                }

                const satellite = {
                    mesh: satMesh,
                    data: satData,
                    angle: Math.random() * Math.PI * 2,
                    orbitLine: satOrbitLine,
                    distance: satData.distance,
                    orbitRelativeToEquator: satData.orbitRelativeToEquator !== false
                };
                body.satellites.push(satellite);

                const parentObliq = body.obliquity;
                const satIncl = THREE.MathUtils.degToRad(satData.inclination || 0);
                const worldSatIncl = satellite.orbitRelativeToEquator ? (parentObliq + satIncl) : satIncl;
                satOrbitLine.rotation.x = Math.PI / 2 + worldSatIncl;
                scene.add(satOrbitLine);
            });
        }

        // Comet Effects: Coma and Tail
        if (data.isComet || data.type === 'comet') {
            // 1. Coma (Glowing atmosphere) - Larger and softer
            const comaGeo = new THREE.SphereGeometry(1.8, 32, 32);
            const comaMat = new THREE.MeshBasicMaterial({
                color: 0x88ffcc,
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide // Glow outwards
            });
            const comaMesh = new THREE.Mesh(comaGeo, comaMat);
            mesh.add(comaMesh);

            // 2. Tail (Directional trail) - More ghostly
            const tailGeo = new THREE.ConeGeometry(1.2, 25, 32, 1, true);
            tailGeo.translate(0, 12.5, 0); // Offset so tip is at nucleus
            tailGeo.rotateX(Math.PI / 2);
            const tailMat = new THREE.MeshBasicMaterial({
                color: 0x66ccff,
                transparent: true,
                opacity: 0.2,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide
            });
            const tailMesh = new THREE.Mesh(tailGeo, tailMat);
            scene.add(tailMesh);
            body.tailMesh = tailMesh;
        }

        bodies.push(body);
        scene.add(mesh);
    });

    let speedMultiplier = 1.0;

    return {
        setSpeedMultiplier: (multiplier) => {
            speedMultiplier = multiplier;
        },
        setViewMode: (real) => {
            isRealScale = real;
            bodies.forEach(body => {
                const d = body.data;
                const targetRadius = isRealScale ? d.realScaleRadius : d.radius;
                const targetDistance = isRealScale ? d.realScaleDistance : d.distance;

                if (d.geometryScale) {
                    body.mesh.scale.set(targetRadius * d.geometryScale[0], targetRadius * d.geometryScale[1], targetRadius * d.geometryScale[2]);
                } else {
                    body.mesh.scale.setScalar(targetRadius);
                }
                body.mesh.updateMatrix();
                body.distance = targetDistance;

                if (body.orbitLine) {
                    if (d.pathPoints) {
                        // Correct Radial Mapping to match planetary distribution expansion
                        const getRadialScale = (r) => {
                            if (!isRealScale) return 1.0;
                            // Interpolate scale factors based on planetary distribution
                            if (r <= 60) return 2.5; // Earth Region
                            if (r <= 160) return 2.5 + (r - 60) / 100 * (4.86 - 2.5); // Earth-Jupiter
                            if (r <= 200) return 4.86 + (r - 160) / 40 * (7.13 - 4.86); // Jupiter-Saturn
                            if (r <= 300) return 7.13 + (r - 200) / 100 * (8.33 - 7.13); // Saturn-Neptune
                            return 8.35; // Beyond Neptune
                        };

                        const pts = d.pathPoints.map(p => {
                            const vec = new THREE.Vector3(p[0], p[1], p[2]);
                            const originalDist = vec.length();
                            if (originalDist < 0.001) return vec;
                            return vec.multiplyScalar(getRadialScale(originalDist));
                        });

                        const curve = new THREE.CatmullRomCurve3(pts, !!d.isClosed);
                        const points = curve.getPoints(d.isClosed ? 1000 : 800);

                        // Force complete geometry replacement to avoid GPU buffer state bugs
                        body.orbitLine.geometry.dispose();
                        const newGeo = new THREE.BufferGeometry().setFromPoints(points);
                        body.orbitLine.geometry = newGeo;
                    } else {
                        const curve = new THREE.EllipseCurve(0, 0, targetDistance, targetDistance, 0, 2 * Math.PI, false, 0);
                        const points = curve.getPoints(256);
                        body.orbitLine.geometry.dispose();
                        const newGeo = new THREE.BufferGeometry().setFromPoints(points);
                        body.orbitLine.geometry = newGeo;
                    }
                }

                if (body.ringMesh) {
                    const r = body.data.ring;
                    const inner = isRealScale ? r.realInner : r.innerRadius;
                    const outer = isRealScale ? r.realOuter : r.outerRadius;
                    body.ringMesh.geometry.dispose();
                    body.ringMesh.geometry = new THREE.RingGeometry(inner / targetRadius, outer / targetRadius, 128);
                    const pos = body.ringMesh.geometry.attributes.position;
                    const uv = body.ringMesh.geometry.attributes.uv;
                    const localInner = inner / targetRadius;
                    const localOuter = outer / targetRadius;
                    for (let i = 0; i < pos.count; i++) {
                        const dist = Math.sqrt(pos.getX(i) ** 2 + pos.getY(i) ** 2);
                        uv.setXY(i, 0.5, (dist - localInner) / (localOuter - localInner));
                    }
                }

                body.satellites.forEach(sat => {
                    const s = sat.data;
                    const sRadius = isRealScale ? (s.realScaleRadius || s.radius) : s.radius;
                    const sDist = isRealScale ? (s.realScaleDistance || s.distance) : s.distance;
                    sat.mesh.scale.setScalar(sRadius);
                    sat.mesh.updateMatrix();
                    sat.distance = sDist;
                    if (sat.orbitLine) {
                        const sCurve = new THREE.EllipseCurve(0, 0, sDist, sDist, 0, 2 * Math.PI, false, 0);
                        sat.orbitLine.geometry.setFromPoints(sCurve.getPoints(128));
                        if (s.type === 'space_station') {
                            sat.orbitLine.computeLineDistances();
                        }
                    }
                });
            });
        },
        isRealScale: () => isRealScale,
        setOrbitsVisibleByType: (type, visible) => {
            bodies.forEach(body => {
                if (body.data.type === type && body.orbitLine) body.orbitLine.visible = visible;
            });
        },
        setSatOrbitsVisibleByType: (type, visible) => {
            bodies.forEach(body => {
                body.satellites.forEach(sat => {
                    const satType = sat.data.type || 'satellite';
                    if (satType === type && sat.orbitLine) {
                        sat.orbitLine.visible = visible;
                    }
                });
            });
        },
        getBodies: () => bodies,
        update: (delta) => {
            const timeStep = delta * 60;
            bodies.forEach(body => {
                if (body.orbitCurve && body.data.pathPoints) {
                    body.progress += body.speed * speedMultiplier * timeStep;
                    if (body.progress > 1) body.progress = 0;
                    // Provide destination vector to avoid internal allocation
                    body.orbitCurve.getPoint(body.progress, _vS1);
                    body.mesh.position.copy(_vS1);
                } else if (body.distance > 0) {
                    body.angle += body.speed * speedMultiplier * timeStep;
                    const incl = THREE.MathUtils.degToRad(body.data.inclination || 0);
                    const lx = Math.cos(body.angle) * body.distance;
                    const lz = Math.sin(body.angle) * body.distance;
                    body.mesh.position.set(lx, lz * -Math.sin(incl), lz * Math.cos(incl));
                }

                // Update Sun Plasma Shader (Modern onBeforeCompile approach)
                if (body.isSunShader && body.mesh.material.userData.sunShader) {
                    body.mesh.material.userData.sunShader.uniforms.uTime.value += delta * speedMultiplier;
                }

                body.mesh.rotateY(body.rotationSpeed * speedMultiplier * timeStep);

                body.satellites.forEach(sat => {
                    const sDist = sat.distance || sat.data.distance;
                    const parentObliq = body.obliquity;
                    const satIncl = THREE.MathUtils.degToRad(sat.data.inclination || 0);
                    const worldSatIncl = sat.orbitRelativeToEquator ? (parentObliq + satIncl) : satIncl;
                    sat.angle += sat.data.speed * speedMultiplier * timeStep;
                    const sx = Math.cos(sat.angle) * sDist;
                    const sz = Math.sin(sat.angle) * sDist;
                    sat.mesh.position.set(
                        body.mesh.position.x + sx,
                        body.mesh.position.y + sz * -Math.sin(worldSatIncl),
                        body.mesh.position.z + sz * Math.cos(worldSatIncl)
                    );
                    sat.mesh.rotateY(0.01 * speedMultiplier * timeStep);
                    if (sat.orbitLine) sat.orbitLine.position.copy(body.mesh.position);
                });

                if (body.tailMesh) {
                    body.tailMesh.position.copy(body.mesh.position);
                    // direction = normalized mesh position
                    _vS1.copy(body.mesh.position).normalize();
                    // lookTarget = mesh position + direction
                    _vS2.addVectors(body.mesh.position, _vS1);
                    body.tailMesh.lookAt(_vS2);
                    const distToSun = body.mesh.position.length();
                    const fadeDist = isRealScale ? 5000 : 600;
                    body.tailMesh.material.opacity = Math.max(0.1, 0.6 - (distToSun / fadeDist));
                }
            });
        }
    };
}
