import React, { useState } from 'react';
import './Page2.css';

const Page2 = () => {
  const [bgImage, setBgImage] = useState('');

  const handleMouseEnter = (img) => {
    setBgImage(img);
  };

  const handleMouseLeave = () => {
    setBgImage('black');
  };

  const elemsData = [
    {
      img: "https://img.freepik.com/premium-photo/computer-background-copy-space_1036998-334671.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid",
      title: "Performance",
    },
    {
      img: "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252466.jpg?t=st=1729186694~exp=1729190294~hmac=55cf90b89b624c5018fec403aa23d8504e4d1740f01ebaa87627db19e25e0ede&w=826",
      title: "Networking",
    },
    {
      img: "https://img.freepik.com/free-photo/3d-rendering-computer-desk_23-2151004363.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid",
      title: "Refactoring",
    },
    {
      img: "https://img.freepik.com/free-photo/human-hand-typing-computer-keyboard-night-generated-by-ai_188544-31050.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid",
      title: "FUTUREWORLD",
    },
    {
      img: "https://img.freepik.com/premium-photo/abstract-digital-art-glossy-home-office-setup-photo-stock-concept_980716-511619.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid",
      title: "Deployment",
    },
  ];

  return (
    <div className="page2" style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'black' }}>
      {elemsData.map((elem, index) => (
        <div
          key={index}
          className="elem"
          onMouseEnter={() => handleMouseEnter(elem.img)}
          onMouseLeave={handleMouseLeave}
        >
          <h2>{elem.title}</h2>
          <div className="moving">
            <div className="blur"></div>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <div className="moving-in" key={i}>
                  <h5>Creative direction</h5>
                  <h5>Digital Design</h5>
                  <h5>Art Design</h5>
                  <h5>Brand and Identity</h5>
                  <h5>Type Design</h5>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page2;
