import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const starMeshes = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    nearbyStarSystemsData.forEach(systemData => {
        const systemGroup = new THREE.Group();
        systemGroup.position.set(systemData.position.x, systemData.position.y, systemData.position.z);

        systemData.stars.forEach(starData => {
            const geometry = new THREE.SphereGeometry(1, 32, 32);

            // Standard material for better texture fidelity
            const material = new THREE.MeshBasicMaterial({
                color: 0xffffff, // Use white to let texture show full color
            });

            if (starData.texture) {
                material.map = textureLoader.load(`textures/${starData.texture}`);
            } else {
                material.color.set(starData.color);
            }

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(starData.position.x, starData.position.y, starData.position.z);

            const visualScale = starData.radius * 50;
            mesh.scale.setScalar(visualScale);


            mesh.userData = {
                ...starData,
                visualScale: visualScale, // Store this for navigation
                parentSystem: systemData.name,
                isInterstellar: true,
                // Initialize angle based on starting position to avoid jumping
                angle: Math.atan2(starData.position.z, starData.position.x)
            };

            systemGroup.add(mesh);
            starMeshes.push(mesh);

            // Add orbital lines for non-primary stars in the system
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
                    opacity: 0.4, // Increased opacity
                    blending: THREE.NormalBlending // Change to Normal to prevent bleaching
                });
                const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);

                // Tilt the orbit slightly for a more natural look
                if (starData.orbit.inclination) {
                    orbitLine.rotation.x = THREE.MathUtils.degToRad(starData.orbit.inclination);
                }

                systemGroup.add(orbitLine);
            }
        });

        systemsGroup.add(systemGroup);
    });

    scene.add(systemsGroup);

    return {
        group: systemsGroup,
        starMeshes: starMeshes,
        update: (simSpeed, delta) => {
            starMeshes.forEach(mesh => {
                const data = mesh.userData;
                if (data.orbit) {
                    // 1. Update the angle
                    data.angle += (data.orbit.speed || 0.1) * simSpeed * delta * 0.1;

                    // 2. Calculate local X,Y,Z based on radius and inclination
                    const radius = data.orbit.radius;
                    const xLocal = radius * Math.cos(data.angle);
                    const zPlane = radius * Math.sin(data.angle);

                    if (data.orbit.inclination) {
                        // If there's a tilt (around X-axis as per our orbit line creation)
                        const tiltRad = THREE.MathUtils.degToRad(data.orbit.inclination);
                        mesh.position.set(
                            xLocal,
                            -zPlane * Math.sin(tiltRad), // Y movement due to tilt
                            zPlane * Math.cos(tiltRad)  // Corrected Z
                        );
                    } else {
                        mesh.position.set(xLocal, 0, zPlane);
                    }
                }
            });
        },
        getStarMeshes: () => starMeshes,
        setVisible: (visible) => {
            systemsGroup.traverse(child => {
                if (child instanceof THREE.LineLoop) child.visible = visible;
            });
        }
    };
}
