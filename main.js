import * as THREE from 'three';
import { ARButton } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/webxr/ARButton.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement );
document.body.appendChild( ARButton.createButton( renderer ) );
renderer.xr.enabled = true;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 0.5
controls.update();
const helper = new THREE.AxesHelper(3);

const cone = new THREE.Mesh(new THREE.BoxGeometry(0.3,0.3,0.3), new THREE.MeshBasicMaterial({color: "yellow"}));
cone.position.z = -0.3;
scene.add(cone);

renderer.setAnimationLoop(function(){
    //cone.rotation.x += 0.01
    //cone.rotation.z += 0.01 
    renderer.render( scene, camera );
});
