import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createSolarSystem } from './objects/SolarSystem.js';
import { createStars } from './objects/Stars.js';
import { createSpaceship } from './objects/Spaceship.js';
import { createAsteroidBelt } from './objects/AsteroidBelt.js';
import { createKuiperBelt } from './objects/KuiperBelt.js';
import { createOortCloud } from './objects/OortCloud.js';
import { solarSystemData } from './data/solarSystemData.js';

const scene = new THREE.Scene();
// ... (camera setup)

// Add Stars
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500000); // Lower FOV to reduce edge distortion
const renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance while keeping sharpness
document.getElementById('app').appendChild(renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.8;

// Initial camera setup
camera.position.set(0, 60, 450); // Improved initial angle
camera.lookAt(0, 0, 0);

// Loading Manager implementation
const loadingScreen = document.getElementById('loading-screen');
const loadingBar = document.getElementById('loading-bar');
const loadingStatus = document.getElementById('loading-status');

// Build texture to Chinese name map for a better loading experience
const textureToNameMap = {
  'starmap_8k.jpg': '深空背景',
  'saturn_ring_v3.png': '土星環'
};

const buildMap = (dataArray) => {
  dataArray.forEach(item => {
    if (item.texture) textureToNameMap[item.texture] = item.nameCH || item.name;
    if (item.satellites) buildMap(item.satellites);
  });
};
buildMap(solarSystemData);

const loadingManager = new THREE.LoadingManager();

loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
  const progress = (itemsLoaded / itemsTotal) * 100;
  loadingBar.style.width = progress + '%';

  // Extract filename from URL
  const fileName = url.split('/').pop().split('?')[0];
  const displayName = textureToNameMap[fileName] || fileName;

  loadingStatus.innerText = `正在探索 ${displayName}`;
};

loadingManager.onLoad = () => {
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
  }, 500);
};

loadingManager.onError = (url) => {
  console.error('There was an error loading ' + url);
  loadingStatus.innerText = '部分資源讀取失敗，正在嘗試繼續...';
};

// Add Stars
const stars = createStars(scene, loadingManager);

// Add Ship
const ship = createSpaceship(scene);
ship.mesh.visible = false; // Hide until pilot mode enabled

// Controls init first before usage
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0, 0); // Explicitly center Sun

// Handle window resize properly
const handleResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

window.addEventListener('resize', handleResize);
window.addEventListener('orientationchange', () => setTimeout(handleResize, 200));

// Initial correct sizing
handleResize();
controls.update(); // Sync everything once after resizetial correct sizing

// Allow Right-click to rotate/pan depending on user preference, 
// here we keep standard but ensure it's not blocked by our custom logic.
controls.mouseButtons = {
  LEFT: THREE.MOUSE.ROTATE,
  MIDDLE: THREE.MOUSE.DOLLY,
  RIGHT: THREE.MOUSE.PAN
};
controls.maxDistance = 100000; // Increased to allow deep exploration of the system

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.15); // Reduced to make shadows deeper
scene.add(ambientLight);

// Sun Light (Point Light)
const pointLight = new THREE.PointLight(0xffffff, 300, 15000, 1.2); // Massive boost for real scale
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

// Hemisphere light
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.2); // Subtle fill light
scene.add(hemiLight);

// Speed Control Logic
let currentSpeed = 0.1; // Default speed set to 0.1x
const speedDisplay = document.getElementById('speed-display');

// Solar System
const solarSystem = createSolarSystem(scene, loadingManager);
solarSystem.setSpeedMultiplier(currentSpeed); // Now currentSpeed is defined!
speedDisplay.innerText = `${currentSpeed.toFixed(1)}x`;

// Asteroid Belt
const asteroidBelt = createAsteroidBelt(scene);

// Kuiper Belt
const kuiperBelt = createKuiperBelt(scene);

// Oort Cloud
const oortCloud = createOortCloud(scene);

