import React from "react";
import { FaRegLightbulb, FaMobileAlt, FaCode, FaPaintBrush, FaChartBar, FaLaptopCode } from "react-icons/fa";

const SolutionsSection = () => {
  return (
    <section className="bg-[#1B1B1B] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We Shape the Perfect Solutions</h2>
          <p className="text-gray-400 max-w-lg">
          A silent network hums beneath their world, connecting minds and machines with a seamless rhythm. It’s a digital haven, where streams of data flow effortlessly to meet every need.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Service Card */}
          <div className="group p-6 flex flex-col items-start rounded-md cursor-pointer bg-[#2289B5] text-black transition-all duration-300 hover:bg-black hover:text-white">
            <FaPaintBrush size={40} className="mb-4" />
            <h3 className="text-xl font-semibold">Graphic Design</h3>
          </div>

          <div className="group p-6 flex flex-col items-start rounded-md cursor-pointer bg-[#333] transition-all duration-300 hover:bg-[#2289B5] hover:text-black">
            <FaMobileAlt size={40} className="text-[#2289B5] mb-4 group-hover:text-black" />
            <h3 className="text-xl font-semibold">Application Development</h3>
          </div>

          <div className="group p-6 flex flex-col items-start rounded-md cursor-pointer bg-[#333] transition-all duration-300 hover:bg-[#2289B5] hover:text-black">
            <FaLaptopCode size={40} className="text-[#2289B5] mb-4 group-hover:text-black" />
            <h3 className="text-xl font-semibold">Web Development</h3>
          </div>

          <div className="group p-6 flex flex-col items-start rounded-md cursor-pointer bg-[#333] transition-all duration-300 hover:bg-[#2289B5] hover:text-black">
            <FaRegLightbulb size={40} className="text-[#2289B5] mb-4 group-hover:text-black" />
            <h3 className="text-xl font-semibold">Digital Products</h3>
          </div>

          <div className="group p-6 flex flex-col items-start rounded-md cursor-pointer bg-[#333] transition-all duration-300 hover:bg-[#2289B5] hover:text-black">
            <FaChartBar size={40} className="text-[#2289B5] mb-4 group-hover:text-black" />
            <h3 className="text-xl font-semibold">Online Marketing</h3>
          </div>

          <div className="group p-6 flex flex-col items-start rounded-md cursor-pointer bg-[#333] transition-all duration-300 hover:bg-[#2289B5] hover:text-black">
            <FaCode size={40} className="text-[#2289B5] mb-4 group-hover:text-black" />
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
