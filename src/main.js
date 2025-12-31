import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createSolarSystem } from './objects/SolarSystem.js';
import { createStars } from './objects/Stars.js';

const scene = new THREE.Scene();
// ... (camera setup)

// Add Stars
createStars(scene);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 40000); // Massive boost for real scale
camera.position.set(0, 150, 250);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.8; // Lowered to fix overexposure
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// Allow Right-click to rotate/pan depending on user preference, 
// here we keep standard but ensure it's not blocked by our custom logic.
controls.mouseButtons = {
  LEFT: THREE.MOUSE.ROTATE,
  MIDDLE: THREE.MOUSE.DOLLY,
  RIGHT: THREE.MOUSE.PAN
};
controls.maxDistance = 15000; // Increased to see the edge of the real solar system

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.15); // Reduced to make shadows deeper
scene.add(ambientLight);

// Sun Light (Point Light)
const pointLight = new THREE.PointLight(0xffffff, 200, 500, 0.6); // Reduced intensity to avoid "washout"
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

// Hemisphere light
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.2); // Subtle fill light
scene.add(hemiLight);

// Speed Control Logic
let currentSpeed = 0.1; // Default speed set to 0.1x
const speedDisplay = document.getElementById('speed-display');

// Solar System
const solarSystem = createSolarSystem(scene);
solarSystem.setSpeedMultiplier(currentSpeed); // Now currentSpeed is defined!
speedDisplay.innerText = `速度: ${currentSpeed.toFixed(1)}x`;

// Interaction & Info Panel
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedTarget = null;

const infoPanel = document.getElementById('info-panel');
const infoTitle = document.getElementById('info-title');
const infoDesc = document.getElementById('info-description');
const infoDetails = document.getElementById('info-details');
const closeInfoBtn = document.getElementById('close-info');
const resetViewBtn = document.getElementById('reset-view');

// Interaction variables
let isMouseDown = false;
let mouseDownPos = { x: 0, y: 0 };
let isUserInteracting = false;
let targetDistance = 0;
let shouldAutoZoom = false;
let lastTargetPos = new THREE.Vector3(); // Store last frame's target position

// Handle clicks vs drags
window.addEventListener('mousedown', (event) => {
  isMouseDown = true;
  mouseDownPos = { x: event.clientX, y: event.clientY };
});

window.addEventListener('mouseup', (event) => {
  if (!isMouseDown) return;
  isMouseDown = false;

  // Calculate movement to distinguish click from drag
  const deltaX = Math.abs(event.clientX - mouseDownPos.x);
  const deltaY = Math.abs(event.clientY - mouseDownPos.y);
  const isClick = deltaX < 5 && deltaY < 5; // Pixels threshold

  if (!isClick) return; // Ignore drags

  // 0: Left, 2: Right
  if (event.button !== 0 && event.button !== 2) return;

  // If clicking UI elements, ignore
  if (infoPanel.contains(event.target) || document.getElementById('controls').contains(event.target)) return;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  // Get all clickable meshes (Planets + Satellites)
  const bodies = solarSystem.getBodies();
  const clickableMeshes = [];
  bodies.forEach(b => {
    clickableMeshes.push(b.mesh);
    b.satellites.forEach(s => clickableMeshes.push(s.mesh));
  });

  const intersects = raycaster.intersectObjects(clickableMeshes, true);

  if (intersects.length > 0) {
    const object = intersects[0].object;
    const data = object.userData;

    if (data.description) {
      selectedTarget = object;
      shouldAutoZoom = true;
      showInfo(data);

      // Initialize tracking position immediately
      selectedTarget.updateMatrixWorld(true);
      selectedTarget.getWorldPosition(lastTargetPos);
    }
  } else {
    // Clicked on blank space
    if (!infoPanel.classList.contains('hidden')) {
      hideInfo();
    } else {
      // Detach and re-center on blank space
      selectedTarget = null;

      const planeNormal = new THREE.Vector3();
      camera.getWorldDirection(planeNormal).negate();
      const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(planeNormal, controls.target);
      const intersectPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectPoint);

      if (intersectPoint) {
        controls.target.copy(intersectPoint);
      }
    }
  }
});

controls.addEventListener('start', () => {
  isUserInteracting = true;
  shouldAutoZoom = false; // Stop auto-zoom if user starts any manual interaction
});

// Also detect wheel specifically as it might be very fast
window.addEventListener('wheel', () => {
  shouldAutoZoom = false;
}, { passive: true });

controls.addEventListener('end', () => {
  isUserInteracting = false;
});

// Context menu prevention
window.addEventListener('contextmenu', (e) => {
  if (!document.getElementById('controls').contains(e.target)) {
    e.preventDefault();
  }
});

function hideInfo() {
  infoPanel.classList.add('hidden');
  // We no longer reset selectedTarget or controls.target to the Sun,
  // allowing the camera to continue tracking the planet even after UI is hidden.
}

closeInfoBtn.addEventListener('click', () => {
  hideInfo();
});

resetViewBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (selectedTarget) {
    shouldAutoZoom = true;
  }
});

function showInfo(data) {
  // Update Title: English Name   Chinese Name
  infoTitle.innerText = `${data.name}   ${data.nameCH || ''}`;
  infoDesc.innerText = data.description || "暫無介紹。";

  infoDetails.innerHTML = '';

  // Standardized order of detail fields
  const labels = ["質量", "體積", "直徑", "光度", "核心溫度", "表面溫度"];

  labels.forEach(label => {
    const value = (data.details && data.details[label]) ? data.details[label] : "N/A";
    const item = document.createElement('div');
    item.className = 'info-detail-item';
    item.innerHTML = `
      <span class="info-detail-label">${label}</span>
      <span class="info-detail-value">${value}</span>
    `;
    infoDetails.appendChild(item);
  });

  infoPanel.classList.remove('hidden');
}