// Orbit Visibility State & Toggles
let planetOrbitsVisible = true;
let satOrbitsVisible = false;
let manmadeOrbitsVisible = false; // Hidden by default v2.2.1
let dwarfOrbitsVisible = false;
let candidateOrbitsVisible = false;
let interstellarOrbitsVisible = false;
let asteroidOrbitsVisible = false;
let cometOrbitsVisible = false;
let beltVisible = true;
let kuiperVisible = true;
let oortVisible = false;

// Function to sync UI and 3D states
const syncOrbitVisibility = () => {
  if (solarSystem) {
    solarSystem.setOrbitsVisibleByType('planet', planetOrbitsVisible);
    solarSystem.setOrbitsVisibleByType('star', planetOrbitsVisible);
    solarSystem.setOrbitsVisibleByType('dwarf_planet', dwarfOrbitsVisible);
    solarSystem.setOrbitsVisibleByType('dwarf_planet_candidate', candidateOrbitsVisible);
    solarSystem.setOrbitsVisibleByType('interstellar', interstellarOrbitsVisible);
    solarSystem.setOrbitsVisibleByType('asteroid', asteroidOrbitsVisible);
    solarSystem.setOrbitsVisibleByType('comet', cometOrbitsVisible);
    solarSystem.setSatOrbitsVisibleByType('satellite', satOrbitsVisible);
    solarSystem.setSatOrbitsVisibleByType('space_station', manmadeOrbitsVisible);
  }
  if (asteroidBelt) {
    asteroidBelt.setVisible(beltVisible);
  }
  if (kuiperBelt) {
    kuiperBelt.setVisible(kuiperVisible);
  }
  if (oortCloud) {
    oortCloud.setVisible(oortVisible);
  }
};

// Initial sync of orbit visibility settings
syncOrbitVisibility();

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

// Use Pointer Events for better cross-device (Touch/Mouse) support
window.addEventListener('pointerdown', (event) => {
  isMouseDown = true;
  mouseDownPos = { x: event.clientX, y: event.clientY };
});

window.addEventListener('pointerup', (event) => {
  if (!isMouseDown) return;
  isMouseDown = false;

  const deltaX = Math.abs(event.clientX - mouseDownPos.x);
  const deltaY = Math.abs(event.clientY - mouseDownPos.y);

  // Distinguish click from drag
  const clickThreshold = window.innerWidth <= 1100 ? 15 : 5;
  if (deltaX > clickThreshold || deltaY > clickThreshold) return;

  // 0: Left, 2: Right, 5: Touch (for pointerType)
  if (event.pointerType === 'mouse' && event.button !== 0 && event.button !== 2) return;

  handleInteraction(event.clientX, event.clientY, event.target);
});

// Dedicated Touch Support is already handled by Pointer Events above. 
// Redundant touchstart/touchend removed to prevent double-firing interaction logic on mobile.

