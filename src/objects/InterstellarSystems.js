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
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.1, new THREE.Color(starData.color).getStyle());
            gradient.addColorStop(0.4, new THREE.Color(starData.color).getStyle());
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, 128, 128);

            const glowTex = new THREE.CanvasTexture(canvas);
            const glowMat = new THREE.SpriteMaterial({
                map: glowTex,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthWrite: false
            });
            const glowSprite = new THREE.Sprite(glowMat);
            glowSprite.scale.setScalar(visualScale * 8); // Large but soft glow
            mesh.add(glowSprite);

            mesh.userData = {
                ...starData,
                visualScale: visualScale, // Store this for navigation
                parentSystem: systemData.name,
                isInterstellar: true
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
        update: (cameraPosition) => {
            // Interstellar stars are so far they don't move much, 
            // but we can add subtle twinkling here if needed.
        },
        getStarMeshes: () => starMeshes
    };
}
