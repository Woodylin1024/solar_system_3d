import * as THREE from 'three';

export function createAsteroidBelt(scene) {
    const asteroidCount = 8000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(asteroidCount * 3);
    const sizes = new Float32Array(asteroidCount);

    // Store orbital parameters for animation
    const orbitData = [];

    // Belt range in Artistic Scale (default)
    const minRadius = 72;
    const maxRadius = 105;

    for (let i = 0; i < asteroidCount; i++) {
        const radius = THREE.MathUtils.lerp(minRadius, maxRadius, Math.random());
        const angle = Math.random() * Math.PI * 2;

        // Add vertical dispersion
        const yCoord = (Math.random() - 0.5) * 4;

        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = yCoord;
        positions[i * 3 + 2] = Math.sin(angle) * radius;

        sizes[i] = Math.random() * 0.15 + 0.05;

        // Base speed based on Kepler's Law (dist^-1.5 approximation for visual)
        const speed = (0.01 / Math.sqrt(radius)) * (Math.random() * 0.5 + 0.75);

        orbitData.push({
            radius: radius,
            angle: angle,
            y: yCoord,
            speed: speed
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        color: 0x888888,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let isRealScale = false;

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
            isRealScale = real;
            // Update radii and Y dispersion for all asteroids
            const minR = isRealScale ? 220 : 72;
            const maxR = isRealScale ? 420 : 105;
            const yFactor = isRealScale ? 10 : 1;

            for (let i = 0; i < asteroidCount; i++) {
                const data = orbitData[i];
                // Smoothly map current point relative to previous range into new range
                const ratio = (data.radius - (isRealScale ? 60 : 220)) / (isRealScale ? (85 - 60) : (420 - 220));
                // Actually easier to just re-randomize or store the initial ratio
                // Let's store initialRatio
                if (data.ratio === undefined) {
                    data.ratio = (data.radius - 72) / (105 - 72);
                    data.yBase = data.y;
                }

                data.radius = THREE.MathUtils.lerp(minR, maxR, data.ratio);
                data.y = data.yBase * yFactor;
                // Re-calculate speed for new distance if we want realistic motion
                data.speed = (isRealScale ? 0.005 : 0.01) / Math.sqrt(data.radius) * (0.75 + Math.random() * 0.5);
            }
        },
        setVisible: (visible) => {
            points.visible = visible;
        }
    };
}
