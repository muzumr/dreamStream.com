import React from 'react';
import { FaCode, FaServer, FaPalette, FaDatabase, FaTools, FaBug, FaGlobe } from 'react-icons/fa';
import './Circle.css';

const Circle = () => {
  return (
    <div className="relative min-h-screen pl-[35vw] items-center justify-center bg-[#1B1B1B] hidden md:block">
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
        // style={{
        //   backgroundImage: 'url("https://th.bing.com/th/id/OIP.9Rhf-Puimwj9yq_G2HrIywHaEF?w=316&h=180&c=7&r=0&o=5&pid=1.7")',
        // }}
      />

      {/* Circular Yellow Background */}
      <div className="yellow-circle relative flex items-center justify-center w-[70vh] h-[70vh] bg-white rounded-full shadow-lg shadow-black mb-[10vh]">
        <div className=" parent text-center-circle absolute text-center text-white font-bold text-2xl bg-black rounded-full h-[50vh] w-[50vh] flex justify-center items-center flex-col shadow-2xl shadow-[#423f3f]">
          <p>INFOGRAPHIC</p>
          <p>TEMPLATE</p>
          <FaGlobe className="text-white text-4xl  mr-2" />
        </div>

        {/* Info Boxes */}
        <div className="absolute w-full h-full flex flex-col items-center justify-between px-10 py-5 mt-[49vh]">
          {/* Box 1: Frontend Development */}
          <div className="info-box frontend-development flex items-center space-x-3 absolute top-[12vh] -left-[9vw] transform -translate-x-1/4">
            <div className="flex items-center justify-center w-[17vw] h-[15vh] bg-black text-white p-3 rounded-full shadow-md shadow-[#423f3f]">
              <div className="flex items-center">
                <FaCode className="text-white text-4xl mb-[1%] mr-2" />
                <span>
                  <svg width="2" height="70" className="my-2 mx-2">
                    <line x1="2" y1="0" x2="2" y2="80" stroke="white" strokeWidth="4" />
                  </svg>
                </span>
              </div>
              <div>
                <span className="font-bold text-white">01</span>
                <p className="text-xs font-bold">Frontend Development</p>
                <p className="text-xs">HTML, CSS, React</p>
              </div>
            </div>
          </div>

          {/* Box 2: Backend Development */}
          <div className="info-box backend-development flex items-center space-x-3 absolute bottom-[24vh] -left-[1vh] transform -translate-x-1/2">
            <div className="flex items-center justify-center w-[17vw] h-[15vh] bg-black text-white p-3 rounded-full shadow-md shadow-gray-800">
              <div className="flex items-center">
                <FaServer className="text-white text-4xl mb-[1%] mr-2" />
                <span>
                  <svg width="2" height="70" className="my-2 mx-2">
                    <line x1="2" y1="0" x2="2" y2="80" stroke="white" strokeWidth="4" />
                  </svg>
                </span>
              </div>
              <div>
                <span className="font-bold text-white">02</span>
                <p className="text-xs font-bold">Backend Development</p>
                <p className="text-xs">Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>

          {/* Box 3: UI/UX Design */}
          <div className="info-box uiux-design flex items-center space-x-3 absolute bottom-10 left-0 transform -translate-x-1/2">
            <div className="flex items-center justify-center w-[17vw] h-[15vh] bg-black text-white p-3 rounded-full shadow-md shadow-gray-800 ml-[12vw]">
              <div className="flex items-center">
                <FaPalette className="text-white text-4xl mb-[1%] mr-2" />
                <span>
                  <svg width="2" height="70" className="my-2 mx-2">
                    <line x1="2" y1="0" x2="2" y2="80" stroke="white" strokeWidth="4" />
                  </svg>
                </span>
              </div>
              <div>
                <span className="font-bold text-white">03</span>
                <p className="text-xs font-bold">UI/UX Design</p>
                <p className="text-xs">Figma, Sketch, Adobe XD</p>
              </div>
            </div>
          </div>

          {/* Box 4: Database Management */}
          <div className="info-box database-management flex items-center space-x-3 absolute bottom-10 right-0 transform translate-x-1/2">
            <div className="flex items-center justify-center w-[17vw] h-[15vh] bg-black text-white p-3 rounded-full shadow-md shadow-gray-800 mr-[15vw]">
              <div className="flex items-center">
                <FaDatabase className="text-white text-4xl mb-[1%] mr-2" />
                <span>
                  <svg width="2" height="70" className="my-2 mx-2">
                    <line x1="2" y1="0" x2="2" y2="80" stroke="white" strokeWidth="4" />
                  </svg>
                </span>
              </div>
              <div>
                <span className="font-bold text-white">04</span>
                <p className="text-xs font-bold">Database Management</p>
                <p className="text-xs">MySQL, MongoDB, PostgreSQL</p>
              </div>
            </div>
          </div>

          {/* Box 5: DevOps */}
          <div className="info-box devops flex items-center space-x-3 absolute bottom-[24vh] right-[1vw] transform translate-x-1/2">
            <div className="flex items-center justify-center w-[17vw] h-[15vh] bg-black text-white p-3 rounded-full shadow-md shadow-gray-800">
              <div className="flex items-center">
                <FaTools className="text-white text-4xl mb-[1%] mr-2" />
                <span>
                  <svg width="2" height="70" className="my-2 mx-2">
                    <line x1="2" y1="0" x2="2" y2="80" stroke="white" strokeWidth="4" />
                  </svg>
                </span>
              </div>
              <div>
                <span className="font-bold text-white">05</span>
                <p className="text-xs font-bold">DevOps</p>
                <p className="text-xs">AWS, Docker, Jenkins</p>
              </div>
            </div>
          </div>

          {/* Box 6: Testing */}
          <div className="info-box testing flex items-center space-x-3 absolute top-[12vh] -right-[9vw] transform translate-x-1/4">
            <div className="flex items-center justify-center w-[17vw] h-[15vh] bg-black text-white p-3 rounded-full shadow-md shadow-gray-800">
              <div className="flex items-center">
                <FaBug className="text-white text-4xl mb-[1%] mr-2" />
                <span>
                  <svg width="2" height="70" className="my-2 mx-2">
                    <line x1="2" y1="0" x2="2" y2="80" stroke="white" strokeWidth="4" />
                  </svg>
                </span>
              </div>
              <div>
                <span className="font-bold text-white">06</span>
                <p className="text-xs font-bold">Testing</p>
                <p className="text-xs">Jest, Mocha, Selenium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
