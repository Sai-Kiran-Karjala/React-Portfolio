import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { TbArrowRightBar } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-cyan-900 via-cyan-700 to-gray-500 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-900 py-4 max-w-md">
            I'm a seasoned full stack developer with three years of professional
            experience. I thrive on crafting robust and scalable solutions that
            bridge the gap between front-end and back-end development.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#E66538] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TbArrowRightBar size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="myImage"
            className="rounded-2xl mx-auto w-2/3 md:full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
