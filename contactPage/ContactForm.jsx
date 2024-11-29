import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_u4pcr3x',
        'template_ucdjqp8',
        {
          from_name: form.name,
          to_name: "muzaffar ali khan",
          from_email: form.email,
          to_email: "muzaffaralikhan819@gmail.com",
          message: form.message,
        },
        'nF3Ttdu1KyG9wTuRS'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="parent flex flex-col lg:flex-row justify-between md:flex-row  items-center h-auto lg:h-[100vh] w-full  overflow-y-hidden sm:mb-6 bg-[#1B1B1B] rounded-2xl mt-4">
      <div className="left p-4 lg:px-[2rem] lg:py-[2rem] w-full lg:w-[50vw] h-auto lg:h-[100%]  flex justify-center items-center flex-col  ">
        <h1 className="font-bold text-3xl lg:text-4xl mb-2">Contact Us</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 lg:gap-4 border-white border-[1px] rounded-2xl px-4 py-2"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 lg:mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="py-3 lg:py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-[#161031]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 lg:mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#161031] py-3 lg:py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 lg:mb-4">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-[#161031] py-3 lg:py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-[#161031] py-2 lg:py-3 px-6 lg:px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary self-center lg:self-start"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="right w-full lg:w-[60vw] h-[50vh] lg:h-[100%] justify-center items-center hidden sm:block  sm:h-[100%]  md:h-[100%]  ">
        <img
          className="h-full lg:h-[90%] w-full lg:w-auto  md:h-[100%] bg-transparent object-cover sm:h-[100%]   "
          src="./img.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactForm;
