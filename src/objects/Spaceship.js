import * as THREE from 'three';

export function createSpaceship(scene) {
    const shipGroup = new THREE.Group();

    // 1. Materials
    const hullMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.3,
        roughness: 0.5,
    });

    const secondaryHullMat = new THREE.MeshStandardMaterial({
        color: 0x888888,
        metalness: 0.6,
        roughness: 0.3
    });

    const windowMat = new THREE.MeshStandardMaterial({
        color: 0xffaa00,
        emissive: 0xff5500,
        emissiveIntensity: 2
    });

    const engineGlowMat = new THREE.MeshBasicMaterial({
        color: 0xff8800,
        transparent: true,
        opacity: 0.8
    });

    // 2. Main Hull - Arrowhead / Diamond shape
    const mainHullGeo = new THREE.ConeGeometry(1, 4, 4);
    const mainHull = new THREE.Mesh(mainHullGeo, hullMat);
    mainHull.rotation.x = Math.PI / 2;
    mainHull.scale.set(1.5, 1, 0.4); // Flatten it
    shipGroup.add(mainHull);

    // 3. Side Wings / Extensions
    const wingGeo = new THREE.BoxGeometry(2.5, 0.1, 1.5);
    const wings = new THREE.Mesh(wingGeo, hullMat);
    wings.position.set(0, 0, -0.5);
    shipGroup.add(wings);

    // 4. Top Bridge / Structure
    const bridgeGeo = new THREE.BoxGeometry(0.4, 0.3, 1.2);
    const bridge = new THREE.Mesh(bridgeGeo, secondaryHullMat);
    bridge.position.set(0, 0.2, -0.2);
    shipGroup.add(bridge);

    // 5. "Greebles" and Windows (Adding details)
    const detailGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);

    // Distribute windows and small mechanical parts
    for (let i = 0; i < 40; i++) {
        const side = Math.random() > 0.5 ? 1 : -1;
        const zPos = (Math.random() - 0.5) * 3;
        const xPos = (Math.random() * 0.8 + 0.2) * side;
        const yOffset = (Math.random() - 0.5) * 0.15;

        // Use window material for some, hull for others
        const isWindow = Math.random() > 0.4;
        const detail = new THREE.Mesh(detailGeo, isWindow ? windowMat : secondaryHullMat);
        detail.position.set(xPos, yOffset, zPos);
        detail.scale.set(Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, Math.random() * 2);
        shipGroup.add(detail);
    }

    // 6. Engine Cluster (Rear)
    const engineBlockGeo = new THREE.BoxGeometry(0.8, 0.3, 0.5);
    const engineBlock = new THREE.Mesh(engineBlockGeo, secondaryHullMat);
    engineBlock.position.set(0, 0, -2);
    shipGroup.add(engineBlock);

    const thrusterGeo = new THREE.CylinderGeometry(0.15, 0.1, 0.3, 8);
    const engineGlows = [];

    const enginePos = [
        { x: -0.25, y: 0 }, { x: 0.25, y: 0 }, { x: 0, y: 0.1 }
    ];

    enginePos.forEach(p => {
        const t = new THREE.Mesh(thrusterGeo, secondaryHullMat);
        t.rotation.x = Math.PI / 2;
        t.position.set(p.x, p.y, -2.2);
        shipGroup.add(t);

        const glow = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), engineGlowMat);
        glow.position.set(p.x, p.y, -2.3);
        shipGroup.add(glow);
        engineGlows.push(glow);
    });

    // 7. Sensory Needles (Tips)
    const needleGeo = new THREE.CylinderGeometry(0.01, 0.01, 1, 8);
    const n1 = new THREE.Mesh(needleGeo, secondaryHullMat);
    n1.rotation.x = Math.PI / 2;
    n1.position.set(0, 0, 2);
    shipGroup.add(n1);

    // 8. Lights
    const shipTopLight = new THREE.PointLight(0xffaa00, 15, 50);
    shipTopLight.position.set(0, 2, 0);
    shipGroup.add(shipTopLight);

    const headlight = new THREE.SpotLight(0xffffff, 40, 300, Math.PI / 8, 0.5);
    headlight.position.set(0, 0, 2);
    headlight.target.position.set(0, 0, 10);
    shipGroup.add(headlight);
    shipGroup.add(headlight.target);

    shipGroup.scale.set(4, 4, 4); // Slightly larger for detail
    shipGroup.name = "AdvancedExplorer";
    scene.add(shipGroup);

    // Physics state
    const velocity = new THREE.Vector3();
    const thrust = 0.08;
    const friction = 0.98;

    return {
        mesh: shipGroup,
        velocity: velocity,
        thrust: thrust,
        friction: friction,
        update: () => {
            // Apply velocities
            shipGroup.position.add(velocity);

            // Inertia
            velocity.multiplyScalar(friction);

            // Engine pulsing with warm colors
            const speed = velocity.length();
            engineGlows.forEach(glow => {
                const scale = 0.8 + Math.random() * 0.4 + (speed * 4);
                glow.scale.set(scale, scale, scale);
                glow.material.opacity = 0.6 + Math.min(speed * 3, 0.4);
            });
        }
    };
}
