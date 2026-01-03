import * as THREE from 'three';

export function createKuiperBelt(scene) {
    const asteroidCount = 12000; // Even more points for a larger region
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(asteroidCount * 3);
    const sizes = new Float32Array(asteroidCount);

    const orbitData = [];

    // Kuiper Belt range in Artistic Scale
    // Neptune is around 400. Let's place Kuiper belt from 450 to 800.
    const minRadius = 450;
    const maxRadius = 800;

    for (let i = 0; i < asteroidCount; i++) {
        const radius = THREE.MathUtils.lerp(minRadius, maxRadius, Math.pow(Math.random(), 0.8)); // Sligthly denser on inner edge
        const angle = Math.random() * Math.PI * 2;

        // Kuiper belt is thicker than asteroid belt (about 10 degrees inclination range)
        const yCoord = (Math.random() - 0.5) * (radius * 0.1);

        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = yCoord;
        positions[i * 3 + 2] = Math.sin(angle) * radius;

        sizes[i] = Math.random() * 0.12 + 0.03;

        // Very slow speed for outer reaches
        const speed = (0.002 / Math.sqrt(radius)) * (Math.random() * 0.5 + 0.75);

        orbitData.push({
            radius: radius,
            angle: angle,
            y: yCoord,
            yBase: yCoord, // Keep for scaling
            speed: speed,
            ratio: (radius - minRadius) / (maxRadius - minRadius)
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        color: 0x88ccff, // Slightly blueish/icy color for Kuiper Belt
        size: 0.12,
        transparent: true,
        opacity: 0.5,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    return {
        mesh: points,
        update: (speedMultiplier, timeStep) => {
            const posAttr = points.geometry.attributes.position;
            for (let i = 0; i < asteroidCount; i++) {
                const data = orbitData[i];
                data.angle += data.speed * speedMultiplier * timeStep;

                posAttr.setXYZ(
                    i,
                    Math.cos(data.angle) * data.radius,
                    data.y,
                    Math.sin(data.angle) * data.radius
                );
            }
            posAttr.needsUpdate = true;
        },
        setViewMode: (real) => {
            // Neptune real distance is around 4500. Kuiper Belt 5000 to 12000.
            const minR = real ? 5000 : 450;
            const maxR = real ? 15000 : 800;
            const yFactor = real ? 15 : 1;

            for (let i = 0; i < asteroidCount; i++) {
                const data = orbitData[i];
                data.radius = THREE.MathUtils.lerp(minR, maxR, data.ratio);
                data.y = data.yBase * yFactor;
                // Re-calculate speed for new distance
                data.speed = (real ? 0.002 : 0.002) / Math.sqrt(data.radius) * (0.75 + Math.random() * 0.5);
            }
        },
        setVisible: (visible) => {
            points.visible = visible;
        }
    };
}
