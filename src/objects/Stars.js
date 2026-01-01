import * as THREE from 'three';

export function createStars(scene, count = 10000) {
    // 1. High-Density Procedural Stars
    // Using multiple layers of stars for parallax and depth
    const starGroups = new THREE.Group();

    const createStarLayer = (starCount, size, opacity) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        const color = new THREE.Color();

        for (let i = 0; i < starCount; i++) {
            // Random spherical distribution
            const r = 24000 + Math.random() * 2000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            vertices.push(x, y, z);

            // Subtle star colors (blueish, yellowish, white)
            const type = Math.random();
            if (type > 0.9) color.setHSL(0.6, 0.2, 0.9); // Blue
            else if (type > 0.8) color.setHSL(0.1, 0.3, 0.9); // Yellowish
            else color.setHSL(0, 0, 1); // White

            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: size,
            vertexColors: true,
            transparent: true,
            opacity: opacity,
            sizeAttenuation: true
        });
        return new THREE.Points(geometry, material);
    };

    // Add three layers of stars for maximum depth
    starGroups.add(createStarLayer(count * 0.7, 0.7, 0.8)); // Fine stars
    starGroups.add(createStarLayer(count * 0.2, 1.2, 0.6)); // Medium stars
    starGroups.add(createStarLayer(count * 0.1, 2.0, 0.4)); // Bright distant stars

    scene.add(starGroups);

    // 2. High-Res Milky Way Nebula Backdrop (Large Sphere)
    const textureLoader = new THREE.TextureLoader();
    // Cache busting v8
    const nebulaTexture = textureLoader.load('textures/milky_way_nebula.png?v=8');
    nebulaTexture.anisotropy = 16;

    // Massive sphere for the nebula background
    const skyGeo = new THREE.SphereGeometry(26000, 128, 128); // Higher segments to prevent pinching
    const skyMat = new THREE.MeshBasicMaterial({
        map: nebulaTexture,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending // Makes the nebula glow against the stars
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);

    // Galactic orientation
    skySphere.rotation.x = THREE.MathUtils.degToRad(-63);
    skySphere.rotation.z = THREE.MathUtils.degToRad(45);

    scene.add(skySphere);

    return { starGroups, skySphere };
}
