import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v4.2.1 - Emergency Stability & Visual Polish
 * Fixed module-level crashes and restored render loop stability.
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const beltMeshes = [];
    const accretionDisks = [];
    const gasStreams = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    // Procedural glowing disk texture
    const createDiskTexture = () => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.1, 'rgba(0, 200, 255, 0.9)');
        grad.addColorStop(0.3, 'rgba(0, 100, 255, 0.4)');
        grad.addColorStop(0.6, 'rgba(0, 50, 150, 0.1)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);

        // Grainy noise for gas texture
        for (let i = 0; i < 1500; i++) {
            const a = Math.random() * Math.PI * 2;
            const r = Math.random() * size / 2;
            ctx.fillStyle = `rgba(200, 240, 255, ${Math.random() * 0.2})`;
            ctx.fillRect(size / 2 + Math.cos(a) * r, size / 2 + Math.sin(a) * r, 1, 1);
        }
        return new THREE.CanvasTexture(canvas);
    };

    const diskTexture = createDiskTexture();

    const createEntity = (data, parentName, container, depth = 0, systemName) => {
        let mesh;
        const radius = data.radius ?? 1;
        const scaleFactor = data.type === 'star' ? 50 : 40;
        const baseScale = radius * scaleFactor;

        if (radius > 0) {
            const geometry = data.isDistorted ? new THREE.SphereGeometry(1, 64, 64) : new THREE.SphereGeometry(1, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: data.color || 0xffffff });
            if (data.texture) material.map = textureLoader.load(`textures/${data.texture}`);

            mesh = new THREE.Mesh(geometry, material);
            if (data.isDistorted && data.distortionAxes) {
                mesh.scale.set(baseScale * (data.distortionAxes.x || 1), baseScale * (data.distortionAxes.y || 1), baseScale * (data.distortionAxes.z || 1));
            } else {
                mesh.scale.setScalar(baseScale);
            }
            selectable.push(mesh);
        } else {
            mesh = new THREE.Object3D();
        }

        mesh.userData = {
            ...data,
            name: data.name,
            visualScale: baseScale,
            parentName: parentName,
            depth: depth,
            angle: data.orbit?.startAngle ?? Math.random() * Math.PI * 2
        };

        container.add(mesh);
        allEntities.push(mesh);

        // Specialized Features
        if (data.hasAccretionDisk) {
            const diskSize = data.diskRadius || (baseScale * 20);
            const disk = new THREE.Mesh(
                new THREE.PlaneGeometry(diskSize * 2, diskSize * 2),
                new THREE.MeshBasicMaterial({ map: diskTexture, transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
            );
            disk.rotation.x = -Math.PI / 2;
            container.add(disk); // Add to system container for correct scaling
            accretionDisks.push({ mesh: disk, parentName: data.name });
        }

        if (data.hasGasStream) {
            const stream = new THREE.Mesh(
                new THREE.CylinderGeometry(baseScale * 0.05, baseScale * 0.3, 1, 12, 1, true),
                new THREE.MeshBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending })
            );
            stream.geometry.translate(0, 0.5, 0);
            stream.geometry.rotateX(Math.PI / 2);
            container.add(stream);
            gasStreams.push({ mesh: stream, source: data.name, target: parentName });
        }

        if (data.orbit) {
            const pts = [];
            for (let i = 0; i <= 256; i++) {
                const a = (i / 256) * Math.PI * 2;
                pts.push(new THREE.Vector3(Math.cos(a) * data.orbit.radius, 0, Math.sin(a) * data.orbit.radius));
            }
            const orbit = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xff4400, transparent: true, opacity: 0.3 }));
            if (data.orbit.inclination) orbit.rotation.x = THREE.MathUtils.degToRad(data.orbit.inclination);
            orbit.userData = { parentName };
            container.add(orbit);
            orbitLines.push(orbit);
        }

        if (data.planets) {
            data.planets.forEach(p => createEntity(p, data.name, container, depth + 1, systemName));
        }
    };

    nearbyStarSystemsData.forEach(sys => {
        const group = new THREE.Group();
        group.position.set(sys.position.x, sys.position.y, sys.position.z);
        sys.stars.forEach(s => createEntity(s, null, group, 0, sys.name));
        systemsGroup.add(group);
    });

    scene.add(systemsGroup);
    allEntities.sort((a, b) => a.userData.depth - b.userData.depth);

    return {
        group: systemsGroup,
        allSelectable: selectable,
        update: (simSpeed, delta) => {
            allEntities.forEach(e => {
                const d = e.userData;
                if (!d.orbit) return;
                const parent = d.parentName ? allEntities.find(p => p.userData.name === d.parentName) : null;
                const pPos = parent ? parent.position : new THREE.Vector3(0, 0, 0);

                d.angle += (d.orbit.speed || 0.1) * simSpeed * delta * 0.1;
                const x = Math.cos(d.angle) * d.orbit.radius;
                const z = Math.sin(d.angle) * d.orbit.radius;
                if (d.orbit.inclination) {
                    const inc = THREE.MathUtils.degToRad(d.orbit.inclination);
                    e.position.set(pPos.x + x, pPos.y - z * Math.sin(inc), pPos.z + z * Math.cos(inc));
                } else {
                    e.position.set(pPos.x + x, pPos.y, pPos.z + z);
                }
                if (d.isDistorted) e.lookAt(pPos);
            });

            accretionDisks.forEach(ad => {
                const p = allEntities.find(e => e.userData.name === ad.parentName);
                if (p) {
                    ad.mesh.position.copy(p.position);
                    ad.mesh.rotation.z += 0.02 * simSpeed;
                }
            });

            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source);
                const t = allEntities.find(e => e.userData.name === gs.target);
                if (s && t) {
                    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(s.quaternion);
                    const tip = s.position.clone().add(forward.multiplyScalar(s.userData.visualScale * (s.userData.distortionAxes?.z || 1)));
                    gs.mesh.position.copy(tip);
                    gs.mesh.lookAt(t.position);
                    gs.mesh.scale.z = tip.distanceTo(t.position);
                    gs.mesh.material.opacity = 0.4 + Math.sin(Date.now() * 0.005) * 0.2;
                }
            });

            orbitLines.forEach(l => {
                const p = allEntities.find(e => e.userData.name === l.userData.parentName);
                if (p) l.position.copy(p.position);
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => {
            orbitLines.forEach(l => l.visible = s);
        }
    };
}