function handleInteraction(clientX, clientY, target) {
  // Click-through logic: Only block if clicking interactive UI components
  // We check if the target is a button, input, or inside a known interactive panel
  const isInteractivePanel = target.closest('#controls') ||
    target.closest('#sub-menu') ||
    target.closest('#info-panel') ||
    target.closest('.search-result-item') ||
    target.tagName === 'BUTTON' ||
    target.tagName === 'INPUT' ||
    target.tagName === 'A';

  if (isInteractivePanel || isSearchSelecting) {
    if (isSearchSelecting) {
      // Clear flag once interaction starts to allow the next selection
      // but only after a buffer to prevent bubble-through deselects
    }
    return;
  }

  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

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
    // Find the closest ancestor that has our data (useful for clicking rings)
    let selectedObject = null;
    let selectedData = null;

    for (let i = 0; i < intersects.length; i++) {
      let current = intersects[i].object;
      while (current) {
        if (current.userData && current.userData.description) {
          selectedObject = current;
          selectedData = current.userData;
          break;
        }
        current = current.parent;
      }
      if (selectedObject) break;
    }

    if (selectedData) {
      selectBody(selectedObject);
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
}

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
  if (e.pointerType === 'mouse') { // Only prevent for mouse
    if (!document.getElementById('controls').contains(e.target) && !document.getElementById('search-results').contains(e.target)) {
      e.preventDefault();
    }
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

// Speed Control Long Press Logic
let speedTimer = null;
let speedRepeat = null;

const startSpeedChange = (isIncreasing) => {
  // Clear any existing timers first to prevent accumulation
  stopSpeedChange();

  const change = () => {
    if (isIncreasing) {
      if (currentSpeed < 0.1) currentSpeed = 0.1;
      else if (currentSpeed < 0.5) currentSpeed = 0.5;
      else currentSpeed += 0.5;
    } else {
      if (currentSpeed > 0.5) currentSpeed -= 0.5;
      else if (currentSpeed > 0.1) currentSpeed = 0.1;
      else currentSpeed = 0;
    }
    updateSpeed();
  };

  change(); // Initial click

  speedTimer = setTimeout(() => {
    speedRepeat = setInterval(change, 100);
  }, 2000); // 2 seconds delay
};

const stopSpeedChange = () => {
  clearTimeout(speedTimer);
  clearInterval(speedRepeat);
};

const slowBtn = document.getElementById('slow');
const fastBtn = document.getElementById('fast');

slowBtn.addEventListener('mousedown', () => startSpeedChange(false));
fastBtn.addEventListener('mousedown', () => startSpeedChange(true));

slowBtn.addEventListener('mouseup', stopSpeedChange);
fastBtn.addEventListener('mouseup', stopSpeedChange);
window.addEventListener('mouseup', stopSpeedChange);
slowBtn.addEventListener('mouseleave', stopSpeedChange);
fastBtn.addEventListener('mouseleave', stopSpeedChange);

// Support for Mobile Touch
slowBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startSpeedChange(false); });
fastBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startSpeedChange(true); });
slowBtn.addEventListener('touchend', stopSpeedChange);
fastBtn.addEventListener('touchend', stopSpeedChange);
slowBtn.addEventListener('touchcancel', stopSpeedChange);
fastBtn.addEventListener('touchcancel', stopSpeedChange);

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

// View Mode & Menu Toggle logic
const menuToggle = document.getElementById('menu-toggle');
const subMenu = document.getElementById('sub-menu');
const modeArtisticBtn = document.getElementById('mode-artistic');
const modeRealBtn = document.getElementById('mode-real');
const toggleOrbitsBtn = document.getElementById('toggle-orbits');

const handleMenuToggle = (e) => {
  e.stopPropagation();
  subMenu.classList.toggle('hidden');
};

menuToggle.addEventListener('click', handleMenuToggle);
menuToggle.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Prevent ghost clicks
  handleMenuToggle(e);
}, { passive: false });

// Close sub-menu when clicking outside
window.addEventListener('click', (e) => {
  if (!subMenu.classList.contains('hidden') && !subMenu.contains(e.target) && e.target !== menuToggle) {
    subMenu.classList.add('hidden');
  }
});

const toggleManmadeBtn = document.getElementById('toggle-manmade-orbit');
const togglePlanetBtn = document.getElementById('toggle-planet-orbit');
const toggleSatBtn = document.getElementById('toggle-sat-orbit');
const toggleDwarfBtn = document.getElementById('toggle-dwarf-orbit');
const toggleCandidateBtn = document.getElementById('toggle-candidate-orbit');
const toggleInterBtn = document.getElementById('toggle-interstellar-orbit');
const toggleAsteroidBtn = document.getElementById('toggle-asteroid-orbit');
const toggleCometBtn = document.getElementById('toggle-comet-orbit');
const toggleBeltBtn = document.getElementById('toggle-belt');
const toggleKuiperBtn = document.getElementById('toggle-kuiper');
const toggleOortBtn = document.getElementById('toggle-oort');

toggleManmadeBtn.addEventListener('click', () => {
  manmadeOrbitsVisible = !manmadeOrbitsVisible;
  toggleManmadeBtn.classList.toggle('active', manmadeOrbitsVisible);
  syncOrbitVisibility();
});

togglePlanetBtn.addEventListener('click', () => {
  planetOrbitsVisible = !planetOrbitsVisible;
  togglePlanetBtn.classList.toggle('active', planetOrbitsVisible);
  syncOrbitVisibility();
});

