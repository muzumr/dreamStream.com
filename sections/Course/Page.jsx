// src/App.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DiIllustrator } from "react-icons/di";

const courses = [
  { name: 'Github', icon: "fa-brands fa-github" },
  { name: 'Amazon', icon: "fa-brands fa-amazon" },
  { name: 'UI/UX', icon: "fa-duotone fa-solid fa-laptop" },
  { name: 'Angular', icon: 'fa-brands fa-angular' },
  { name: 'JavaScript', icon: 'fa-brands fa-js-square' },
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'Vue', icon: 'fa-brands fa-vuejs' },
];

const App = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 space-y-8 bg-[#1B1B1B] h-[80vh] sm:h-[100vh] sm:mb-[10vh]">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-blue-600 text-2xl font-bold">TUTORIAL COURSES</h2>
        <h1 className="text-2xl font-semibold text-gray-900">Choose Course</h1>
      </div>

      {/* Courses Section */}
      <div className="flex flex-wrap justify-center items-center space-x-6 space-y-4 md:space-y-0 md:flex-nowrap">
        {courses.map((course) => (
          <div
            key={course.name}
            className="flex flex-col items-center space-y-2 border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-20 md:w-auto bg-gray-100 shadow-gray-300"
          >
            <i className={`${course.icon} text-3xl text-blue-500`}></i>
            <span className="font-medium text-gray-700 text-sm">{course.name}</span>
          </div>
        ))}
      </div>

      {/* Search Bar and Social Links */}
      <div className="w-full max-w-lg px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center md:items-center md:border-t border-gray-200 pt-4">
          {/* Search Bar */}
          <div className="flex w-full md:flex-grow items-center border border-gray-300 rounded-lg overflow-hidden mb-4 md:mb-0 ">
            <input
              type="text"
              placeholder="Search subjects"
              className="w-full px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-3 md:pl-4 sm:pb-10">
            <a href="#" className="text-blue-600 text-lg"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-blue-400 text-lg"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-blue-700 text-lg"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
