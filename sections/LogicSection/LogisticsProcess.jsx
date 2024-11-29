import React from 'react';

const LogisticsProcess = () => {
  return (
    <section className="bg-[#1B1B1B] py-16 px-4 min-h-screen flex flex-col items-center relative">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <p className="text-[#D8D9DA] font-semibold">OUR WORK PROCESS</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          We always follow the best ways of logistics
        </h2>
        <p className="text-gray-500 mt-2">
          Logistics Air freight service delivers the knowledge & opportunity to optimize every part of the logistics process.
        </p>
      </div>

      {/* SVG Curve */}
      <svg
        className="absolute top-[46vh] left-0 right-0 mx-auto hidden lg:block "
        width="100%"
        height="200"
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 100 Q300 0 600 100 T1200 100"
          stroke="white" // Orange color
          strokeWidth="5"
          fill="none"
        />
      </svg>

      {/* Process Steps */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl lg:space-x-8 mt-20">
        {/* Step 1 */}
        <div className="relative bg-white shadow-lg rounded-lg p-6 w-80 text-center lg:text-left mb-10 lg:mb-0 transform -rotate-6">
          <div className="flex justify-center lg:justify-start items-center mb-4">
            <img src="https://img.freepik.com/premium-photo/holo-abstract-3d-shapes-holographic-elements-3d-holographic-liquid-shape-gradient-shapes_885800-16744.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Receive Packages" className="w-20 h-20 rounded-full" />
            <div className="absolute -top-4 -left-6 bg-orange-500 text-white p-2 rounded-full">1</div>
          </div>
          <h3 className="text-xl font-semibold">Step 1: Receive Packages</h3>
          <p className="text-gray-500 mt-2">
            Logistics Air freight service delivers the knowledge & opportunity to optimize package reception effectively.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white shadow-lg rounded-lg p-6 w-80 text-center lg:text-left mb-10 lg:mb-0 transform rotate-3">
          <div className="flex justify-center lg:justify-start items-center mb-4">
            <img src="https://img.freepik.com/premium-photo/holo-abstract-3d-shapes-holographic-elements-3d-holographic-liquid-shape-gradient-shapes_885800-16716.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Transport Packages" className="w-20 h-20 rounded-full" />
            <div className="absolute -top-4 -left-6 bg-orange-500 text-white p-2 rounded-full">2</div>
          </div>
          <h3 className="text-xl font-semibold">Step 2: Transport Packages</h3>
          <p className="text-gray-500 mt-2">
            Logistics Air freight service delivers the knowledge & opportunity to optimize transport of packages.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white shadow-lg rounded-lg p-6 w-80 text-center lg:text-left transform -rotate-6">
          <div className="flex justify-center lg:justify-start items-center mb-4">
            <img src="https://img.freepik.com/premium-vector/vector-illustration-3d-colorful-abstract-twisted-fluide-shape-trendy-liquid-design_296045-15.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Deliver Packages" className="w-20 h-20 rounded-full" />
            <div className="absolute -top-4 -left-6 bg-orange-500 text-white p-2 rounded-full">3</div>
          </div>
          <h3 className="text-xl font-semibold">Step 3: Deliver Packages</h3>
          <p className="text-gray-500 mt-2">
            Logistics Air freight service delivers the knowledge & opportunity to optimize timely delivery of packages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogisticsProcess;
