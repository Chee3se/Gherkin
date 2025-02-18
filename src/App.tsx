import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './App.css';
import Translations from './Translations';

function App() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x242424);

        const root = document.getElementById('root');
        if (!root) return;

        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '50%';
        renderer.domElement.style.transform = 'translateX(-50%)';
        renderer.domElement.style.zIndex = '-1';
        root.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        camera.position.set(0, 0, 15);
        camera.lookAt(0, 0, 0);

        const cucumbers: Object3D[] = [];
        let model: Object3D | null = null;

        const loader = new GLTFLoader();
        loader.load('/cucumber.glb', (gltf: GLTF) => {
            model = gltf.scene;
            model.scale.set(50, 50, 50);
        });

        const addCucumber = () => {
            if (!model) return;

            const cucumber = model.clone();
            cucumber.position.set(
                Math.random() * 24 - 12,
                15,
                Math.random() * 2 - 1
            );

            cucumber.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            const scale = 30 + Math.random() * 20;
            cucumber.scale.set(scale, scale, scale);

            scene.add(cucumber);
            cucumbers.push(cucumber);
        };

        const spawnInterval = setInterval(addCucumber, 1000);

        const animate = () => {
            requestAnimationFrame(animate);

            cucumbers.forEach((cucumber, index) => {
                cucumber.position.y -= 0.1;
                cucumber.rotation.x += 0.02;
                cucumber.rotation.y += 0.01;

                if (cucumber.position.y < -15) {
                    scene.remove(cucumber);
                    cucumbers.splice(index, 1);
                }
            });

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            clearInterval(spawnInterval);
            root.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <>
            <Translations />
        </>
    );
}

export default App;