toggleSatBtn.addEventListener('click', () => {
  satOrbitsVisible = !satOrbitsVisible;
  toggleSatBtn.classList.toggle('active', satOrbitsVisible);
  syncOrbitVisibility();
});

toggleDwarfBtn.addEventListener('click', () => {
  dwarfOrbitsVisible = !dwarfOrbitsVisible;
  toggleDwarfBtn.classList.toggle('active', dwarfOrbitsVisible);
  syncOrbitVisibility();
});

toggleCandidateBtn.addEventListener('click', () => {
  candidateOrbitsVisible = !candidateOrbitsVisible;
  toggleCandidateBtn.classList.toggle('active', candidateOrbitsVisible);
  syncOrbitVisibility();
});

toggleInterBtn.addEventListener('click', () => {
  interstellarOrbitsVisible = !interstellarOrbitsVisible;
  toggleInterBtn.classList.toggle('active', interstellarOrbitsVisible);
  syncOrbitVisibility();
});

toggleAsteroidBtn.addEventListener('click', () => {
  asteroidOrbitsVisible = !asteroidOrbitsVisible;
  toggleAsteroidBtn.classList.toggle('active', asteroidOrbitsVisible);
  syncOrbitVisibility();
});

toggleBeltBtn.addEventListener('click', () => {
  beltVisible = !beltVisible;
  toggleBeltBtn.classList.toggle('active', beltVisible);
  syncOrbitVisibility();
});

toggleKuiperBtn.addEventListener('click', () => {
  kuiperVisible = !kuiperVisible;
  toggleKuiperBtn.classList.toggle('active', kuiperVisible);
  syncOrbitVisibility();
});

toggleOortBtn.addEventListener('click', () => {
  oortVisible = !oortVisible;
  toggleOortBtn.classList.toggle('active', oortVisible);
  syncOrbitVisibility();
});

toggleOortBtn.addEventListener('click', () => {
  oortVisible = !oortVisible;
  toggleOortBtn.classList.toggle('active', oortVisible);
  syncOrbitVisibility();
});

// For now, let's ensure the toggle-sat-orbit is not active in HTML (checked)


modeArtisticBtn.addEventListener('click', () => {
  if (modeArtisticBtn.classList.contains('active')) return;
  modeArtisticBtn.classList.add('active');
  modeRealBtn.classList.remove('active');
  solarSystem.setViewMode(false);
  if (asteroidBelt) asteroidBelt.setViewMode(false);
  if (kuiperBelt) kuiperBelt.setViewMode(false);
  if (oortCloud) oortCloud.setViewMode(false);

  if (selectedTarget) {
    shouldAutoZoom = true;
  } else {
    camera.position.set(0, 150, 250);
    camera.lookAt(0, 0, 0);
  }
});

modeRealBtn.addEventListener('click', () => {
  if (modeRealBtn.classList.contains('active')) return;
  modeRealBtn.classList.add('active');
  modeArtisticBtn.classList.remove('active');
  solarSystem.setViewMode(true);
  if (asteroidBelt) asteroidBelt.setViewMode(true);
  if (kuiperBelt) kuiperBelt.setViewMode(true);
  if (oortCloud) oortCloud.setViewMode(true);

  if (selectedTarget) {
    shouldAutoZoom = true;
  }
});

// Search functionality
const searchInput = document.getElementById('planet-search');
const searchResults = document.getElementById('search-results');
const clearSearchBtn = document.getElementById('clear-search');
const resetToSunBtn = document.getElementById('reset-to-sun');
let isSearchSelecting = false;

const bodyTypeMap = {
  'planet': '行星',
  'star': '恆星',
  'dwarf_planet': '矮行星',
  'dwarf_planet_candidate': '候選/TNO',
  'asteroid': '小行星',
  'interstellar': '星際天體',
  'satellite': '衛星',
  'comet': '彗星',
  'space_station': '人造物體'
};

