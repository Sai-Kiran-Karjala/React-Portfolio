import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-cyan-900 via-cyan-700 to-gray-500 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-[#E66538] tracking-widest inline">
            Contact
          </p>
          <p className="py-6">Submit the form to get in touch with me</p>
        </div>
        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/219c580f-dc2f-4b44-a7ee-688404f76bf6"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              placeholder="Leave a message"
            ></textarea>
            <button className="text-white bg-[#E66538] py-3 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
