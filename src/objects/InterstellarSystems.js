import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems v4.6.0 - Tendex Logic & Tangential Accretion
 * Features:
 * - Spiraling Accretion Disks (Simulates angular momentum loss & inward drift)
 * - Tangential Matter Streams (Flows into disk edge instead of center)
 * - Improved Volumetric Torus (Gaseous volume with thickness)
 * - Thermal intensity gradients for binary companions
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = [];
    const selectable = [];
    const orbitLines = [];
    const accretionDisks = [];
    const gasStreams = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    // Generate a noise texture with spiral orientation for the disk
    const createSpiralDiskTexture = () => {
        const width = 1024, height = 512;
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw inward-slanting gas streaks to simulate spiral when wrapped
        for (let i = 0; i < width; i += 4) {
            const opacity = 1.0 - (i / width);
            const brightness = 180 + Math.random() * 75;
            ctx.fillStyle = `rgba(${brightness - 50}, ${brightness + 30}, 255, ${opacity * 0.4})`;

            const startY = Math.random() * height;
            const h = 2 + Math.random() * 20;
            // Slant: dy = dx * something to create spiral effect
            ctx.beginPath();
            ctx.moveTo(i, startY);
            ctx.lineTo(i + 40, (startY + 30) % height);
            ctx.lineWidth = 1 + Math.random() * 3;
            ctx.strokeStyle = ctx.fillStyle;
            ctx.stroke();
        }

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.1, 'rgba(0, 220, 255, 0.8)');
        grad.addColorStop(0.4, 'rgba(0, 80, 240, 0.2)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        return tex;
    };

    const spiralDiskTex = createSpiralDiskTexture();

    const createEntity = (data, parentName, container, depth = 0, systemName) => {
        let mesh;
        const radius = data.radius ?? 1;
        const scaleFactor = data.type === 'star' ? 50 : 40;
        const baseScale = radius * scaleFactor;

        if (radius > 0) {
            const geometry = data.isDistorted ? new THREE.SphereGeometry(1, 64, 64) : new THREE.SphereGeometry(1, 48, 48);
            const material = new THREE.MeshStandardMaterial({
                color: data.color || 0xffffff,
                emissive: data.color || 0xffffff,
                emissiveIntensity: data.isDistorted ? 3.5 : (data.emissiveIntensity || 1.0)
            });
            if (data.texture) material.map = textureLoader.load(`textures/${data.texture}`);

            mesh = new THREE.Mesh(geometry, material);
            if (data.isDistorted && data.distortionAxes) {
                mesh.scale.set(baseScale * (data.distortionAxes.x || 1), baseScale * (data.distortionAxes.y || 1), baseScale * (data.distortionAxes.z || 1.8));
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

        // FEATURE: Realistic Volumetric Torus Accretion (With Spiral Animation)
        if (data.hasAccretionDisk) {
            const diskGroup = new THREE.Group();
            const outerR = data.diskRadius || (baseScale * 20);

            // Volumetric layer: Torus
            const volTorus = new THREE.Mesh(
                new THREE.TorusGeometry(outerR * 0.5, outerR * 0.1, 16, 128),
                new THREE.MeshBasicMaterial({
                    color: 0x00aaff,
                    transparent: true,
                    opacity: 0.3,
                    blending: THREE.AdditiveBlending
                })
            );
            volTorus.rotation.x = Math.PI / 2;
            diskGroup.add(volTorus);

            // Detailed Plane layer: Spiral Gas
            const spiralDisk = new THREE.Mesh(
                new THREE.RingGeometry(baseScale * 0.1, outerR, 128),
                new THREE.MeshBasicMaterial({
                    map: spiralDiskTex,
                    transparent: true,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide,
                    depthWrite: false
                })
            );
            spiralDisk.rotation.x = -Math.PI / 2;
            diskGroup.add(spiralDisk);

            container.add(diskGroup);
            accretionDisks.push({ group: diskGroup, parentName: data.name, outerRadius: outerR });
        }

        // FEATURE: Tangential Gas Stream (Precision bridge to disk edge)
        if (data.hasGasStream) {
            const stream = new THREE.Mesh(
                new THREE.CylinderGeometry(baseScale * 0.05, baseScale * 0.8, 1, 24, 1, true),
                new THREE.MeshBasicMaterial({
                    color: 0x88ccff,
                    transparent: true,
                    opacity: 0.7,
                    blending: THREE.AdditiveBlending,
                    side: THREE.DoubleSide
                })
            );
            stream.geometry.translate(0, 0.5, 0);
            stream.geometry.rotateX(Math.PI / 2);
            container.add(stream);
            gasStreams.push({ mesh: stream, source: data.name, target: parentName });
        }

        // FEATURE: Custom Orbit Lines
        if (data.orbit) {
            const pts = [];
            for (let i = 0; i <= 256; i++) {
                const a = (i / 256) * Math.PI * 2;
                pts.push(new THREE.Vector3(Math.cos(a) * data.orbit.radius, 0, Math.sin(a) * data.orbit.radius));
            }
            const oLine = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({
                color: 0xff4400, transparent: true, opacity: 0.3
            }));
            if (data.orbit.inclination) oLine.rotation.x = THREE.MathUtils.degToRad(data.orbit.inclination);
            oLine.userData = { parentName };
            container.add(oLine);
            orbitLines.push(oLine);
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

    const worldTarget = new THREE.Vector3();

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
                const r = d.orbit.radius;
                const x = Math.cos(d.angle) * r;
                const z = Math.sin(d.angle) * r;
                if (d.orbit.inclination) {
                    const inc = THREE.MathUtils.degToRad(d.orbit.inclination);
                    e.position.set(pPos.x + x, pPos.y - z * Math.sin(inc), pPos.z + z * Math.cos(inc));
                } else {
                    e.position.set(pPos.x + x, pPos.y, pPos.z + z);
                }
                if (d.isDistorted && parent) {
                    parent.getWorldPosition(worldTarget);
                    e.lookAt(worldTarget);
                }
            });

            // Update Spiral Accretion Disks (Inward drift)
            accretionDisks.forEach(ad => {
                const p = allEntities.find(e => e.userData.name === ad.parentName);
                if (p) {
                    ad.group.position.copy(p.position);
                    // Layer 2 is the spiral gas plane
                    const mat = ad.group.children[1].material;
                    mat.map.offset.x -= 0.1 * simSpeed * delta; // Orbiting speed
                    mat.map.offset.y += 0.02 * simSpeed * delta; // INWARD DRIFT (Tendex effect)
                }
            });

            // Precision Gas Stream Update (TANGENTIAL ENTRY)
            gasStreams.forEach(gs => {
                const s = allEntities.find(e => e.userData.name === gs.source);
                const t = allEntities.find(e => e.userData.name === gs.target);
                const disk = accretionDisks.find(d => d.parentName === gs.target);

                if (s && t && disk) {
                    const localTarget = new THREE.Vector3();
                    // Tangential impact point logic
                    // Instead of center, aim at edge of the accretion disk radius
                    // Offset target slightly to the 'side' of the center relative to star position
                    const dirToCenter = new THREE.Vector3().subVectors(t.position, s.position).normalize();
                    const perp = new THREE.Vector3(-dirToCenter.z, 0, dirToCenter.x).normalize();
                    const impactPoint = t.position.clone().add(perp.multiplyScalar(disk.outerRadius * 0.8));

                    const scaledZ = s.userData.visualScale * (s.userData.distortionAxes?.z || 1.8);
                    const tip = s.position.clone().add(dirToCenter.multiplyScalar(scaledZ));

                    gs.mesh.position.copy(tip);
                    gs.mesh.lookAt(impactPoint);
                    gs.mesh.scale.z = tip.distanceTo(impactPoint);
                    gs.mesh.material.opacity = 0.5 + Math.sin(Date.now() * 0.01) * 0.2;
                }
            });

            orbitLines.forEach(l => {
                const p = allEntities.find(e => e.userData.name === l.userData.parentName);
                if (p) l.position.copy(p.position);
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (s, p, b, k) => {
            orbitLines.forEach(l => l.visible = b);
        }
    };
}
