import * as THREE from 'three';

export function createStars(scene, count = 2000) {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 20000;
        const y = (Math.random() - 0.5) * 20000;
        const z = (Math.random() - 0.5) * 20000;
        vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const stars = new THREE.Points(geometry, material);

    scene.add(stars);
    return stars;
}
