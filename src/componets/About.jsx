import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-cyan-900 via-cyan-700 to-gray-500 text-gray-900"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold tracking-widest inline border-b-4 border-[#E66538] text-white">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        As a seasoned full stack developer with three years of industry experience, I possess a comprehensive skill set that combines front-end and back-end expertise. I excel in designing and developing robust web applications, leveraging my proficiency in HTML, CSS, JavaScript, and various frameworks. With a strong focus on user-centric design and meticulous attention to detail, I am adept at delivering high-quality software solutions that meet clients' needs.
        </p>
        <br />
        <p className="text-xl">
        Throughout my career, I have successfully collaborated with cross-functional teams to deliver innovative solutions, utilizing my knowledge of database management, API integration, and server-side technologies. My experience spans working on scalable architectures, implementing efficient algorithms, and optimizing application performance. With a passion for continuous learning and staying updated with the latest industry trends, I am committed to delivering cutting-edge solutions and contributing to the success of any project I undertake.
        </p>
      </div>
    </div>
  );
};

export default About;
