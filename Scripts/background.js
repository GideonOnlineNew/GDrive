import * as THREE from './path/to/three.module.js';
import { GLTFLoader } from './path/to/GLTFLoader.js';
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Загрузка сцены из glTF файла
var loader = new THREE.GLTFLoader();
loader.load('Projekt1.gltf', function(gltf) {
    // Добавление сцены из glTF
    scene.add(gltf.scene);

    animate(); // Запуск анимации после загрузки
}, undefined, function(error) {
    console.error(error);
});

function animate() {
    requestAnimationFrame(animate);
    // Можно добавить анимацию для объектов сцены здесь
    renderer.render(scene, camera);
}
