import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment, Preload } from '@react-three/drei';
import Scene from './components/Scene';
import Overlay from './components/Overlay';

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 25]} />
        
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.1}>
            <Scene />
            <Overlay />
          </ScrollControls>
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
      <div className="loader" id="loader">
        LOADING PORTFOLIO...
      </div>
    </>
  );
}
