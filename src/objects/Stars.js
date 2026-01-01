import * as THREE from 'three';

export function createStars(scene, count = 3000) {
    // 1. Procedural Stars (Sparkle depth)
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < count; i++) {
        // Distribute stars in a large volume
        const x = (Math.random() - 0.5) * 30000;
        const y = (Math.random() - 0.5) * 30000;
        const z = (Math.random() - 0.5) * 30000;
        vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.8,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // 2. Milky Way Backdrop (Large Sphere)
    const textureLoader = new THREE.TextureLoader();
    const milkyWayTexture = textureLoader.load('textures/milky_way_sky.jpg?v=7');

    // Use a massive sphere to act as the skybox
    const skyGeo = new THREE.SphereGeometry(25000, 64, 64);
    const skyMat = new THREE.MeshBasicMaterial({
        map: milkyWayTexture,
        side: THREE.BackSide, // Visible only from inside
        transparent: true,
        opacity: 0.9
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);

    // Rotate to a realistic galactic orientation (rough approximation)
    skySphere.rotation.x = THREE.MathUtils.degToRad(-63);
    skySphere.rotation.z = THREE.MathUtils.degToRad(45);

    scene.add(skySphere);

    return { stars, skySphere };
}
