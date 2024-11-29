// src/Features.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const features = [
  {
    title: 'Marketing Analysis',
    icon: 'fa-chart-line',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Digital Marketing',
    icon: 'fa-bullhorn',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'SEO and Backlinks',
    icon: 'fa-link',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center px-6 py-10 space-y-10 bg-[#1B1B1B]">
      {/* Title Section */}
      <div className="text-center space-y-4 ">
        <span className="bg-[black] text-white px-4 py-1 rounded-full font-semibold uppercase text-xs">
          Feature
        </span>
        <h1 className="text-3xl font-semibold text-gray-900">Our Features</h1>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-2xl">
              <i className={`fas ${feature.icon}`}></i>
              <div className="absolute inset-0 w-20 h-20 -z-10 bg-yellow-200 rounded-full"></div>
            </div>
            <div className="div   w-[20vw] rounded-r-full bg-gradient-to-r from-[#707070]  to-black">
            <h2 className="text-xl font-semibold text-gray-800">{feature.title}</h2>
            </div>
            <p className="text-gray-600 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
