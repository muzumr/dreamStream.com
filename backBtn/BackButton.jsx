// BackButton.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // Import the CSS file

const BackButton = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Debug logs
      console.log('Current scroll position:', currentPosition);
      console.log('Last scroll position:', lastScrollPosition);

      if (currentPosition < lastScrollPosition) {
        // Scrolling up
        setVisible(true);
      } else {
        // Scrolling down
        setVisible(false);
      }

      lastScrollPosition = currentPosition;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button
      className={`back-button ${visible ? 'visible' : ''}`} // Apply the visible class
      onClick={handleBackClick}
    >
      Back
    </button>
  );
};

export default BackButton;
