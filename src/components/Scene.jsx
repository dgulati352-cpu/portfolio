import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Float, Stars, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene() {
  const scroll = useScroll();
  
  // Refs for our 3D objects
  const group = useRef();
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();

  useFrame((state, delta) => {
    // scroll.offset goes from 0 to 1
    const offset = scroll.offset;

    // Move the entire group based on scroll
    group.current.position.y = offset * 15;
    
    // Rotate individual meshes
    if (mesh1.current) {
      mesh1.current.rotation.x += delta * 0.2;
      mesh1.current.rotation.y += delta * 0.3;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x -= delta * 0.2;
      mesh2.current.rotation.y += delta * 0.4;
    }
    if (mesh3.current) {
      mesh3.current.rotation.x += delta * 0.4;
      mesh3.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#8b5cf6" />
      <directionalLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <group ref={group}>
        {/* Hero Object */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh ref={mesh1} position={[2, -1, 0]}>
            <icosahedronGeometry args={[1.5, 0]} />
            <MeshTransmissionMaterial 
              backside
              thickness={0.5}
              roughness={0}
              transmission={1}
              ior={1.2}
              chromaticAberration={0.4}
              color="#a5b4fc"
            />
          </mesh>
        </Float>

        {/* Project 1 Object (Scroll Offset ~ 0.25) -> Scene Y needs to go UP, so objects are placed below */}
        <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
          <mesh ref={mesh2} position={[-3, -8, -2]}>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <MeshTransmissionMaterial 
              thickness={0.8}
              roughness={0.1}
              transmission={1}
              ior={1.5}
              color="#8b5cf6"
            />
          </mesh>
        </Float>

        {/* Project 2 Object (Scroll Offset ~ 0.5) */}
        <Float speed={2.5} rotationIntensity={1} floatIntensity={3}>
          <mesh ref={mesh3} position={[3, -15, -1]}>
            <octahedronGeometry args={[1.5, 0]} />
            <MeshTransmissionMaterial 
              thickness={1}
              roughness={0}
              transmission={1}
              ior={1.3}
              chromaticAberration={1}
              color="#6366f1"
            />
          </mesh>
        </Float>
        
        {/* Project 3 Object (Scroll Offset ~ 0.75) */}
        <Float speed={1} rotationIntensity={3} floatIntensity={1.5}>
          <mesh position={[-2, -22, -3]}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <MeshTransmissionMaterial 
              thickness={0.5}
              roughness={0.2}
              transmission={1}
              ior={1.1}
              color="#ffffff"
            />
          </mesh>
        </Float>
      </group>
    </>
  );
}
