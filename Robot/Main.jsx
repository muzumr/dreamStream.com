





// Main.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { SceneWithScrollControls } from './SceneWithScrollControls'; // Import the new scene component
import './index.css'; // Include your CSS styles here
import PathAnimation from '../svgAnimation/PathAnimation';
// import BackButton from '../backBtn/BackButton';

function Main({ enableScrollControls = true }) {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [0, 1, 5], fov: 75 }}>
      <color attach="background" args={['#1a1a1a']} /> 
      <ambientLight intensity={1} />
      <spotLight position={[0, 25, 0]} angle={0.3} penumbra={1} castShadow intensity={1} />
      <Environment preset="sunset" />

      {enableScrollControls && (
        <SceneWithScrollControls />
       
      )}
    </Canvas>
    
  );
}

export default Main;

