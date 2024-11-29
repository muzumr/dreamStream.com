import React, { useRef, useEffect } from 'react';
import './MenuComponent.css';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  const menuRef = useRef(null);
  const menuBarRef = useRef(null);

  const timeline = gsap.timeline({ paused: true });

  useEffect(() => {
    gsap.set(menuRef.current.querySelectorAll('.menu-link'), { opacity: 0, x: -50 });

    timeline
      .to(menuRef.current, {
        top: "2%",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      })
      .to(
        menuRef.current.querySelectorAll('.menu-link'),
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
        },
        "<"
      );
  }, []);

  const toggleMenu = () => {
    menuBarRef.current.classList.toggle('open');

    if (menuBarRef.current.classList.contains('open')) {
      timeline.play();
    } else {
      gsap.to(menuRef.current.querySelectorAll('.menu-link'), { opacity: 0, x: -50, duration: 0 });
      timeline.reverse();
    }
  };

  return (
    <div>
      <div className="menu-bar text-white" onClick={toggleMenu} ref={menuBarRef}>☰</div>
      <div className="horizontal-nav mr-[10vw]" ref={menuRef}>
        <Link className='frst menu-link text-white' to="/">Home</Link>
        <Link className='menu-link' to="/about">About</Link>
        <Link className='menu-link' to="/services">Services</Link>
        <Link className='menu-link mr-[15vw]' to="/anima">Gallery</Link>
      </div>
    </div>
  );
};

export default MenuComponent;