function selectBody(bodyMesh, isFromSearch = false) {
  selectedTarget = bodyMesh;
  const data = bodyMesh.userData;

  shouldAutoZoom = true;
  showInfo(data);

  // Initialize tracking
  selectedTarget.updateMatrixWorld(true);
  selectedTarget.getWorldPosition(lastTargetPos);

  if (isFromSearch) {
    searchInput.blur();
    // Re-trigger auto-zoom after keyboard closes and viewport stabilizes
    setTimeout(() => {
      if (selectedTarget === bodyMesh) {
        shouldAutoZoom = true;
        handleResize(); // Sync viewport
      }
    }, 450);
  } else if (!selectedTarget || selectedTarget !== bodyMesh) {
    // Standard click selection - ensure viewport is synced
    handleResize();

    // Clear search UI if active but not from search selection
    searchResults.classList.add('hidden');
    searchResults.innerHTML = '';
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
  }
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  clearSearchBtn.classList.toggle('hidden', query === '');

  if (query.length < 1) {
    searchResults.innerHTML = '';
    searchResults.classList.add('hidden');
    return;
  }

  const bodies = solarSystem.getBodies();
  const allTargets = [];
  bodies.forEach(b => {
    allTargets.push({ mesh: b.mesh, data: b.data, type: b.data.type });
    b.satellites.forEach(s => {
      allTargets.push({ mesh: s.mesh, data: s.data, type: 'satellite' });
    });
  });

  const matches = allTargets.filter(t =>
    t.data.name.toLowerCase().includes(query) ||
    (t.data.nameCH && t.data.nameCH.includes(query))
  );

  if (matches.length > 0) {
    searchResults.innerHTML = matches.map(m => `
      <div class="search-result-item" data-id="${m.data.name}">
        <div class="result-name">${m.data.nameCH || m.data.name}</div>
        <div class="result-type">${bodyTypeMap[m.type] || m.type}</div>
      </div>
    `).join('');

    searchResults.classList.remove('hidden');

    // Add click/touch listeners to items
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      const handleSelect = (e) => {
        e.stopPropagation();
        e.preventDefault();

        isSearchSelecting = true;
        const targetId = item.getAttribute('data-id');
        const target = allTargets.find(t => t.data.name === targetId);

        if (target) {
          selectBody(target.mesh, true);
        }

        // Delay clearing results to fulfill touch event cycle
        // and prevent 'handleInteraction' from thinking it clicked on blank space
        setTimeout(() => {
          searchResults.classList.add('hidden');
          searchResults.innerHTML = '';
          searchInput.value = '';
          clearSearchBtn.classList.add('hidden');
          isSearchSelecting = false;
        }, 800);
      };

      item.addEventListener('mousedown', handleSelect);
      item.addEventListener('touchstart', handleSelect, { passive: false });
    });
  } else {
    searchResults.innerHTML = '<div class="search-result-item">無符合天體</div>';
    searchResults.classList.remove('hidden');
  }
});

clearSearchBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  searchInput.value = '';
  clearSearchBtn.classList.add('hidden');
  searchResults.innerHTML = '';
  searchResults.classList.add('hidden');
});

resetToSunBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const bodies = solarSystem.getBodies();
  const sunBody = bodies.find(b => b.data.name === 'Sun');
  if (sunBody) selectBody(sunBody.mesh);
});

// Close search if clicking elsewhere
window.addEventListener('mousedown', (e) => {
  if (!document.getElementById('search-container').contains(e.target)) {
    searchResults.classList.add('hidden');
  }
});

// Pilot Mode Variable and Listeners
let isPilotMode = false;
const togglePilotBtn = document.getElementById('toggle-pilot');
const flightHud = document.getElementById('flight-hud');

