// CanvasWrapper.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
// import App from './App';
import Main from './Main';
import './index.css';
const Wrapper = () => {
  return (
    <Canvas shadows>
      <Main/>
    </Canvas>
  );
};

export default Wrapper;
