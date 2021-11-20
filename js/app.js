import * as THREE from "three";
import { WEBGL } from 'three/examples/jsm/WebGL';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// GET STATED
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// CUBE
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cube);

// LINE
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(- 10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

// HELPERS
const controls = new OrbitControls(camera, renderer.domElement);

// ANIMATION LOOP
function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

if (WEBGL.isWebGLAvailable()) {
	animate();
} else {
	const warning = WEBGL.getWebGLErrorMessage();
	document.getElementById('container').appendChild(warning);
}
