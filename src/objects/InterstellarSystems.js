import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const starMeshes = [];
    const planetMeshes = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    nearbyStarSystemsData.forEach(systemData => {
        const systemGroup = new THREE.Group();
        systemGroup.position.set(systemData.position.x, systemData.position.y, systemData.position.z);

        systemData.stars.forEach(starData => {
            const starMesh = new THREE.Mesh(
                new THREE.SphereGeometry(1, 32, 32),
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

                    // Planetary visual scale: Make them visible relative to the star
                    // Since star visual scale is ~50, we make these ~10-20 to be clickable
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

                    // Planets are children of the star but we manage their orbits in the update loop
                    // We'll add them to the systemGroup but relative to star position
                    systemGroup.add(pMesh);
                    planetMeshes.push(pMesh);

                    // Add planet orbit line
                    const orbitPoints = [];
                    const segments = 128;
                    for (let j = 0; j <= segments; j++) {
                        const angle = (j / segments) * Math.PI * 2;
                        const ox = planetData.orbit.radius * Math.cos(angle);
                        const oz = planetData.orbit.radius * Math.sin(angle);
                        orbitPoints.push(new THREE.Vector3(ox, 0, oz));
                    }
                    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
                    const orbitMat = new THREE.LineBasicMaterial({
                        color: planetData.color,
                        transparent: true,
                        opacity: 0.15,
                        blending: THREE.NormalBlending
                    });
                    const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);

                    // Position orbit relative to star
                    orbitLine.position.copy(starMesh.position);

                    if (planetData.orbit.inclination) {
                        orbitLine.rotation.x = THREE.MathUtils.degToRad(planetData.orbit.inclination);
                    }
                    systemGroup.add(orbitLine);
                });
            }

            // 2. Handle Star Orbit (if any)
            if (starData.orbit) {
                const orbitPoints = [];
                const segments = 128;
                for (let j = 0; j <= segments; j++) {
                    const angle = (j / segments) * Math.PI * 2;
                    const ox = starData.orbit.radius * Math.cos(angle);
                    const oz = starData.orbit.radius * Math.sin(angle);
                    orbitPoints.push(new THREE.Vector3(ox, 0, oz));
                }
                const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
                const orbitMat = new THREE.LineBasicMaterial({
                    color: starData.color,
                    transparent: true,
                    opacity: 0.4,
                    blending: THREE.NormalBlending
                });
                const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);

                if (starData.orbit.inclination) {
                    orbitLine.rotation.x = THREE.MathUtils.degToRad(starData.orbit.inclination);
                }
                systemGroup.add(orbitLine);
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
                    const xLocal = radius * Math.cos(data.angle);
                    const zPlane = radius * Math.sin(data.angle);

                    if (data.orbit.inclination) {
                        const tiltRad = THREE.MathUtils.degToRad(data.orbit.inclination);
                        mesh.position.set(xLocal, -zPlane * Math.sin(tiltRad), zPlane * Math.cos(tiltRad));
                    } else {
                        mesh.position.set(xLocal, 0, zPlane);
                    }
                }
            });

            // Update Planet positions relative to their parent stars
            planetMeshes.forEach(pMesh => {
                const pData = pMesh.userData;
                const parentStar = starMeshes.find(s => s.userData.name === pData.parentStar);
                if (parentStar && pData.orbit) {
                    pData.angle += (pData.orbit.speed || 0.5) * simSpeed * delta * 0.5;
                    const radius = pData.orbit.radius;
                    const xLocal = radius * Math.cos(pData.angle);
                    const zPlane = radius * Math.sin(pData.angle);

                    // Update orbit line position if the star moves!
                    // (Though currently interstellar orbit lines are static children of systemGroup)
                    // We must update the planet position based on star position
                    if (pData.orbit.inclination) {
                        const tiltRad = THREE.MathUtils.degToRad(pData.orbit.inclination);
                        pMesh.position.set(
                            parentStar.position.x + xLocal,
                            parentStar.position.y - zPlane * Math.sin(tiltRad),
                            parentStar.position.z + zPlane * Math.cos(tiltRad)
                        );
                    } else {
                        pMesh.position.set(
                            parentStar.position.x + xLocal,
                            parentStar.position.y,
                            parentStar.position.z + zPlane
                        );
                    }
                }
            });
        },
        getStarMeshes: () => allSelectable, // Update this so main.js can pick up planets
        setVisible: (visible) => {
            systemsGroup.traverse(child => {
                if (child instanceof THREE.LineLoop) child.visible = visible;
            });
        }
    };
}
