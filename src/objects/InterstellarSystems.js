import * as THREE from 'three';
import { nearbyStarSystemsData } from '../data/nearbySystemsData.js';

/**
 * InterstellarSystems - Enhanced hierarchical celestial system generator.
 * Supports arbitrary depth recursive orbits, invisible barycentric nodes, 
 * and synchronized orbital line movement.
 */
export function createInterstellarSystems(scene, manager) {
    const systemsGroup = new THREE.Group();
    const allEntities = []; // All physical objects for update loop
    const selectable = [];  // Visible meshes for raycasting/navigation
    const orbitLines = [];
    const beltMeshes = [];

    const textureLoader = manager ? new THREE.TextureLoader(manager) : new THREE.TextureLoader();

    /**
     * Recursive function to build the orbital hierarchy.
     */
    const createEntity = (data, parentName, container, depth = 0, systemName) => {
        let mesh;
        if (data.radius > 0) {
            // Visible Celestial Body (Star or Planet)
            mesh = new THREE.Mesh(
                new THREE.SphereGeometry(1, 48, 48),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
            );

            if (data.texture) {
                mesh.material.map = textureLoader.load(`textures/${data.texture}`);
            } else {
                mesh.material.color.set(data.color || 0xffffff);
            }

            // Visual scale: Stars are base 50, Planets base 40
            const scaleFactor = data.type === 'star' ? 50 : 40;
            const visualScale = data.radius * scaleFactor;
            mesh.scale.setScalar(visualScale);

            mesh.userData = {
                ...data,
                visualScale,
                isInterstellar: true,
                parentSystem: systemName,
                isExoplanet: data.type !== 'star'
            };
            selectable.push(mesh);
        } else {
            // Invisible Node (Barycenter or Reference Point)
            mesh = new THREE.Object3D();
            mesh.userData = { ...data, isInterstellar: true, parentSystem: systemName };
        }

        // Shared orbital data
        mesh.userData.parentName = parentName;
        mesh.userData.depth = depth;
        mesh.userData.angle = data.orbit?.startAngle ?? Math.random() * Math.PI * 2;

        allEntities.push(mesh);
        container.add(mesh); // Flat addition to the group for custom manual parenting logic

        // Create Orbital Line
        if (data.orbit) {
            const orbitPts = [];
            const segments = 512;
            for (let j = 0; j <= segments; j++) {
                const angle = (j / segments) * Math.PI * 2;
                orbitPts.push(new THREE.Vector3(
                    data.orbit.radius * Math.cos(angle),
                    0,
                    data.orbit.radius * Math.sin(angle)
                ));
            }
            const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPts);
            const isStar = data.type === 'star';
            const orbitMat = new THREE.LineBasicMaterial({
                color: isStar ? 0xff4400 : 0x00d2ff,
                transparent: true,
                opacity: isStar ? 0.3 : 0.15,
                blending: THREE.NormalBlending
            });
            const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
            orbitLine.userData = {
                parentName: parentName,
                type: isStar ? 'star_orbit' : 'planet_orbit'
            };
            container.add(orbitLine);
            orbitLines.push(orbitLine);
        }

        // Handle Belts for this specific node
        if (data.belts) {
            data.belts.forEach(beltData => {
                const geometry = new THREE.BufferGeometry();
                const positions = new Float32Array(beltData.count * 3);
                const sizes = new Float32Array(beltData.count);
                const orbitPoints = [];

                for (let i = 0; i < beltData.count; i++) {
                    const radius = THREE.MathUtils.lerp(beltData.minRadius, beltData.maxRadius, Math.random());
                    const angle = Math.random() * Math.PI * 2;
                    const y = (Math.random() - 0.5) * (beltData.minRadius * 0.02);
                    positions[i * 3] = Math.cos(angle) * radius;
                    positions[i * 3 + 1] = y;
                    positions[i * 3 + 2] = Math.sin(angle) * radius;
                    sizes[i] = Math.random() * 2 + 1;
                    orbitPoints.push({ radius, angle, y, speed: (0.05 / Math.sqrt(radius)) });
                }

                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
                const material = new THREE.PointsMaterial({
                    color: beltData.color || 0x888888,
                    size: 2.0,
                    transparent: true,
                    opacity: beltData.opacity || 0.5,
                    sizeAttenuation: true,
                    blending: THREE.AdditiveBlending
                });

                const points = new THREE.Points(geometry, material);
                points.userData = {
                    type: beltData.minRadius < 8000 ? 'interstellar_belt' : 'interstellar_kuiper',
                    parentName: data.name,
                    orbitPoints: orbitPoints
                };
                container.add(points);
                beltMeshes.push(points);
            });
        }

        // Recurse: Planets/Sub-Stars
        if (data.planets) {
            data.planets.forEach(child => createEntity(child, data.name, container, depth + 1, systemName));
        }
    };

    // Initialize all systems
    nearbyStarSystemsData.forEach(systemData => {
        const sysGroup = new THREE.Group();
        sysGroup.position.set(systemData.position.x, systemData.position.y, systemData.position.z);

        // Root stars (Top-level nodes)
        systemData.stars.forEach(star => createEntity(star, null, sysGroup, 0, systemData.name));

        systemsGroup.add(sysGroup);
    });

    scene.add(systemsGroup);

    // Sort entities by depth for hierarchical position updates
    allEntities.sort((a, b) => a.userData.depth - b.userData.depth);

    return {
        group: systemsGroup,
        allSelectable: selectable,
        update: (simSpeed, delta) => {
            // Update entity positions relative to their parents
            allEntities.forEach(mesh => {
                const d = mesh.userData;
                const parent = d.parentName ? allEntities.find(e => e.userData.name === d.parentName) : null;
                const parentPos = parent ? parent.position : new THREE.Vector3(0, 0, 0);

                if (d.orbit) {
                    const speed = d.orbit.speed || 0.1;
                    d.angle += speed * simSpeed * delta * 0.1;

                    const r = d.orbit.radius;
                    const x = r * Math.cos(d.angle);
                    const z = r * Math.sin(d.angle);

                    if (d.orbit.inclination) {
                        const t = THREE.MathUtils.degToRad(d.orbit.inclination);
                        mesh.position.set(
                            parentPos.x + x,
                            parentPos.y - z * Math.sin(t),
                            parentPos.z + z * Math.cos(t)
                        );
                    } else {
                        mesh.position.set(parentPos.x + x, parentPos.y, parentPos.z + z);
                    }
                } else if (d.parentName && parent) {
                    // No orbit, just follow parent (if used for barycenters)
                    mesh.position.copy(parentPos);
                }
            });

            // Sync Orbit Lines
            orbitLines.forEach(line => {
                if (line.userData.parentName) {
                    const parent = allEntities.find(e => e.userData.name === line.userData.parentName);
                    if (parent) line.position.copy(parent.position);
                }
            });

            // Sync Belts
            beltMeshes.forEach(belt => {
                const parent = allEntities.find(e => e.userData.name === belt.userData.parentName);
                if (parent) {
                    belt.position.copy(parent.position);
                    const posAttr = belt.geometry.attributes.position;
                    const pts = belt.userData.orbitPoints;
                    for (let i = 0; i < pts.length; i++) {
                        const p = pts[i];
                        p.angle += p.speed * simSpeed * delta * 0.2;
                        posAttr.setXYZ(i, Math.cos(p.angle) * p.radius, p.y, Math.sin(p.angle) * p.radius);
                    }
                    posAttr.needsUpdate = true;
                }
            });
        },
        getStarMeshes: () => selectable,
        setVisible: (starVisibility, planetVisibility, beltVisible, kuiperVisible) => {
            orbitLines.forEach(line => {
                if (line.userData.type === 'star_orbit') line.visible = starVisibility;
                if (line.userData.type === 'planet_orbit') line.visible = planetVisibility;
            });
            beltMeshes.forEach(belt => {
                if (belt.userData.type === 'interstellar_belt') belt.visible = beltVisible;
                if (belt.userData.type === 'interstellar_kuiper') belt.visible = kuiperVisible;
            });
        }
    };
}
