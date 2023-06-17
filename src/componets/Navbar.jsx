import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 1,
      link: "about",
    },
    {
      id: 1,
      link: "portfolio",
    },
    {
      id: 1,
      link: "experience",
    },
    {
      id: 1,
      link: "contact",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full h-20 text-white bg-cyan-900 fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Saikiran</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 uppercase cursor-pointer font-medium text-gray-400 hover:scale-105 duration-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={handleNav}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-900 via-cyan-700 to-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 text-gray-300 uppercase cursor-pointer py-6 text-4xl"
            >
              <Link onClick={handleNav} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
