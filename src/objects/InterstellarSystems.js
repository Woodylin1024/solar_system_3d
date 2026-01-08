import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const starMeshes = [];
    const planetMeshes = [];
    const orbitLines = []; // Keep track of all orbit lines for visibility syncing
    const beltMeshes = []; // Dynamic debris disks

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    nearbyStarSystemsData.forEach(systemData => {
        const systemGroup = new THREE.Group();
        systemGroup.position.set(systemData.position.x, systemData.position.y, systemData.position.z);

        systemData.stars.forEach(starData => {
            const starMesh = new THREE.Mesh(
                new THREE.SphereGeometry(1, 48, 48),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
            );

            if (starData.texture) {
                starMesh.material.map = textureLoader.load(`textures/${starData.texture}`);
            } else {
                starMesh.material.color.set(starData.color);
            }

            starMesh.position.set(starData.position.x, starData.position.y, starData.position.z);
            const visualScale = starData.radius * 50;
            starMesh.scale.setScalar(visualScale);

            starMesh.userData = {
                ...starData,
                visualScale: visualScale,
                parentSystem: systemData.name,
                isInterstellar: true,
                angle: Math.atan2(starData.position.z, starData.position.x)
            };

            systemGroup.add(starMesh);
            starMeshes.push(starMesh);

            // Handle Belts/Debris Disks (New Feature v3.8.2)
            if (starData.belts) {
                starData.belts.forEach((beltData) => {
                    const geometry = new THREE.BufferGeometry();
                    const positions = new Float32Array(beltData.count * 3);
                    const sizes = new Float32Array(beltData.count);
                    const orbitPoints = [];

                    for (let i = 0; i < beltData.count; i++) {
                        const radius = THREE.MathUtils.lerp(beltData.minRadius, beltData.maxRadius, Math.random());
                        const angle = Math.random() * Math.PI * 2;
                        const yCoord = (Math.random() - 0.5) * (beltData.minRadius * 0.02);

                        positions[i * 3] = Math.cos(angle) * radius;
                        positions[i * 3 + 1] = yCoord;
                        positions[i * 3 + 2] = Math.sin(angle) * radius;

                        sizes[i] = Math.random() * 2 + 1;

                        orbitPoints.push({ radius, angle, y: yCoord, speed: (0.05 / Math.sqrt(radius)) });
                    }

                    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

                    const material = new THREE.PointsMaterial({
                        color: beltData.color || 0x888888,
                        size: 2.0,
                        transparent: true,
                        opacity: beltData.opacity || 0.5,
                        sizeAttenuation: true,
                        blending: THREE.AdditiveBlending
                    });

                    const points = new THREE.Points(geometry, material);
                    points.userData = {
                        type: beltData.minRadius < 8000 ? 'interstellar_belt' : 'interstellar_kuiper',
                        parentStar: starData.name,
                        orbitPoints: orbitPoints
                    };

                    systemGroup.add(points);
                    beltMeshes.push(points);
                });
            }

            // 1. Handle Planets for this Star
            if (starData.planets) {
                starData.planets.forEach(planetData => {
                    const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
                    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

                    if (planetData.texture) {
                        planetMaterial.map = textureLoader.load(`textures/${planetData.texture}`);
                    } else {
                        planetMaterial.color.set(planetData.color);
                    }

                    const pMesh = new THREE.Mesh(planetGeometry, planetMaterial);
                    const pVisualScale = planetData.radius * 40;
                    pMesh.scale.setScalar(pVisualScale);

                    const pAngle = Math.random() * Math.PI * 2;
                    pMesh.userData = {
                        ...planetData,
                        visualScale: pVisualScale,
                        parentStar: starData.name,
                        isInterstellar: true,
                        isExoplanet: true,
                        angle: pAngle
                    };

                    systemGroup.add(pMesh);
                    planetMeshes.push(pMesh);

                    // Add planet/companion orbit line
                    const orbitPts = [];
                    const segments = 512;
                    for (let j = 0; j <= segments; j++) {
                        const angle = (j / segments) * Math.PI * 2;
                        orbitPts.push(new THREE.Vector3(
                            planetData.orbit.radius * Math.cos(angle),
                            0,
                            planetData.orbit.radius * Math.sin(angle)
                        ));
                    }
                    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPts);

                    // Determine orbit style based on type
                    const isStarComp = planetData.type === 'star';
                    const orbitMat = new THREE.LineBasicMaterial({
                        color: isStarComp ? 0xff4400 : 0x00d2ff,
                        transparent: true,
                        opacity: isStarComp ? 0.4 : 0.15,
                        blending: THREE.NormalBlending
                    });
                    const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);

                    orbitLine.userData = {
                        type: isStarComp ? 'star_orbit' : 'planet_orbit',
                        parentStar: starData.name
                    };

                    if (planetData.orbit.inclination) {
                        orbitLine.rotation.x = THREE.MathUtils.degToRad(planetData.orbit.inclination);
                    }
                    systemGroup.add(orbitLine);
                    orbitLines.push(orbitLine);
                });
            }

            // 2. Handle Star Orbit
            if (starData.orbit) {
                const orbitPts = [];
                const segments = 2048;
                for (let j = 0; j <= segments; j++) {
                    const angle = (j / segments) * Math.PI * 2;
                    orbitPts.push(new THREE.Vector3(
                        starData.orbit.radius * Math.cos(angle),
                        0,
                        starData.orbit.radius * Math.sin(angle)
                    ));
                }
                const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPts);
                const orbitMat = new THREE.LineBasicMaterial({
                    color: 0xff4400,
                    transparent: true,
                    opacity: 0.4,
                    blending: THREE.NormalBlending
                });
                const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
                orbitLine.userData = { type: 'star_orbit' };

                if (starData.orbit.inclination) {
                    orbitLine.rotation.x = THREE.MathUtils.degToRad(starData.orbit.inclination);
                }
                systemGroup.add(orbitLine);
                orbitLines.push(orbitLine);
            }
        });

        systemsGroup.add(systemGroup);
    });

    scene.add(systemsGroup);

    const allSelectable = [...starMeshes, ...planetMeshes];

    return {
        group: systemsGroup,
        starMeshes: starMeshes,
        planetMeshes: planetMeshes,
        allSelectable: allSelectable,
        update: (simSpeed, delta) => {
            // Update Star positions
            starMeshes.forEach(mesh => {
                const data = mesh.userData;
                if (data.orbit) {
                    data.angle += (data.orbit.speed || 0.1) * simSpeed * delta * 0.1;
                    const radius = data.orbit.radius;
                    const x = radius * Math.cos(data.angle);
                    const z = radius * Math.sin(data.angle);

                    if (data.orbit.inclination) {
                        const t = THREE.MathUtils.degToRad(data.orbit.inclination);
                        mesh.position.set(x, -z * Math.sin(t), z * Math.cos(t));
                    } else {
                        mesh.position.set(x, 0, z);
                    }
                }
            });

            // Update Planet positions & Planet Orbit line positions
            planetMeshes.forEach(pMesh => {
                const pData = pMesh.userData;
                const parentStar = starMeshes.find(s => s.userData.name === pData.parentStar);
                if (parentStar && pData.orbit) {
                    pData.angle += (pData.orbit.speed || 0.5) * simSpeed * delta * 0.5;
                    const radius = pData.orbit.radius;
                    const x = radius * Math.cos(pData.angle);
                    const z = radius * Math.sin(pData.angle);

                    if (pData.orbit.inclination) {
                        const t = THREE.MathUtils.degToRad(pData.orbit.inclination);
                        pMesh.position.set(
                            parentStar.position.x + x,
                            parentStar.position.y - z * Math.sin(t),
                            parentStar.position.z + z * Math.cos(t)
                        );
                    } else {
                        pMesh.position.set(parentStar.position.x + x, parentStar.position.y, parentStar.position.z + z);
                    }
                }
            });

            // Update Belts positions (Follow parent stars)
            beltMeshes.forEach(belt => {
                const parentStar = starMeshes.find(s => s.userData.name === belt.userData.parentStar);
                if (parentStar) {
                    belt.position.copy(parentStar.position);

                    // Optional: Animate belt rotation
                    const posAttr = belt.geometry.attributes.position;
                    const orbitPoints = belt.userData.orbitPoints;
                    for (let i = 0; i < orbitPoints.length; i++) {
                        const p = orbitPoints[i];
                        p.angle += p.speed * simSpeed * delta * 0.2;
                        posAttr.setXYZ(i, Math.cos(p.angle) * p.radius, p.y, Math.sin(p.angle) * p.radius);
                    }
                    posAttr.needsUpdate = true;
                }
            });

            orbitLines.forEach(line => {
                if ((line.userData.type === 'planet_orbit' || line.userData.type === 'star_orbit') && line.userData.parentStar) {
                    const parentStar = starMeshes.find(s => s.userData.name === line.userData.parentStar);
                    if (parentStar) line.position.copy(parentStar.position);
                }
            });
        },
        getStarMeshes: () => allSelectable,
        setVisible: (starOrbitsVisible, planetOrbitsVisible, beltVisible, kuiperVisible) => {
            orbitLines.forEach(line => {
                if (line.userData.type === 'star_orbit') {
                    line.visible = starOrbitsVisible;
                } else if (line.userData.type === 'planet_orbit') {
                    line.visible = planetOrbitsVisible;
                }
            });
            beltMeshes.forEach(belt => {
                if (belt.userData.type === 'interstellar_belt') {
                    belt.visible = beltVisible;
                } else if (belt.userData.type === 'interstellar_kuiper') {
                    belt.visible = kuiperVisible;
                }
            });
        }
    };
}
