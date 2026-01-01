import * as THREE from 'three';

export function createStars(scene, count = 8000) {
    const group = new THREE.Group();

    // 1. Procedural Stars (High Precision)
    const createStarLayer = (starCount, size, baseOpacity) => {
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

            const b = Math.pow(Math.random(), 3);
            const brightness = 0.3 + b * 0.7;

            const type = Math.random();
            if (type > 0.96) color.setHSL(0.6, 0.1, brightness);
            else if (type > 0.92) color.setHSL(0.1, 0.2, brightness);
            else color.setHSL(0, 0, brightness);

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

    group.add(createStarLayer(count * 0.8, 0.8, 0.8));
    group.add(createStarLayer(count * 0.2, 1.5, 0.9));

    // 2. Custom Epic Milky Way Panorama
    const textureLoader = new THREE.TextureLoader();
    // Cache buster v12
    const nebulaTexture = textureLoader.load('textures/milky_way_custom.png?v=12', (tex) => {
        tex.wrapS = THREE.RepeatWrapping;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.anisotropy = 16; // Maximum sharpness
    });

    const skyGeo = new THREE.SphereGeometry(32000, 128, 128); // High detail mesh
    const skyMat = new THREE.MeshBasicMaterial({
        map: nebulaTexture,
        side: THREE.BackSide,
        depthWrite: false,
        transparent: true,
        opacity: 0.45, // Slightly higher to showcase the custom art
        blending: THREE.AdditiveBlending, // Makes the galactic core glow and spill naturally
        color: 0xeeeeee
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);

    // Galactic orientation (keeping the tilted realistic look)
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
