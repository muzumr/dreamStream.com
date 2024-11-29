import React from 'react';

const LogisticsSection = () => {
  return (
    <section className="bg-[#1B1B1B] py-16 px-4 min-h-screen relative flex flex-col items-center">
      {/* Decorative Arrows */}
      <div className="absolute left-8 top-[5vh] sm:top-36 text-[hsl(198,68%,42%)] ">
        <img className='h-10 rounded-full cursor-pointer' src="data:image/jpeg;base64,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" alt="Arrow Left" />
      </div>
      <div className="absolute right-8 top-[5vh] sm:top-36">
        <img className='h-10 rotate-180 rounded-full cursor-pointer' src="data:image/jpeg;base64,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" alt="Arrow Right" />
      </div>

      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <p className="text-[#2289B5] font-semibold">OUR SERVICES</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Wide Variety of Logistics Services
        </h2>
        <p className="text-gray-500 mt-2">
          Logistics Air freight service delivers the knowledge & opportunity to optimize every mile on every lane. Get full service.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row justify-center  items-start  gap-6 w-full max-w-6xl ">
        {/* Card 1 */}
        <div className="relative bg-white rounded-lg shadow-lg hover:bg-[#1B1B1B] transition-colors p-6 w-[320px] lg:w-[320px] flex flex-col items-center ml-[13vw] sm:ml-0 ">
          <div className="relative">
            <img src="https://img.freepik.com/free-psd/close-up-feather-isolated_23-2151805084.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Maritime" className="rounded-t-lg w-full mb-4" />
            <div className="absolute top-0 right-0 bg-[#1B1B1B] p-2 rounded-full -translate-y-1/2 translate-x-1/2">
              <span className="text-white">🚢</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center">Maritime Freight Transportation</h3>
          <p className="text-gray-500 mt-2 text-center">
            Logistics air freight service delivers the knowledge & opportunity to optimize.
          </p>
          <button className="mt-4 bg-[#2289B5] text-white px-4 py-2 rounded-full hover:bg-[#1B1B1B] transition-color ml-[25vw] sm:ml-0 ">
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-lg shadow-lg hover:bg-[#1B1B1B] transition-colors p-6 w-[320px] lg:w-[320px] flex flex-col items-center ml-[13vw] sm:ml-0">
          <div className="relative">
            <img src="https://img.freepik.com/premium-photo/3d-glowing-digital-art-dancer-celebrating-sharad-purnima-with-vibrant-colors-fluid-movements_980716-477727.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Land" className="rounded-t-lg w-full mb-4" />
            <div className="absolute top-0 right-0 bg-[#1B1B1B] p-2 rounded-full -translate-y-1/2 translate-x-1/2">
              <span className="text-white">🚚</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center">Land Freight Transportation</h3>
          <p className="text-gray-500 mt-2 text-center">
            Logistics air freight service delivers the knowledge & opportunity to optimize.
          </p>
          <button className="mt-4 bg-[#2289B5] text-white px-4 py-2 rounded-full hover:bg-[#1B1B1B] transition-colors ml-[25vw] sm:ml-0">
            Read More
          </button>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-lg shadow-lg hover:bg-[#1B1B1B] transition-colors p-6 w-[320px] lg:w-[320px] flex flex-col items-center ml-[13vw] sm:ml-0">
          <div className="relative  rounded-lg">
            <img src="https://img.freepik.com/premium-photo/drawing-peacock-with-crown-it_1309173-28704.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid" alt="Train" className="rounded-t-lg w-full mb-4" />
            <div className="absolute top-0 right-0 bg-[#1B1B1B] p-2 rounded-full -translate-y-1/2 translate-x-1/2">
              <span className="text-white">🚆</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center">Train Freight Transportation</h3>
          <p className="text-gray-500 mt-2 text-center">
            Logistics air freight service delivers the knowledge & opportunity to optimize.
          </p>
          <button className="mt-4 bg-[#2289B5] text-white px-4 py-2 rounded-full hover:bg-[#1B1B1B] transition-colors ml-[25vw] sm:ml-0">
            Read More
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center mt-10 space-x-2">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-[#2289B5] rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default LogisticsSection;