togglePilotBtn.addEventListener('click', () => {
  isPilotMode = !isPilotMode;
  togglePilotBtn.classList.toggle('active', isPilotMode);
  ship.mesh.visible = isPilotMode;
  flightHud.classList.toggle('hidden', !isPilotMode);

  // Close the menu automatically
  subMenu.classList.add('hidden');

  if (isPilotMode) {
    controls.enabled = false;
    // Enter Pointer Lock on Desktop for better control
    if (!('ontouchstart' in window)) {
      renderer.domElement.requestPointerLock();
    }

    if (selectedTarget) {
      const targetPos = new THREE.Vector3();
      selectedTarget.getWorldPosition(targetPos);

      // Calculate a safe distance based on target's radius
      const isReal = solarSystem.isRealScale();
      const radius = isReal ? (selectedTarget.userData.realScaleRadius || selectedTarget.userData.radius) : selectedTarget.userData.radius;
      const spawnDist = radius * 2 + 50;

      ship.mesh.position.copy(targetPos).add(new THREE.Vector3(0, radius + 20, spawnDist));
    } else {
      // Default position if nothing selected - further from sun
      ship.mesh.position.set(0, 20, 300);
    }

    // Initialize Modern 3D Orbit Camera Values
    window._camOrbit = {
      theta: Math.PI, // Start BEHIND the ship (180 degrees)
      phi: Math.PI / 2.2, // Slightly above horizontal
      radius: 40
    };

    // Reset ship state for clean start
    ship.mesh.quaternion.set(0, 0, 0, 1); // Face standard forward (+Z)
    ship.velocity.set(0, 0, 0);
    ship.rotationVelocity.set(0, 0, 0);

    updatePilotCamera();
  } else {
    controls.enabled = true;
    if (document.pointerLockElement === renderer.domElement) {
      document.exitPointerLock();
    }
  }
});

// Cursor lock click handler
renderer.domElement.addEventListener('click', () => {
  if (isPilotMode && !('ontouchstart' in window)) {
    renderer.domElement.requestPointerLock();
  }
});

// Controls logic (Desktop & Mobile)
const keys = {};
window.addEventListener('keydown', (e) => keys[e.code] = true);
window.addEventListener('keyup', (e) => keys[e.code] = false);

// Joystick Logic
const joystickStick = document.getElementById('joystick-stick');
const joystickBase = document.getElementById('joystick-base');
const thrustBtn = document.getElementById('thrust-up');
let joystickDelta = { x: 0, y: 0 };
let isThrusting = false;

joystickBase.addEventListener('touchstart', handleJoystickMove);
joystickBase.addEventListener('touchmove', handleJoystickMove);
joystickBase.addEventListener('touchend', () => {
  joystickStick.style.transform = 'translate(-50%, -50%)';
  joystickDelta = { x: 0, y: 0 };
});

function handleJoystickMove(e) {
  const touch = e.touches[0];
  const rect = joystickBase.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = touch.clientX - centerX;
  const dy = touch.clientY - centerY;
  const dist = Math.min(Math.sqrt(dx * dx + dy * dy), 50);
  const angle = Math.atan2(dy, dx);

  const moveX = Math.cos(angle) * dist;
  const moveY = Math.sin(angle) * dist;

  joystickStick.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  joystickDelta = { x: moveX / 50, y: moveY / 50 };
}

thrustBtn.addEventListener('mousedown', () => isThrusting = true);
thrustBtn.addEventListener('mouseup', () => isThrusting = false);
thrustBtn.addEventListener('touchstart', (e) => { e.preventDefault(); isThrusting = true; });
thrustBtn.addEventListener('touchend', () => isThrusting = false);

// Mouse Rotation Logic (Camera Movement Speed)
let mouseSensitivity = 0.000025; // Default matched to slider value 0.1 (0.1 * 0.00025)
const sensitivityRange = document.getElementById('sensitivity-range');
sensitivityRange.addEventListener('input', (e) => {
  // Mapping 0.1 - 2.0 to 0.000025 - 0.0005
  mouseSensitivity = parseFloat(e.target.value) * 0.00025;
});

window.addEventListener('mousemove', (e) => {
  if (isPilotMode && document.pointerLockElement === renderer.domElement) {
    // 1. Mouse rotates the CAMERA ORBIT, not the ship
    const sensitivity = mouseSensitivity * 6; // Adjusted for snappy orbiting
    window._camOrbit.theta -= e.movementX * sensitivity;
    window._camOrbit.phi -= e.movementY * sensitivity;

    // Clamp vertical angle to avoid flipping over the top
    window._camOrbit.phi = Math.max(0.1, Math.min(Math.PI - 0.1, window._camOrbit.phi));
  }
});

