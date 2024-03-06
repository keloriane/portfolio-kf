import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class Sketch {
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private time: number;
  private geometry: THREE.PlaneGeometry;
  private material: THREE.ShaderMaterial;
  private renderer: THREE.WebGLRenderer;
  private plane: THREE.Mesh;
  private dracoloader: DRACOLoader;
  private gltfLoader: GLTFLoader;
  private controls: OrbitControls;
  private width: number;
  private height: number;
  private container: HTMLElement;
  private model: any;

  constructor(options: { dom: HTMLElement }) {
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10,
    );
    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.camera.position.z = 1;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeeeee, 1);
    this.container.appendChild(this.renderer.domElement);
    this.model = null;
    this.time = 0;
    this.camera.position.set(0, 0, 5);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.dracoloader = new DRACOLoader();
    this.gltfLoader = new GLTFLoader().setDRACOLoader(this.dracoloader);

    this.isPlaying = true;
    // Initialize material with shader
    // Add objects before calling render
    this.addObjects();
    this.render();
    this.setupResize();
  }

  private setupResize = (): void => {
    window.addEventListener('resize', this.resize.bind(this));
  };
  private resize = (): void => {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  };

  private addObjects = (): void => {
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: '#extension GL_OES_standard_derivatives : enable',
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
      },
      vertexShader: `
      uniform float time;
      varying vec2 vUv;
      varying vec4 vPosition;

      void main(){
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
          gl_PointSize = 50. * ( 300.0 / -mvPosition.z );
          gl_Position = projectionMatrix * mvPosition;
      }
      `,
      fragmentShader: `
      void main(){
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }`,
    });

    this.gltfLoader.load('/cube2.glb', (gltf) => {
      this.model = gltf.scene.children[0]; // Corrected variable name
      this.model.material = this.material;
      this.scene.add(this.model);
      console.log(this.model);
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  };

  addLight = (): void => {
    const light = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(light);

    const light2 = new THREE.PointLight(0xffffff, 1);
    light2.position.set(0, 0, 3);
    this.scene.add(light);
    this.scene.add(light2);
    this;
  };
  private render = (): void => {
    this.time++;
    this.plane.rotation.x = this.time / 1000;
    this.plane.rotation.y = this.time / 1000;

    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render);
  };
}
