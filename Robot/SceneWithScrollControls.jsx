// SceneWithScrollControls.js
import React, { useEffect } from 'react';
import { ScrollControls, Scroll, Sparkles, Backdrop, Float, Ring } from '@react-three/drei';
import { Robot } from './Robot'; // Adjust this import path if needed
import baffle from 'baffle';
import './SceneWithScroll.css'
import ShimmerButton from '../btn/ShimmerButton'

export function SceneWithScrollControls() {
  useEffect(() => {
    const target = baffle('.title');
    target.set({
      characters: '░D░R░E░A░M░S░.░',
      speed: 100,
    });
    target.start();
    target.reveal(1000, 1000);
  }, []);

  return (
    <ScrollControls pages={6} damping={0.1}>
      {/* Add a simple box for testing visibility */}
      <mesh position={[0, 0, -3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>

      <Robot scale={0.8} />
      <Sparkles size={2} color="#fff" scale={[10, 10, 10]} />
      <Backdrop receiveShadow floor={20.5} segments={100} scale={[50, 30, 10]} position={[4, -10, 0]}>
        <meshStandardMaterial color="#0a1a1f" />
      </Backdrop>

      <Float speed={4} rotationIntensity={0.5} floatIntensity={1} floatingRange={[1, 1]}>
        <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
          <meshStandardMaterial color="#2a3a3f" />
        </Ring>
      </Float>

      <Scroll html style={{ width: '100%' }}>
        <img className='h-[5vw]' src="./fbLogo.png" alt="logo" />
        <h1
        className="title HEADER text-[#cdcbca] absolute top-[65vh] left-1/2 text-[13em] transform -translate-x-1/2 -translate-y-1/2
          sm:text-[6em] md:text-[8em] lg:text-[10em] xl:text-[12em]"
      >
        DREAMS.
      </h1>
        <div className='row' style={{ position: 'absolute', top: `132vh` }}>
          <h2 className='frstHOne font-bold text-2xl'>Innovating the Future with Code</h2>
          <p className='frstPTag' style={{ maxWidth: '400px' }}>Software engineering is not just about code; it’s about empowering the world to achieve more by leveraging technology and creativity.</p>
          <button className='frstBtn p-2 mt-3 hover:bg-black'>Read more</button>
        </div>
        <div className='row' style={{ position: 'absolute', top: `230vh` }}>
          <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px" }}>
            <h2 className='colHtwo font-bold text-3xl' style={{ maxWidth: "440px" }}>Infinite</h2>
            <p className='colPTag' style={{ maxWidth: '440px' }}>Great software is born out of collaboration, creative problem-solving, and the willingness to push boundaries.</p>                
            <button className='colBtn  p-2 mt-3 hover:bg-black'>Read more</button>
          </div>
        </div>
        <h2 className='trdhTwo text-2xl ' style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Pioneering the Future of Technology</h2>              
        <button className='border-none' style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%) ` }}>
          <ShimmerButton/>
        </button>
      </Scroll>
    </ScrollControls>
  );
}
