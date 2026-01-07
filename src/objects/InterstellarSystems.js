import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const starMeshes = [];

    nearbyStarSystemsData.forEach(systemData => {
        const systemGroup = new THREE.Group();
        systemGroup.position.set(systemData.position.x, systemData.position.y, systemData.position.z);

        systemData.stars.forEach(starData => {
            // Stars are essentially spheres with high light emission
            const geometry = new THREE.SphereGeometry(1, 32, 32);
            const material = new THREE.MeshBasicMaterial({
                color: starData.color,
                transparent: true,
                opacity: 1
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(starData.position.x, starData.position.y, starData.position.z);

            // Adjust scale: 50x is enough for search-highlighted stars to be visible but not overwhelming
            const visualScale = starData.radius * 50;
            mesh.scale.setScalar(visualScale);

            // Refined Glow effect
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const context = canvas.getContext('2d');
            const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
            const starColor = new THREE.Color(starData.color);
            // Center is a very bright version of the star color, not pure white
            gradient.addColorStop(0, starColor.clone().offsetHSL(0, 0, 0.2).getStyle());
            gradient.addColorStop(0.2, starColor.getStyle());
            gradient.addColorStop(0.5, starColor.getStyle());
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, 128, 128);

            const glowTex = new THREE.CanvasTexture(canvas);
            const glowMat = new THREE.SpriteMaterial({
                map: glowTex,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.3, // Even lower to prevent masking the sphere body
                depthWrite: false
            });
            const glowSprite = new THREE.Sprite(glowMat);
            glowSprite.scale.setScalar(visualScale * 4);
            glowSprite.raycast = () => { }; // Prevent glow from blocking clicks
            mesh.add(glowSprite);

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
                    opacity: 0.2,
                    blending: THREE.AdditiveBlending
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
