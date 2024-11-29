import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const IconComponent = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const icons = document.querySelectorAll('.icon');
    icons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon.querySelector('i'), { scale: 1.2, duration: 0.6, ease: 'power2.out' });
      });
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon.querySelector('i'), { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });
  }, []);
  

  const icons = [
    { name: 'Facebook', icon: <FaFacebook className="text-white text-[3vw]" /> },
    { name: 'Twitter', icon: <FaTwitter className="text-white text-[3vw]" /> },
    { name: 'Instagram', icon: <FaInstagram className="text-white text-[3vw]" /> },
    { name: 'LinkedIn', icon: <FaLinkedin className="text-white text-[3vw]" /> },
    { name: 'Gmail', icon: <FaEnvelope className="text-white text-[3vw]" /> },
  ];

  return (
    <div className="flex items-center justify-center  bg-[#1B1B1B] h-[40vh]">
      <div className="relative flex items-center justify-center w-full max-w-md overflow-hidden transition-all duration-500 ease-linear border-2 border-gray-500 sm:max-w-lg lg:max-w-2xl rounded-2xl hover:border-white">
        <div className="flex gap-6 sm:gap-8">
          {icons.map(({ name, icon }) => (
            <div
            style={{
                color: hoveredIcon === name ? '#FFD700' : '#FFFFFF', // Change color on hover (e.g., gold)
              }}
              key={name}
              className="relative flex items-center justify-center w-16 h-16 transition-transform cursor-pointer icon sm:w-20 sm:h-20"
              onMouseEnter={() => setHoveredIcon(name)}
              onMouseLeave={() => setHoveredIcon(null)}
           
            >
              {icon}
              <span
                className={`absolute transition-all duration-[900ms] ease-in-out text-white text-sm sm:text-lg ${
                  hoveredIcon === name ? 'opacity-100 scale-90 bottom-[120%] ' : 'opacity-0 scale-50 bottom-[-150%] '
                }`}
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  duration:'3',
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconComponent;
