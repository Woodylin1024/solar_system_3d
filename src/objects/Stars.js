import * as THREE from 'three';

export function createStars(scene, count = 12000) {
    const group = new THREE.Group();

    // 1. High-Density Procedural Stars (Distant)
    const createStarLayer = (starCount, size, opacity) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        const color = new THREE.Color();

        for (let i = 0; i < starCount; i++) {
            // Distribute stars on a very large sphere shell
            const r = 30000;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            vertices.push(x, y, z);

            const type = Math.random();
            if (type > 0.95) color.setHSL(0.6, 0.4, 0.95); // Class B star (Blue)
            else if (type > 0.85) color.setHSL(0.1, 0.5, 0.95); // Class K star (Yellow/Orange)
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
            sizeAttenuation: false // Keep stars sharp regardless of distance
        });
        return new THREE.Points(geometry, material);
    };

    const distantStars = new THREE.Group();
    distantStars.add(createStarLayer(count * 0.8, 1.2, 0.9));
    distantStars.add(createStarLayer(count * 0.2, 2.0, 0.6));
    group.add(distantStars);

    // 2. ESO High-Res Milky Way Background
    const textureLoader = new THREE.TextureLoader();
    // Cache buster v9
    const nebulaTexture = textureLoader.load('textures/milky_way_eso.jpg?v=9', (tex) => {
        tex.wrapS = THREE.RepeatWrapping; // Essential for seamless circular mapping
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
    });

    const skyGeo = new THREE.SphereGeometry(32000, 128, 128);
    const skyMat = new THREE.MeshBasicMaterial({
        map: nebulaTexture,
        side: THREE.BackSide,
        depthWrite: false, // Don't block other objects in depth buffer
        transparent: true,
        opacity: 0.8
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);

    // Rotate to match ESO/Galactic orientation roughly
    // The ESO panorama has the galactic center in the middle (0 degrees)
    skySphere.rotation.y = Math.PI; // Adjust wrap point
    skySphere.rotation.x = THREE.MathUtils.degToRad(-63);
    skySphere.rotation.z = THREE.MathUtils.degToRad(45);

    group.add(skySphere);
    scene.add(group);

    return {
        starGroup: group,
        skySphere: skySphere,
        update: (cameraPosition) => {
            // Locks the background to the camera so it's always "infinite"
            group.position.copy(cameraPosition);
        }
    };
}
