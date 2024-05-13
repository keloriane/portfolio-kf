"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import fragment from "./shader/fragment.glsl";
import vertex from "./shader/vertex.glsl";
import ao from "./assets/ao.png";
import state1 from "./assets/state1.jpg";
import state2 from "./assets/state2.jpg";

const Sketch = () => {
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);
  const fboRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    const animate = () => {
      setTime((t) => t + 0.05);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  useEffect(() => {
    if (fboRef.current) {
      setProgress(fboRef.current.material.uniforms.uProgress.value);
    }
  }, [fboRef.current]);

  const handleProgressChange = (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      setProgress(val);
      if (fboRef.current) {
        fboRef.current.material.uniforms.uProgress.value = val;
      }
    }
  };

  return (
    <Canvas
      camera={{ position: [2, 2, 2] }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x08092d);
      }}
    >
      <ambientLight intensity={0.7} />
      <spotLight
        color={0xffe9e9}
        position={[-80 * 3, 200 * 3, -80 * 3]}
        intensity={300}
        angle={1}
        penumbra={1.5}
        decay={0.7}
        distance={3000}
      />
      <OrbitControls ref={controlsRef} />
      <mesh>
        <planeBufferGeometry args={[100, 100]} />
        <meshBasicMaterial
          map={fboRef.current ? fboRef.current.texture : null}
        />
      </mesh>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <shaderMaterial
        ref={fboRef}
        uniforms-uProgress-value={progress}
        uniforms-uState1-value={new THREE.TextureLoader().load(state1)}
        uniforms-uState2-value={new THREE.TextureLoader().load(state2)}
        uniforms-uFBO-value={null}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
      <gui>
        <folder label="Settings">
          <number
            label="Progress"
            min={0}
            max={1}
            step={0.01}
            value={progress}
            onChange={handleProgressChange}
          />
        </folder>
      </gui>
    </Canvas>
  );
};

const Model = () => {
  const gltf = useRef();
  const [aoTexture] = useState(() => new THREE.TextureLoader().load(ao));

  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
    loader.load("./assets/bar.glb", (gltf) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhysicalMaterial({
            roughness: 0.65,
            map: aoTexture,
            aoMap: aoTexture,
            aoMapIntensity: 0.75,
          });
        }
      });
      gltf.current = gltf.scene;
    });
  }, [aoTexture]);

  return gltf.current ? (
    <primitive object={gltf.current} scale={[40, 40, 40]} />
  ) : null;
};

export default Sketch;
