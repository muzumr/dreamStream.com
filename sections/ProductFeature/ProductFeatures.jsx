import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ProductFeature.css';

const ProductFeature = ({ title, description }) => (
  <div className="feature text-left flex flex-col items-start gap-4">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

function ProductFeatures() {
  const lineRef = useRef(null);
  const glowRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight+3;
      const lineHeight = lineRef.current.offsetHeight;

      // Calculate glow position to follow scroll within the section bounds
      if (sectionTop <= viewportHeight && sectionTop >= -sectionHeight) {
        const scrollProgress = Math.min(Math.max((viewportHeight - sectionTop) / (viewportHeight + sectionHeight), 0), 1);
        gsap.to(glowRef.current, {
          y: scrollProgress * (lineHeight - 1), // Ensures glow reaches the full line length
          duration: 0.1,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900  flex flex-col items-center text-center py-16 px-6">
      <h1 className="text-2xl font-bold text-white mb-12">PRODUCT</h1>
      
      <div ref={sectionRef} className="relative w-full max-w-4xl flex items-start gap-8 justify-center">
        
        {/* Left Column: Images */}
        <div className="flex flex-col items-center space-y-24">
          <img src="https://img.freepik.com/premium-vector/vector-illustration-3d-colorful-abstract-twisted-fluide-shape-trendy-liquid-design_296045-15.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Product 1" className="w-24 bg-transparent" />
          <img src="https://img.freepik.com/free-vector/hand-gestures-victory-pointing_107791-15898.jpg?t=st=1730977340~exp=1730980940~hmac=b367b9e9e64828c36de305e94a779f38c56a70351dd8899f5b7df4100ad2419c&w=996" alt="Product 2" className="w-24" />
          <img src="https://img.freepik.com/premium-psd/png-fantasy-flower-neon-art-illustration_53876-607319.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Product 3" className="w-24" />
          <img src="https://img.freepik.com/free-psd/epaulet-jewellery-isolated-transparent-background_191095-26977.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Product 4" className="w-24" />
        </div>

        {/* Center Column: Line with Glow Effect and Dots */}
        <div className="relative flex flex-col items-center">
          <div ref={lineRef} className="w-1 bg-gray-700 h-[80vh] mx-auto relative">
            <div
              ref={glowRef}
              className="absolute w-full h-[10vh] bg-white opacity-80 rounded-full"
              style={{ top: '30px' }}
            ></div>

            {/* Dots aligned with content */}
            <div className="dot bg-gray-400 w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/4"></div>
            <div className="dot bg-gray-400 w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2"></div>
            <div className="dot bg-gray-400 w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 top-3/4"></div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-start space-y-24">
          <ProductFeature
            title="15 Programmable controls"
            description="Customize your controls and program buttons for various functions."
          />
          <ProductFeature
            title="Dual connectivity with lightspeed"
            description="Experience ultra-fast connectivity with lightspeed technology."
          />
          <ProductFeature
            title="Hero 16K sensor"
            description="Enjoy high-precision tracking with the Hero 16K sensor."
          />
          <ProductFeature
            title="Spin, Ratchet, Switch"
            description="Switch between modes seamlessly for a better gaming experience."
          />
        </div>
      </div>

      <button className="mt-10 bg-blue-500 text-white px-6 py-2 rounded-full">BUY NOW</button>
    </div>
  );
}

export default ProductFeatures;
