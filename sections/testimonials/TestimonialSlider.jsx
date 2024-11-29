import React from 'react';
import './TestimonialSlider.css'; // Import the CSS file

const testimonials = [
    {
        name: " Davis",
        designation: "Creative Director",
        content: "Their innovative approach and dedication made a huge difference in our project. Truly impressive results!",
        image: "https://img.freepik.com/premium-photo/worried-young-man-with-beard-sweatshirt-looking-away-pensive-thinking-standing-troubled-agn_1337460-43037.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid",
      },
      {
        name: "John Reynolds",
        designation: "Chief Technology Officer",
        content: "Professional, punctual, and highly skilled. They turned our vision into reality effortlessly!",
        image: "https://img.freepik.com/free-photo/portrait-handsome-confident-young-man_23-2148531370.jpg",
      },
      {
        name: "alex",
        designation: "Marketing Specialist",
        content: "They were extremely attentive to our needs and provided outstanding service from start to finish.",
        image: "https://img.freepik.com/free-photo/portrait-sad-man_23-2150761640.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid",
      },
      {
        name: "James Wilson",
        designation: "Operations Manager",
        content: "Efficient and organized. Their work improved our processes immensely. I highly recommend them!",
        image: "https://img.freepik.com/free-photo/young-man-blue-shirt-standing-with-his-arms-crossed-white-wall_23-2148223325.jpg",
      },
      {
        name: "Linda Taylor",
        designation: "Human Resources Consultant",
        content: "Excellent communication and a great understanding of our project goals. Exceeded expectations in every way!",
        image: "https://img.freepik.com/free-photo/woman-glasses-standing-with-arms-crossed-smiling_23-2148756028.jpg",
      },
    {
        name: "Jessica Williams",
        designation: "Creative Director",
        content: "The creativity and expertise they brought to our project were unmatched. We couldn’t have asked for a better partner.",
        image: "https://img.freepik.com/free-photo/cheerful-young-woman-smiling-looking-camera-studio-shot-isolated_1258-51504.jpg",
      },
      {
        name: "Ethan Brown",
        designation: "Chief Technology Officer",
        content: "Their technical skills and problem-solving abilities helped us achieve all our project goals on time.",
        image: "https://img.freepik.com/free-photo/portrait-handsome-mature-man-outdoor_23-2149150377.jpg",
      },
      {
        name: "Sophia Martinez",
        designation: "Business Analyst",
        content: "They were very professional and attentive to our needs. The results exceeded our expectations.",
        image: "https://img.freepik.com/free-photo/women-protesting-rights-women-s-day_23-2151356370.jpg?ga=GA1.1.1062691103.1729089081&semt=ais_hybrid",
      },
      {
        name: "Liam Robinson",
        designation: "Operations Manager",
        content: "Their approach to customer satisfaction is exemplary. We highly recommend their services.",
        image: "https://img.freepik.com/free-photo/smiling-young-man-wearing-glasses-isolated_273609-18287.jpg",
      },
      {
        name: "Emily Clark",
        designation: "Digital Marketing Specialist",
        content: "Their attention to detail and innovative ideas took our marketing campaigns to a new level.",
        image: "https://img.freepik.com/free-photo/portrait-pretty-young-woman-smiling-isolated_171337-19208.jpg",
      },
  {
    name: "Alice Johnson",
    designation: "Product Manager",
    content: "This company provided excellent service and truly understood our needs. Highly recommended!",
    image: "https://img.freepik.com/free-photo/cyberpunk-warrior-woman-portrait_23-2150712478.jpg?uid=R116672299&ga=GA1.1.1062691103.1729089081&semt=ais_hybrid",
  },
  {
    name: "Michael Smith",
    designation: "Software Engineer",
    content: "Working with them was a fantastic experience. They exceeded our expectations in every way.",
    image: "https://img.freepik.com/free-photo/handsome-man-casual-clothes-standing-isolated-white-wall-holding-hand-his-head-looking-down_176420-21686.jpg",
  },

  {
    name: "Sara Lee",
    designation: "UX Designer",
    content: "The attention to detail and dedication to quality were remarkable. I couldn't be happier!",
    image: "https://img.freepik.com/free-photo/young-woman-autumn-street-touches-ponytail_273443-4238.jpg",
  },
  {
    name: "David Brown",
    designation: "Marketing Director",
    content: "Their team brought creativity and skill to our project, making the entire process smooth and enjoyable.",
    image: "https://img.freepik.com/free-photo/portrait-handsome-young-man-standing-isolated-grey-background_231208-3178.jpg",
  }
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-container bg-[#1B1B1B]">
      <h2 className="text-lg italic text-gray-400">What Say</h2>
      <h1 className="text-3xl font-bold mb-6">
        <span className="text-blue-500">OUR CLIENT </span>
        <span className="text-gray-100">ABOUT US</span>
      </h1>
      <div className="slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card bg-[#3B82F6]"
          >
            <div className="quote-icon">&ldquo;</div>
            <div className="profile-img-container">
              <div className="profile-img">
                <img src={testimonial.image} alt="Profile" />
              </div>
            </div>
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p className="designation">{testimonial.designation}</p>
              <p className="content">{testimonial.content}</p>
              <div className="rating">★★★★★</div>
            </div>
          </div>
        ))}
      </div>
      <button className="learn-more bg-[#3B82F6]">LEARN MORE</button>
    </div>
  );
};

export default TestimonialSlider;
