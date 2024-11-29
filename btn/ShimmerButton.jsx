import React from "react";
import "./ShimmerButton.css"; // Import custom CSS for shimmer animation

const ShimmerButton = () => {
  return (
    <div className="flex justify-center items-center h-[10vh]">
      <button className="relative px-5 py-2 overflow-hidden text-lg text-gray-300 transition-colors duration-300 bg-gray-800 border-2 rounded-lg cursor-pointer border-gray-300/30 hover:border-white shimmer-btn">
        Click Here
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent shimmer-effect"></span>
      </button>
    </div>
  );
};

export default ShimmerButton;
