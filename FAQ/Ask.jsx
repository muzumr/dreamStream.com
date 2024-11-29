import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarsCanvas from '../3dEarth/Stars';

gsap.registerPlugin(ScrollTrigger);

const Ask = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqContainerRef = useRef(null);
  const faqItemsRef = useRef([]);



  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: ' Which programming language should I start with?',
      answer: 'It depends on your goals. For web development, JavaScript is a great choice. If you’re interested in building apps or diving into data science, Python is beginner-friendly and versatile. For mobile development, Swift (iOS) or Kotlin (Android) are popular. Starting with Python or JavaScript is a common recommendation because they have simple syntax .',
    },
    {
      question: ' How long does it take to learn coding?',
      answer: 'Learning to code is an ongoing process. To get comfortable with basics, it may take 3-6 months of consistent practice. Building a deeper understanding and becoming proficient can take 1-2 years or more, depending on your dedication. The key is to learn through building projects and solving real-world problems, not just tutorials.',
    },
    {
      question: ' Do I need to have a math background to code?',
      answer: "No, you don't need advanced math skills for most programming tasks. Basic arithmetic and logical thinking are often enough to start coding. However, certain areas like game development, AI, and data science may require more math. For general software or web development, you can learn without a heavy math background.",
    },
    {
      question: ' How do I stay motivated while learning to code?',
      answer: "Coding can be challenging, but staying motivated is crucial. Set small, achievable goals (like building a simple website or app). Break down complex problems into smaller parts and celebrate your progress. Join online coding communities or find a study group to stay connected with other learners. Also, work on projects that genuinely interest you.",
    },
    {
      question: 'What resources should I use to learn to code?',
      answer: 'There are many free and paid resources available we also provide online and classes in Skardu if You want to learn from us send a email from below and there is also many  resources like FreeCodeCamp, Codecademy, and Khan Academy for interactive lessons, and Books and online forums like Stack Overflow to ask questions and find answers.   ',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent relative">
         <StarsCanvas className=' z-1'/>
      <div
        ref={faqContainerRef}
        className="w-full max-w-3xl p-6 text-white bg-transparent rounded-lg shadow-lg sm:p-10"
      >
        <h2 className="mb-6 text-3xl font-semibold text-center">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div
            key={index}
            ref={(el) => (faqItemsRef.current[index] = el)}
            className="py-4 border-b border-gray-600 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg sm:text-xl">{faq.question}</span>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-45' : ''
                }`}
              >
                <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-40 pt-2' : 'max-h-0'
              }`}
            >
              <p className="text-base sm:text-lg">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ask;
