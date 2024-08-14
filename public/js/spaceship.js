// Spaceship.js

document.addEventListener('DOMContentLoaded', () => {
    // Set up Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background

    // Attach the renderer to the body and make it non-blocking for mouse events
    const canvas = renderer.domElement;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '10'; // Lower z-index to allow interaction with elements on top
    canvas.style.pointerEvents = 'none'; // Allow clicks to pass through the canvas
    document.body.appendChild(canvas);

    // Add light
    const light = new THREE.DirectionalLight(0xffffff, 2); // Increase intensity for brightness
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Load the GLB model
    let spaceship;
    const loader = new THREE.GLTFLoader();
    loader.load('../../data/Spaceship.glb', (gltf) => {
        spaceship = gltf.scene;
        spaceship.scale.set(0.08, 0.08, 0.08); // Make the spaceship slightly bigger

        // Set colors to blue and red
        spaceship.traverse((node) => {
            if (node.isMesh) {
                node.material.emissiveIntensity = 0.5;
            }
        });

        scene.add(spaceship);
    }, undefined, (error) => {
        console.error('An error occurred while loading the GLB model:', error);
    });

    camera.position.z = 5;

    // Mouse movement variables
    const mouse = { x: 0, y: 0 };
    const targetPosition = new THREE.Vector3(); // Target position based on the mouse
    const lerpFactor = 0.1; // Speed of movement (0.1 for smooth, slower movement)

    // Update the mouse position on move
    window.addEventListener('mousemove', (event) => {
        // Normalize mouse coordinates to the range [-1, 1] relative to the entire viewport
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update target position based on mouse movement, adjusted to cover the entire viewport
        targetPosition.x = mouse.x * (window.innerWidth / window.innerHeight) * 5; // Adjust multiplier to control movement range
        targetPosition.y = mouse.y * 5;
    });

    function animate() {
        requestAnimationFrame(animate);

        if (spaceship) {
            // Smoothly interpolate towards the target position
            spaceship.position.x += (targetPosition.x - spaceship.position.x) * lerpFactor;
            spaceship.position.y += (targetPosition.y - spaceship.position.y) * lerpFactor;

            // Optionally, add a slight rotation effect based on movement direction
            spaceship.rotation.y = (targetPosition.x - spaceship.position.x) * 0.5;
            spaceship.rotation.x = -(targetPosition.y - spaceship.position.y) * 0.5;
        }

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
