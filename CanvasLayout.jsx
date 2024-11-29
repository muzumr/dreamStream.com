// src/layouts/CanvasLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import Main from './Robot/Main';
import BackButton from './backBtn/BackButton'

function CanvasLayout() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
     
        
         <Main/>
         <BackButton/>
          <Outlet />
        
      
    </div>
  );
}

export default CanvasLayout;
