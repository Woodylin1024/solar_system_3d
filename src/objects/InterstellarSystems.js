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

            // Scaling: In interstellar space, stars are huge compared to planets but points from afar.
            // We use a visibility-friendly scale.
            const visualScale = starData.radius * 200;
            mesh.scale.setScalar(visualScale);

            // Add a glow effect (Sprite)
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const context = canvas.getContext('2d');
            const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.2, new THREE.Color(starData.color).getStyle());
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, 64, 64);

            const glowTex = new THREE.CanvasTexture(canvas);
            const glowMat = new THREE.SpriteMaterial({
                map: glowTex,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthWrite: false
            });
            const glowSprite = new THREE.Sprite(glowMat);
            glowSprite.scale.setScalar(visualScale * 4);
            mesh.add(glowSprite);

            mesh.userData = {
                ...starData,
                parentSystem: systemData.name,
                isInterstellar: true
            };

            systemGroup.add(mesh);
            starMeshes.push(mesh);
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