function handleFlightInputs() {
  if (!isPilotMode) return;

  // Directions relative to orbit camera
  const camQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(window._camOrbit.phi - Math.PI / 2, window._camOrbit.theta, 0, 'YXZ'));
  const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(camQuat);
  const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camQuat);

  // 1. Movement Inputs
  let moveDir = new THREE.Vector3(0, 0, 0);
  if (keys['KeyW']) moveDir.add(forward);
  if (keys['KeyS']) moveDir.sub(forward);
  if (keys['KeyA']) moveDir.sub(right); // In 3D explorer mode, A/D is usually lateral or turn
  if (keys['KeyD']) moveDir.add(right);

  // Apply Impulse
  if (moveDir.length() > 0) {
    moveDir.normalize();
    const thrustPower = keys['Space'] ? ship.thrust * 3 : ship.thrust;
    ship.velocity.add(moveDir.multiplyScalar(thrustPower));

    // 2. Smoothly rotate ship to face MOVEMENT direction
    // This is the "bow aligns with movement" part
    const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), moveDir);
    ship.mesh.quaternion.slerp(targetQuaternion, 0.1);
  }

  // Mobile Joytick Mapping
  if (joystickDelta.x !== 0 || joystickDelta.y !== 0) {
    const joyMove = forward.clone().multiplyScalar(-joystickDelta.y).add(right.clone().multiplyScalar(joystickDelta.x));
    ship.velocity.add(joyMove.multiplyScalar(ship.thrust));

    if (joyMove.length() > 0) {
      const targetQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), joyMove.normalize());
      ship.mesh.quaternion.slerp(targetQuat, 0.1);
    }
  }

  // 3. Update Physics & Camera
  ship.mesh.position.add(ship.velocity);
  ship.velocity.multiplyScalar(ship.friction);

  updatePilotCamera();
}

function updatePilotCamera() {
  // Spherical Coordinates to Cartesian
  const x = window._camOrbit.radius * Math.sin(window._camOrbit.phi) * Math.sin(window._camOrbit.theta);
  const y = window._camOrbit.radius * Math.cos(window._camOrbit.phi);
  const z = window._camOrbit.radius * Math.sin(window._camOrbit.phi) * Math.cos(window._camOrbit.theta);

  const desiredPos = ship.mesh.position.clone().add(new THREE.Vector3(x, y, z));

  // High damping for translation, instant for orientation
  camera.position.lerp(desiredPos, 0.2);
  camera.lookAt(ship.mesh.position);
}


// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
// ------------------------------------------------------------------
// UI Click-Through Prevention
// Stop propagation of events from UI elements to background (OrbitControls)
// ------------------------------------------------------------------
const uiElements = ['controls', 'sub-menu', 'info-panel', 'flight-hud'];
uiElements.forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;

  // Prevent mouse & touch events from reaching the 3D canvas
  const blocker = (e) => e.stopPropagation();

  // Simple but effective blocking
  ['mousedown', 'mouseup', 'click', 'dblclick', 'wheel', 'touchstart', 'touchend', 'touchmove'].forEach(evtType => {
    el.addEventListener(evtType, blocker);
  });
});

const clock = new THREE.Clock();

// Reusable vectors for performance (to avoid per-frame GC churn)
const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _v4 = new THREE.Vector3();
const _v5 = new THREE.Vector3();


