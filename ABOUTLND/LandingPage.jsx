import React, { useEffect, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame } from '@react-three/fiber';
import gsap from "gsap";
import MenuComponent from "./MenuComponent";



const Model = () => {
  const gltf = useLoader(GLTFLoader, '/desktop_pc/scene.gltf');
  return (
    <primitive
      object={gltf.scene}
      scale={[0.7,0.7,0.7]}
      position={[0, -1, 0]}
    
    />
  );
};

const HomePage = () => {
  const leftContentRef = useRef();
  const rightContentRef = useRef();

  useEffect(() => {
      gsap.fromTo(
          leftContentRef.current,
          { x: '-100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
          leftContentRef.current.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(
          rightContentRef.current,
          { x: '100%', opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-gradient-to-r from-[#72706f] via-[#26a9e1ad] to-black ">
        <MenuComponent/>
        <div className="absolute text-2xl text-pink-500 logo top-[22px] left-[30px]"><img className='h-[10vh]' src="./fbLogo.png" alt="logo" /></div>
    {/* Content Section */}
    <div className="container flex flex-col items-center px-6 mx-auto md:flex-row md:justify-between  " >
   
      
      {/* left Text */}
   {/* Left Text */}
<div
  className="w-full text-center md:w-1/2 md:text-left"
  ref={leftContentRef}
>
  <h1 className="mb-4 text-4xl font-bold mt-[20vh] md:mt-0">Your Vision, Our Code.</h1>
  <p className="mb-6 text-lg">
    Transforming ideas into seamless digital experiences, we build websites that don’t just look great but perform even better.
  </p>
  <div className="flex flex-col space-y-4 items-center justify-center md:flex-row md:space-y-0 md:space-x-4 sm:justify-center">
  <button className="ml-[30vw] sm:ml-0 px-6 py-2  text-blue-500 bg-white rounded hover:bg-gray-100">
    Contact Now
  </button>
  <button className="ml-[30vw] sm:ml-0 px-6 py-2 border border-white rounded hover:bg-gray-100 hover:text-blue-500">
    Discover More
  </button>
</div>
</div>

         {/* right model */}
         <div className="flex justify-center w-full mb-8 md:w-1/2 md:justify-start md:mb-0" ref={rightContentRef}>
        <Canvas
          camera={{ position: [6, 3, -3], fov: 80 }}
          style={{ width: '100%', height: '400px' }}
        >
          <ambientLight intensity={1.0} />
          <directionalLight position={[5, 5, 5]} intensity={1.0} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} />
          <Model />
          <OrbitControls
            enableZoom={false}
            minDistance={2}
            maxDistance={10}
            target={[0, 0, 0]}
          />
        </Canvas>
      </div>
    </div>

    {/* Updated Wavy SVG Divider */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-[120px] md:h-[160px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="white"
      >
        <path
          d="M0,224L30,213.3C60,203,120,181,180,160C240,139,300,117,360,133.3C420,149,480,203,540,202.7C600,203,660,149,720,138.7C780,128,840,160,900,181.3C960,203,1020,213,1080,202.7C1140,192,1200,160,1260,160C1320,160,1380,192,1410,208L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </svg>
    </div>
  </div>
  );
};

export default HomePage;
