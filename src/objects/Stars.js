import * as THREE from 'three';

export function createStars(scene, manager, count = 2000) { // Drastically reduced count for a cleaner look
    const group = new THREE.Group();

    // 1. Sparse Procedural Stars (Parallax Layer)
    // Fewer stars to keep the view clean and focused on planets
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

            // Varied brightness but mostly subtle
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

    // 2. NASA 8K Background (Dimmed for Subtlety)
    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();
    // Cache buster v14
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
        opacity: 0.38, // Refined global opacity for deeper space
        color: 0x999999 // Subtle tint
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);

    // Precise Milky Way alignment
    skySphere.rotation.x = THREE.MathUtils.degToRad(-63);
    skySphere.rotation.z = THREE.MathUtils.degToRad(45);
    group.add(skySphere);

    // 3. Localized Galactic Core Glow (Focus brightness only on the center)
    // Create a procedural radial glow texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, 'rgba(255, 200, 120, 0.4)'); // Warm amber core
    gradient.addColorStop(0.3, 'rgba(255, 150, 80, 0.15)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    const glowTexture = new THREE.CanvasTexture(canvas);
    const glowMat = new THREE.SpriteMaterial({
        map: glowTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const coreGlow = new THREE.Sprite(glowMat);
    // Position it at the estimated Galactic Center on the sphere
    // Radius is slightly less than sky sphere to avoid z-fighting
    const glowRadius = 119000;

    // Direction vector roughly matching the core position in the 8k map after rotations
    const glowPos = new THREE.Vector3(0, 0, -glowRadius);
    // Apply same world rotations to the position
    glowPos.applyEuler(new THREE.Euler(THREE.MathUtils.degToRad(-63), 0, THREE.MathUtils.degToRad(45)));

    coreGlow.position.copy(glowPos);
    coreGlow.scale.set(60000, 45000, 1); // Large oval-like glow for the central bulge
    group.add(coreGlow);
    scene.add(group);

    return {
        starGroup: group,
        skySphere: skySphere,
        update: (cameraPosition) => {
            group.position.copy(cameraPosition);
        }
    };
}