function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  const cappedDelta = Math.min(delta, 0.1); // Prevent huge jumps during tab switch

  // 1. Move all celestial bodies (Planets then Satellites)
  if (solarSystem) {
    solarSystem.update(cappedDelta);
  }
  if (asteroidBelt) {
    asteroidBelt.update(currentSpeed, cappedDelta);
  }
  if (kuiperBelt) {
    kuiperBelt.update(currentSpeed, cappedDelta);
  }
  if (oortCloud) {
    oortCloud.update(currentSpeed, cappedDelta);
  }

  // Handle Space Flight
  if (isPilotMode) {
    handleFlightInputs(cappedDelta);
    updatePilotMode(cappedDelta);
  }

  // Update background to follow camera (infinite depth)
  if (stars && stars.update) {
    stars.update(camera.position, cappedDelta);
  }

  // 2. Determine tracking state
  if (!isPilotMode) {
    const isInfoPanelOpen = infoPanel && !infoPanel.classList.contains('hidden');

    if (isInfoPanelOpen) {
      controls.enablePan = false;
      controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
    } else {
      controls.enablePan = true;
      controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
    }

    if (selectedTarget) {
      selectedTarget.updateMatrixWorld(true);
      // Use reusable vector for world position
      selectedTarget.getWorldPosition(_v1);

      // Initial auto-zoom
      if (shouldAutoZoom) {
        const isReal = solarSystem.isRealScale();
        const currentRadius = isReal ? (selectedTarget.userData.realScaleRadius || selectedTarget.userData.radius) : selectedTarget.userData.radius;
        const multiplier = window.innerWidth <= 480 ? 18 : (window.innerWidth <= 1100 ? 12 : 6);
        const zoomDist = currentRadius * multiplier;
        const currentDist = camera.position.distanceTo(_v1);
        const newDist = THREE.MathUtils.lerp(currentDist, zoomDist, 0.05);

        // direction = camera.position - currentWorldPos
        _v2.subVectors(camera.position, _v1).normalize();
        // newPos = currentWorldPos + direction * newDist
        _v3.copy(_v1).add(_v2.multiplyScalar(newDist));
        camera.position.copy(_v3);

        if (Math.abs(currentDist - zoomDist) < (currentRadius * 0.1)) shouldAutoZoom = false;
      }

      if (isInfoPanelOpen) {
        // deltaMovement = currentWorldPos - lastTargetPos
        _v2.subVectors(_v1, lastTargetPos);
        camera.position.add(_v2);

        // visualTarget = currentWorldPos
        _v3.copy(_v1);

        // Mobile/Tablet Offsetting to clear UI
        if (window.innerWidth <= 1100) {
          const isPhone = window.innerWidth <= 480;
          const isLandscape = window.innerWidth > window.innerHeight;

          // camDir = camera.position - currentWorldPos
          _v2.subVectors(camera.position, _v1).normalize();
          // camRight = (0,1,0) x camDir
          _v4.set(0, 1, 0).cross(_v2).normalize();
          // camUp = camDir x camRight
          _v5.crossVectors(_v2, _v4).normalize();

          const isReal = solarSystem.isRealScale();
          const currentRadius = isReal ? (selectedTarget.userData.realScaleRadius || selectedTarget.userData.radius) : selectedTarget.userData.radius;
          const multiplier = isPhone ? 22 : 12;
          const zoomDist = currentRadius * multiplier;

          if (isLandscape) {
            // Landscape: Offset to the LEFT of the screen (move target RIGHT relative to cam)
            // Factor 0.18 is chosen to balance the 280px wide panel
            const hShiftFactor = 0.18;
            _v3.add(_v4.multiplyScalar(zoomDist * hShiftFactor));
          } else {
            // Portrait: Offset to the TOP of the screen (move target DOWN relative to cam)
            const vShiftFactor = isPhone ? -0.12 : -0.08;
            _v3.add(_v5.multiplyScalar(zoomDist * vShiftFactor));
          }
        }

        controls.target.copy(_v3);
      } else if (!isUserInteracting && selectedTarget) {
        controls.target.lerp(_v1, 0.1);
      }
      lastTargetPos.copy(_v1);
    }
  }

  // 4. Update controls
  if (!isPilotMode) {
    const prevTarget = controls.target.clone();
    controls.update();
    const isInfoPanelOpen = infoPanel && !infoPanel.classList.contains('hidden');
    if (!isInfoPanelOpen && isUserInteracting) {
      if (controls.target.distanceTo(prevTarget) > 0.01) selectedTarget = null;
    }
  }

  renderer.render(scene, camera);
}

animate();

// Debug Expose
window.scene = scene;
window.ship = ship;
window.solarSystem = solarSystem;
