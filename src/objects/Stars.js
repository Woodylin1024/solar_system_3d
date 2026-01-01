import * as THREE from 'three';

export function createStars(scene, count = 8000) {
    const group = new THREE.Group();

    // 1. Procedural Stars with Exponential Brightness Distribution
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

            // Natural star brightness variety
            const b = Math.pow(Math.random(), 3); // Most stars are faint, few are bright
            const brightness = 0.2 + b * 0.8;

            const type = Math.random();
            if (type > 0.96) color.setHSL(0.6, 0.2, brightness); // Pale Blue
            else if (type > 0.92) color.setHSL(0.1, 0.3, brightness); // Pale Amber
            else color.setHSL(0, 0, brightness); // Neutral White

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

    // Blend of fine background stars and distinct nearby ones
    group.add(createStarLayer(count * 0.85, 0.7, 0.8)); // Subtle backdrop
    group.add(createStarLayer(count * 0.15, 1.4, 0.9)); // Bright distinct stars

    // 2. ESO Milky Way with Enhanced Dynamic Range
    const textureLoader = new THREE.TextureLoader();
    // Cache buster v11
    const nebulaTexture = textureLoader.load('textures/milky_way_eso.jpg?v=11', (tex) => {
        tex.wrapS = THREE.RepeatWrapping;
        tex.minFilter = THREE.LinearFilter;
    });

    const skyGeo = new THREE.SphereGeometry(32000, 64, 64);
    const skyMat = new THREE.MeshBasicMaterial({
        map: nebulaTexture,
        side: THREE.BackSide,
        depthWrite: false,
        transparent: true,
        opacity: 0.35, // Balanced: Visible but doesn't wash out foreground
        blending: THREE.AdditiveBlending, // Allows the Galactic Center to glow naturally
        color: 0xcccccc // Slightly muted but still has range
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
