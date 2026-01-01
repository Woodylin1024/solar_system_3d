import * as THREE from 'three';

export function createStars(scene, count = 5000) { // Reduced count for realism
    const group = new THREE.Group();

    // 1. Better Procedural Stars (Fainter and more varied)
    const createStarLayer = (starCount, size, opacity, brightnessVar) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        const color = new THREE.Color();

        for (let i = 0; i < starCount; i++) {
            const r = 30000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            vertices.push(x, y, z);

            // Varied brightness: most stars should be quite faint
            const brightness = Math.random() * brightnessVar;
            const type = Math.random();
            if (type > 0.98) color.setHSL(0.6, 0.2, brightness * 1.2); // Faint Blue
            else if (type > 0.95) color.setHSL(0.1, 0.2, brightness * 1.1); // Faint Yellow
            else color.setHSL(0, 0, brightness); // Pure white/grey

            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: size,
            vertexColors: true,
            transparent: true,
            opacity: opacity,
            sizeAttenuation: false
        });
        return new THREE.Points(geometry, material);
    };

    const distantStars = new THREE.Group();
    // Vast majority are very small and faint
    distantStars.add(createStarLayer(count * 0.9, 0.6, 0.5, 0.6));
    // Only a few are "bright" stars
    distantStars.add(createStarLayer(count * 0.1, 1.2, 0.8, 1.0));
    group.add(distantStars);

    // 2. ESO Milky Way Background (Subtle)
    const textureLoader = new THREE.TextureLoader();
    const nebulaTexture = textureLoader.load('textures/milky_way_eso.jpg?v=10', (tex) => {
        tex.wrapS = THREE.RepeatWrapping;
        tex.minFilter = THREE.LinearFilter;
    });

    const skyGeo = new THREE.SphereGeometry(32000, 64, 64);
    const skyMat = new THREE.MeshBasicMaterial({
        map: nebulaTexture,
        side: THREE.BackSide,
        depthWrite: false,
        transparent: true,
        opacity: 0.15, // DRASTICALLY reduced to feel like a "night sky" instead of a photo
        color: 0x888888 // Darken the texture further
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);

    // Galactic orientation
    skySphere.rotation.x = THREE.MathUtils.degToRad(-63);
    skySphere.rotation.z = THREE.MathUtils.degToRad(45);

    group.add(skySphere);
    scene.add(group);

    return {
        starGroup: group,
        skySphere: skySphere,
        update: (cameraPosition) => {
            group.position.copy(cameraPosition);
        }
    };
}
