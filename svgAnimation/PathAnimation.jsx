import { useEffect } from 'react';
// import './styles.css';
import gsap from 'gsap';
// import IconComponent from '../footerIcons/IconComponent'

const PathAnimation = () => {
  useEffect(() => {
    const Path = 'M 10 100 Q 500 100 990 100';
    const finalPath = 'M 10 100 Q 500 100 990 100';

    const string = document.querySelector('.string');
    const svg = document.querySelector('svg');
    const audio = document.getElementById('hoverAudio');

    let isUserInteracted = false;

    const playAudio = () => {
      if (!isUserInteracted) return; // Prevent playing audio if no interaction
      audio.play().catch((error) => {
        console.error('Audio play failed:', error);
      });
    };

    // Require user interaction to enable audio play
    const enableAudioOnInteraction = () => {
      isUserInteracted = true; // Set flag indicating user interaction
      console.log('User interacted, audio play is now enabled.');
    };

    // Add click event listener to the document to ensure user interaction
    document.addEventListener('click', enableAudioOnInteraction, { once: true });

    // SVG animation based on mouse movement
    string.addEventListener('mousemove', (dets) => {
      const yPos = dets.offsetY;
      const middleY = 100;
      const controlY = middleY + (yPos - middleY);
      const path = `M 10 100 Q ${dets.x} ${controlY} 990 100`;

      gsap.to('svg path', {
        attr: { d: path },
        duration: 0.2,
        ease: 'power3.inOut',
      });
    });

    string.addEventListener('mouseleave', () => {
      gsap.to('svg path', {
        attr: { d: finalPath },
        duration: 1.5,
        ease: 'elastic.out(1,0.2)',
      });
    });

    svg.addEventListener('mouseenter', () => {
        audio.play().catch((error) => {
          console.error('Audio play failed:', error);
        });
      });

    // Pause audio when leaving the SVG
    svg.addEventListener('mouseleave', () => {
      audio.pause();
      audio.currentTime = 0;
    });

    return () => {
      // Clean up event listeners
      document.removeEventListener('click', enableAudioOnInteraction);
      svg.removeEventListener('mouseenter', playAudio);
      svg.removeEventListener('mouseleave', () => {});
      string.removeEventListener('mousemove', () => {});
      string.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <>
    <div className='bg-[#1B1B1B]'>
    
     </div>
    <div className="string flex justify-center items-center bg-black h-[60vh] relative z-10">
      <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-w-full max-h-full text-blue-800 bg-[black]">
        <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="white" strokeWidth="4" />
      </svg>
      <h1 className=' absolute text-[black] bottom-[60%] lg:bottom-[70%] z-[0] '>Dream Stream</h1>
      <audio id="hoverAudio" src="./audio.mp3"></audio>
     
    </div>
   
    </>
  );
};

export default PathAnimation;
