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

    // Create a shared container for Milky Way components to ensure perfect alignment
    const mwSystem = new THREE.Group();
    mwSystem.rotation.x = THREE.MathUtils.degToRad(-63);
    mwSystem.rotation.z = THREE.MathUtils.degToRad(45);
    group.add(mwSystem);

    const skyGeo = new THREE.SphereGeometry(120000, 128, 128);
    const skyMat = new THREE.MeshBasicMaterial({
        map: starmapTexture,
        side: THREE.BackSide,
        depthWrite: false,
        transparent: true,
        opacity: 0.4, // Balanced background
        color: 0x999999
    });

    const skySphere = new THREE.Mesh(skyGeo, skyMat);
    mwSystem.add(skySphere);

    // 3. Multi-Layered Galactic Core & Plane Glow
    const createGlowTexture = (isCore) => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);

        if (isCore) {
            gradient.addColorStop(0, 'rgba(255, 210, 150, 0.45)'); // Bright core
            gradient.addColorStop(0.2, 'rgba(255, 160, 100, 0.2)');
        } else {
            gradient.addColorStop(0, 'rgba(255, 180, 120, 0.15)'); // Soft outer haze
            gradient.addColorStop(0.5, 'rgba(255, 120, 60, 0.05)');
        }
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
        return new THREE.CanvasTexture(canvas);
    };

    const coreTex = createGlowTexture(true);
    const outerTex = createGlowTexture(false);

    const glowRadius = 118000;

    // Layer 1: Intensive Central Bulge
    const coreSprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: coreTex,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false
    }));
    coreSprite.position.set(0, 0, -glowRadius);
    coreSprite.scale.set(60000, 50000, 1);
    mwSystem.add(coreSprite);

    // Layer 2: Extended Galactic Plane Ribbon (Horizontal Stretch)
    const planeRibbon = new THREE.Sprite(new THREE.SpriteMaterial({
        map: outerTex,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        opacity: 0.8
    }));
    // Note: Sprite faces camera by default, but we can scale it on one axis.
    // For a better "disc" look, we use its wide scale along the galactic equator.
    planeRibbon.position.set(0, 0, -glowRadius);
    planeRibbon.scale.set(180000, 40000, 1); // Extreme horizontal stretching
    mwSystem.add(planeRibbon);

    // Layer 3: Secondary Outer Haze
    const outerHaze = new THREE.Sprite(new THREE.SpriteMaterial({
        map: outerTex,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false
    }));
    outerHaze.position.set(0, 0, -glowRadius);
    outerHaze.scale.set(90000, 80000, 1);
    mwSystem.add(outerHaze);

    // 4. Irregular Dark Dust & Gas Clouds (Blocking the light)
    const createDustTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Clear with transparent
        ctx.clearRect(0, 0, 512, 512);

        // Draw multiple clumpy, dark spots to create irregular "holes"
        for (let i = 0; i < 40; i++) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const r = 20 + Math.random() * 80;

            const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
            const op = 0.2 + Math.random() * 0.6;
            // Dark brownish/black dust
            grad.addColorStop(0, `rgba(20, 10, 5, ${op})`);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
    };

    const dustTex = createDustTexture();
    const dustRadius = glowRadius - 2000; // Slightly in front of the glow

    // Scatter multiple irregular dust sprites along the galactic plane
    for (let i = 0; i < 20; i++) {
        // Create unique material for each sprite to allow individual rotations
        const dustMat = new THREE.SpriteMaterial({
            map: dustTex,
            transparent: true,
            opacity: 0.8 + Math.random() * 0.15,
            depthWrite: false
        });

        // Randomly rotate the sprite texture itself (correct syntax)
        dustMat.rotation = Math.random() * Math.PI;

        const dustSprite = new THREE.Sprite(dustMat);

        // Randomly position along the galactic plane
        const offsetX = (Math.random() - 0.5) * 180000;
        const offsetY = (Math.random() - 0.5) * 20000;

        dustSprite.position.set(offsetX, offsetY, -dustRadius);

        // Highly irregular scaling to make it look like filaments/clumps
        const sw = 40000 + Math.random() * 70000;
        const sh = 10000 + Math.random() * 40000;
        dustSprite.scale.set(sw, sh, 1);

        mwSystem.add(dustSprite);
    }

    scene.add(group);

    return {
        starGroup: group,
        skySphere: skySphere,
        update: (cameraPosition) => {
            group.position.copy(cameraPosition);
        }
    };
}
