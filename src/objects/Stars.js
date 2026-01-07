import * as THREE from 'three';

export function createStars(scene, manager, count = 2000) {
    const group = new THREE.Group();

    // 1. Sparse Procedural Stars (Parallax Layer)
    const createStarLayer = (starCount, size, baseOpacity) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        const color = new THREE.Color();

        for (let i = 0; i < starCount; i++) {
            const r = 40000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            vertices.push(x, y, z);

            const b = Math.pow(Math.random(), 4);
            const brightness = 0.15 + b * 0.85;
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

    group.add(createStarLayer(count, 0.5, 0.6));

    // 2. NASA 8K Background
    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();
    const starmapTexture = textureLoader.load('textures/starmap_8k.jpg?v=23.0', (tex) => {
        tex.wrapS = THREE.RepeatWrapping;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.anisotropy = 16;
        tex.generateMipmaps = false;
    });

    const skyGeo = new THREE.SphereGeometry(120000, 128, 128);
    const skyMat = new THREE.MeshBasicMaterial({
        map: starmapTexture,
        side: THREE.BackSide,
        depthWrite: false,
        transparent: true,
        opacity: 0.15, // Reduced for darker black space
        color: 0x555555 // Desaturated to prevent grey fog
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);

    // Standard Milky Way orientation
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
