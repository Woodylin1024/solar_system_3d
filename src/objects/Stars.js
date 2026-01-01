import * as THREE from 'three';

export function createStars(scene, count = 10000) {
    const group = new THREE.Group();

    // 1. High-Density Procedural Stars (Parallax Layer)
    // These stars move with the camera to provide depth against the static background
    const createStarLayer = (starCount, size, baseOpacity) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        const color = new THREE.Color();

        for (let i = 0; i < starCount; i++) {
            const r = 40000; // Place them between planets and background
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            vertices.push(x, y, z);

            const b = Math.pow(Math.random(), 3);
            const brightness = 0.2 + b * 0.8;
            color.setHSL(0, 0, brightness);
            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: size,
            vertexColors: true,
            transparent: true,
            opacity: baseOpacity,
            sizeAttenuation: false
        });
        return new THREE.Points(geometry, material);
    };

    group.add(createStarLayer(count, 0.6, 0.7));

    // 2. NASA 8K Ultra-High-Resolution Background
    const textureLoader = new THREE.TextureLoader();
    // Cache buster v13
    const starmapTexture = textureLoader.load('textures/starmap_8k.jpg?v=13', (tex) => {
        tex.wrapS = THREE.RepeatWrapping;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.anisotropy = 16;
        tex.generateMipmaps = false; // Prevents blur at distance for such a large texture
    });

    // Use a massive distance for the ultimate skybox
    const skyGeo = new THREE.SphereGeometry(120000, 128, 128);
    const skyMat = new THREE.MeshBasicMaterial({
        map: starmapTexture,
        side: THREE.BackSide,
        depthWrite: false, // Essential for infinite background feel
        color: 0xffffff // Maintain full dynamic range
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);

    // Galactic orientation (NASA maps are usually already aligned to celestial J2000)
    // We adjust to match our scene's ecliptic roughly
    skySphere.rotation.x = THREE.MathUtils.degToRad(-63);
    skySphere.rotation.z = THREE.MathUtils.degToRad(45);

    group.add(skySphere);
    scene.add(group);

    return {
        starGroup: group,
        skySphere: skySphere,
        update: (cameraPosition) => {
            // Locks the background to the camera
            group.position.copy(cameraPosition);
        }
    };
}
