import * as THREE from 'three';

export function createOortCloud(scene) {
    const particleCount = 20000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Initial Scale (Artistic)
    // Neptune is 300. We want Oort Cloud to be much further.
    let minRadius = 15000;
    let maxRadius = 35000;

    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const radius = THREE.MathUtils.lerp(minRadius, maxRadius, Math.random());

        // Spherical distribution
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Faint icy blue/white colors
        const intensity = 0.5 + Math.random() * 0.5;
        colors[i * 3] = 0.8 * intensity;
        colors[i * 3 + 1] = 0.9 * intensity;
        colors[i * 3 + 2] = intensity;

        particles.push({
            initialRadius: radius,
            theta: theta,
            phi: phi,
            u: u,
            v: v,
            speed: (Math.random() - 0.5) * 0.0001 // Slow drift
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 8,
        vertexColors: true,
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    points.visible = true; // Enabled by default v3.1.7

    let currentMin = minRadius;
    let currentMax = maxRadius;

    return {
        mesh: points,
        update: (speedMultiplier, timeStep) => {
            if (!points.visible) return;

            const posAttr = points.geometry.attributes.position;
            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                p.theta += p.speed * speedMultiplier * timeStep;

                const r = p.currentRadius || p.initialRadius;
                posAttr.setXYZ(
                    i,
                    r * Math.sin(p.phi) * Math.cos(p.theta),
                    r * Math.sin(p.phi) * Math.sin(p.theta),
                    r * Math.cos(p.phi)
                );
            }
            posAttr.needsUpdate = true;
        },
        setViewMode: (isRealScale) => {
            // Neptune expands ~8.33x. Oort Cloud is 2000-50000 AU.
            // Artistic: 15000 - 35000
            // Real: Let's expand it even further to fill the background
            const factor = isRealScale ? 6 : 1;
            currentMin = 15000 * factor;
            currentMax = 35000 * factor;

            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                const ratio = (p.initialRadius - 15000) / (35000 - 15000);
                p.currentRadius = THREE.MathUtils.lerp(currentMin, currentMax, ratio);
            }

            // Adjust point size for scale
            material.size = isRealScale ? 25 : 8;
            material.opacity = isRealScale ? 0.25 : 0.4;
        },
        setVisible: (visible) => {
            points.visible = visible;
        }
    };
}