document.getElementById('slow').addEventListener('click', () => {
  currentSpeed = Math.max(0.1, currentSpeed - 0.5);
  updateSpeed();
});

document.getElementById('reset').addEventListener('click', () => {
  currentSpeed = 1.0;
  updateSpeed();
});

document.getElementById('fast').addEventListener('click', () => {
  currentSpeed += 0.5;
  updateSpeed();
});

let isPaused = false;
let savedSpeedBeforePause = 0.1;
const pauseBtn = document.getElementById('pause');
const pauseIconContainer = document.getElementById('pause-icon');

// Refined BOLD icons with better vertical centering (adjusted path y coordinates)
const PAUSE_SVG = '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none"><path d="M9 18V8M15 18V8"/></svg>';
const PLAY_SVG = '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/></svg>';

pauseBtn.addEventListener('click', () => {
  if (!isPaused) {
    savedSpeedBeforePause = currentSpeed;
    currentSpeed = 0;
    isPaused = true;
    pauseIconContainer.innerHTML = PLAY_SVG;
  } else {
    currentSpeed = savedSpeedBeforePause === 0 ? 0.1 : savedSpeedBeforePause;
    isPaused = false;
    pauseIconContainer.innerHTML = PAUSE_SVG;
  }
  updateSpeed();
});

function updateSpeed() {
  solarSystem.setSpeedMultiplier(currentSpeed);
  speedDisplay.innerText = `${currentSpeed.toFixed(1)}x`;

  if (currentSpeed > 0 && isPaused) {
    isPaused = false;
    pauseIconContainer.innerHTML = PAUSE_SVG;
  }
}

// View Mode Toggle logic
const modeArtisticBtn = document.getElementById('mode-artistic');
const modeRealBtn = document.getElementById('mode-real');

modeArtisticBtn.addEventListener('click', () => {
  if (modeArtisticBtn.classList.contains('active')) return;
  modeArtisticBtn.classList.add('active');
  modeRealBtn.classList.remove('active');
  solarSystem.setViewMode(false);

  if (selectedTarget) {
    shouldAutoZoom = true;
  } else {
    // Reset to default overview position
    camera.position.set(0, 150, 250);
    camera.lookAt(0, 0, 0);
  }
});

modeRealBtn.addEventListener('click', () => {
  if (modeRealBtn.classList.contains('active')) return;
  modeRealBtn.classList.add('active');
  modeArtisticBtn.classList.remove('active');
  solarSystem.setViewMode(true);

  if (selectedTarget) {
    shouldAutoZoom = true;
  }
});

// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // 1. Move all celestial bodies (Planets then Satellites)
  if (solarSystem) {
    solarSystem.update();
  }

  // 2. Determine tracking state
  const isInfoPanelOpen = infoPanel && !infoPanel.classList.contains('hidden');

  // When focused (info panel open), we disable Panning and make Right click = Rotate
  // to ensure the celestial body stays centered no matter what.
  if (isInfoPanelOpen) {
    controls.enablePan = false;
    controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
  } else {
    controls.enablePan = true;
    controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
  }

  // 3. Absolute Tracking Logic with Delta Movement
  if (selectedTarget) {
    selectedTarget.updateMatrixWorld(true);
    const currentWorldPos = new THREE.Vector3();
    selectedTarget.getWorldPosition(currentWorldPos);

    if (isInfoPanelOpen) {
      // Calculate how much the target moved since the last frame
      const deltaMovement = currentWorldPos.clone().sub(lastTargetPos);

      // Move the camera by the SAME amount to stay synchronized
      camera.position.add(deltaMovement);

      // Update controls target
      // SHIFT logic: on mobile/tablet, we want the planet to stay in the upper part of screen
      const visualTarget = currentWorldPos.clone();
      if (window.innerWidth <= 1100) {
        // If panel is open on small screen, offset the planet "upwards" in screen space
        // by moving the camera focus point slightly "below" the actual planet center
        const up = new THREE.Vector3(0, 1, 0);
        // Scale offset relative to target radius
        visualTarget.sub(up.multiplyScalar(selectedTarget.userData.radius * 2.5));
      }
      controls.target.copy(visualTarget);

      // Initial auto-zoom approach
      if (shouldAutoZoom) {
        // Target dynamic radius based on current mode
        const isReal = solarSystem.isRealScale();
        const currentRadius = isReal ? (selectedTarget.userData.realScaleRadius || selectedTarget.userData.radius) : selectedTarget.userData.radius;

        const multiplier = window.innerWidth <= 1100 ? 10 : 6;
        const zoomDist = currentRadius * multiplier;
        const currentDist = camera.position.distanceTo(currentWorldPos);
        const newDist = THREE.MathUtils.lerp(currentDist, zoomDist, 0.05);

        const direction = camera.position.clone().sub(currentWorldPos).normalize();
        camera.position.copy(currentWorldPos.clone().add(direction.multiplyScalar(newDist)));

        if (Math.abs(currentDist - zoomDist) < (currentRadius * 0.1)) {
          shouldAutoZoom = false;
        }
      }
    } else if (!isUserInteracting) {
      // Smooth follow when panel is closed
      controls.target.lerp(currentWorldPos, 0.1);
    }

    // Always update last known position for the next frame
    lastTargetPos.copy(currentWorldPos);
  }

  // 4. Update the controls to match the target and camera position
  const prevTarget = controls.target.clone();
  controls.update();

  // 5. If panel is closed and user panned away, stop tracking
  if (!isInfoPanelOpen && isUserInteracting) {
    if (controls.target.distanceTo(prevTarget) > 0.01) {
      selectedTarget = null;
    }
  }

  renderer.render(scene, camera);
}

animate();
