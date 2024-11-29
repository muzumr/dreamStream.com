import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css';
// import StarsCanvas from '../3dEarth/Stars';
import { Robot } from '../Robot/Robot';
import EarthCanvas from '../3dEarth/EarthCanvas';

gsap.registerPlugin(ScrollTrigger);

const CardComponent = () => {
  // Array containing card data
  const cardData = [
    {
      imgSrc: 'https://img.freepik.com/free-photo/robot-working-as-painter-instead-humans_23-2150911981.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid',
      heading: 'The First Algorithm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
      imgSrc: 'https://img.freepik.com/premium-photo/world-sparkling-mechanism-expressions-sparklit-internet-android_68880-21988.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid',
      heading: 'The Second Algorithm',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      imgSrc: 'https://img.freepik.com/premium-photo/imaginatory-fractal-abstract-background-image_1385-27141.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid',
      heading: 'The Third Algorithm',
      description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
    {
      imgSrc: 'https://img.freepik.com/premium-photo/dystopian-cyberpunk-flickering-neon-lines-surveillance-camer-y2k-shapes-neon-transparent-light-art_1020495-71161.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid',
      heading: 'The Fourth Algorithm',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      imgSrc: 'https://img.freepik.com/free-photo/computer-screen-with-binary-code-mouse-black-background-3d-render_1142-56672.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid',
      heading: 'The Fifth Algorithm',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      imgSrc: 'https://img.freepik.com/premium-photo/conceptual-image-man-sitting-glass-jar-reading-book_1015980-154566.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid',
      heading: 'The Sixth Algorithm',
      description: 'Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: 'top 15%',
          end: 'bottom 15%',
          scrub: true,
          markers: false,
        },
      });
    });
  }, []);

  return (
    <main className="flex w-full bg-[#1B1B1B] flex-col gap-4 items-center py-[15vh] text-white text-center  relative">
      <div>
      {/* <StarsCanvas/> */}
      {/* <EarthCanvas/> */}
      </div>
      
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card sticky top-[15vh] flex flex-col gap-4 items-center bg-[black] border-[1px] border-[white] w-[90vw] md:w-[27vw] py-[10vh] rounded-[25px]"
        >
          <img 
            className="w-[180px] aspect-square "
            src={card.imgSrc}
            alt={`Card ${index + 1}`}
          />
          <h1 className="text-3xl font-thin md:text-4xl">
            {card.heading.split('<br>').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p className="px-4 md:px-0">
            {card.description}
          </p>
        </div>
      ))}
    </main>
  );
};

export default CardComponent;
