// src/LandingPage.jsx
import React from 'react';

const Land = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 py-12">
      {/* Left Section */}
      <div className="text-center md:text-left max-w-md md:max-w-lg space-y-6">
        <span className="text-xs uppercase font-bold text-[#656F71]">Digital Transformation</span>
      <div className=' w-[30vw] rounded-r-full bg-gradient-to-r from-[#707070]  to-black'>
      <h1 className="text-4xl font-bold text-gray-900 bg-black">
        Push boundaries 
 <br /><span className="text-purple-600">effortlessly</span>
        </h1>
      </div>
        <p className="text-gray-600">
        Empowering you to conquer complexity, streamline processes, and transform ideas into real-world innovations faster than ever.
        </p>
        <div className="flex items-center space-x-4 ">
          <button className="ml-[30vw] sm:ml-0 bg-black text-white px-5 py-3 rounded-full font-semibold hover:bg-gray-600 transition">
            Contact
          </button>
          <button className=" mr-[3vw] sm:ml-0flex items-center justify-center w-12 h-12 bg-gray-600 text-white rounded-full">
            <span className="text-2xl mb-1">&rsaquo;</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-10 md:mt-0 md:ml-12 flex-shrink-0">
        {/* Background Circles */}
        <div className="absolute -top-8 -right-8 w-28 h-28 bg-red-100 rounded-full"></div>
        <div className="absolute -bottom-8 right-0 w-44 h-44 bg-purple-100 rounded-full"></div>
        <div className="absolute -bottom-12 -left-6 w-28 h-28 bg-pink-200 rounded-full"></div>
        <div className="absolute -top-6 left-8 w-12 h-12 bg-red-200 rounded-full"></div>
        
        {/* Phone Mockup */}
        <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden p-4 w-60 h-96 flex items-center justify-center">
          <img
            src="https://img.freepik.com/premium-psd/blue-robot-isolated-3d-rendering_1007521-9371.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" // Replace with your image path or use an online link
            alt="Phone Mockup"
            className="w-full h-full object-cover bg-black "
          />
        </div>
      </div>
    </div>
  );
};

export default Land;
