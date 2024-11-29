import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function NormalLayout() {
  return (
    <div style={{ height: '100vh', overflowY: 'auto', }}>
      {/* <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/services">Services</Link> | 
        <Link to="/anima">Anima</Link>
      </nav> */}
      <main style={{ height: 'auto', position: 'relative' }}>
        {/* Full scrollable height for the CanvasComponent */}
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default NormalLayout;
