import * as THREE from 'three';

export function createSpaceship(scene) {
    const shipGroup = new THREE.Group();

    // 1. Simple Sleek Sci-Fi Design
    // Main Body
    const bodyGeo = new THREE.BoxGeometry(1, 0.4, 3);
    const bodyMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        metalness: 0.8,
        roughness: 0.2
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    shipGroup.add(body);

    // Cocpkit
    const cockpitGeo = new THREE.BoxGeometry(0.6, 0.3, 1);
    const cockpitMat = new THREE.MeshStandardMaterial({
        color: 0x00d2ff,
        emissive: 0x00d2ff,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
    });
    const cockpit = new THREE.Mesh(cockpitGeo, cockpitMat);
    cockpit.position.set(0, 0.3, 0.5);
    shipGroup.add(cockpit);

    // Wings
    const wingGeo = new THREE.BufferGeometry();
    const wingVertices = new Float32Array([
        0, 0, 1,    // Forward center
        2, 0, -1,   // Right back
        0, 0, -0.5, // Center back
        0, 0, 1,    // Forward center
        -2, 0, -1,  // Left back
        0, 0, -0.5  // Center back
    ]);
    wingGeo.setAttribute('position', new THREE.BufferAttribute(wingVertices, 3));
    const wingMat = new THREE.MeshStandardMaterial({ color: 0x999999, side: THREE.DoubleSide });
    const wings = new THREE.Mesh(wingGeo, wingMat);
    shipGroup.add(wings);

    // Engines
    const engineGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.5, 8);
    const engineMat = new THREE.MeshStandardMaterial({ color: 0x444444 });

    const engineL = new THREE.Mesh(engineGeo, engineMat);
    engineL.rotation.x = Math.PI / 2;
    engineL.position.set(-0.4, -0.1, -1.5);
    shipGroup.add(engineL);

    const engineR = engineL.clone();
    engineR.position.set(0.4, -0.1, -1.5);
    shipGroup.add(engineR);

    // Engine Glow
    const glowGeo = new THREE.SphereGeometry(0.15, 8, 8);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x00d2ff });

    const glowL = new THREE.Mesh(glowGeo, glowMat);
    glowL.position.set(-0.4, -0.1, -1.7);
    shipGroup.add(glowL);

    const glowR = glowL.clone();
    glowR.position.set(0.4, -0.1, -1.7);
    shipGroup.add(glowR);

    shipGroup.scale.set(1.5, 1.5, 1.5); // Slightly larger
    shipGroup.position.set(0, 155, 260);

    // Add a dedicated light to the ship so it's always visible
    const shipLight = new THREE.PointLight(0xffffff, 5, 20);
    shipLight.position.set(0, 1, 0);
    shipGroup.add(shipLight);

    scene.add(shipGroup);

    // Physics state
    const velocity = new THREE.Vector3();
    const rotationVelocity = new THREE.Euler(0, 0, 0);
    const thrust = 0.05;
    const friction = 0.98;

    return {
        mesh: shipGroup,
        velocity: velocity,
        rotationVelocity: rotationVelocity,
        thrust: thrust,
        friction: friction,
        update: () => {
            // Apply velocities
            shipGroup.position.add(velocity);
            shipGroup.rotation.x += rotationVelocity.x;
            shipGroup.rotation.y += rotationVelocity.y;
            shipGroup.rotation.z += rotationVelocity.z;

            // Simple inertia
            velocity.multiplyScalar(friction);
            rotationVelocity.x *= friction;
            rotationVelocity.y *= friction;
            rotationVelocity.z *= friction;

            // Limit engine glow intensity based on speed (visual feedback)
            const speed = velocity.length();
            glowMat.color.setHSL(0.5, 1, 0.5 + Math.min(speed * 2, 0.5));
        }
    };
}
