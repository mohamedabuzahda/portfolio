import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center gap-10 font-medium text-lg mb-5 px-4 py-3 shadow-lg hover:shadow-cyan-500/50 hover:shadow-xl transition-shadow duration-300">
        <div>
          <span className="hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:rounded-lg hover:text-black hover:px-3 hover:py-1 transition duration-300 cursor-pointer">
            mohamed abuzahda
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 text-2xl hover:text-cyan-400 transition duration-300"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-black hover:font-bold hover:cursor-pointer hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:px-3 hover:py-1 transition duration-300 hover:rounded-lg"
          >
            Home
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-black hover:font-bold hover:cursor-pointer hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:px-3 hover:py-1 transition duration-300 hover:rounded-lg"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-black hover:font-bold hover:cursor-pointer hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:px-3 hover:py-1 transition duration-300 hover:rounded-lg"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-black hover:font-bold hover:cursor-pointer hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:px-3 hover:py-1 transition duration-300 hover:rounded-lg"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 right-0 bg-slate-800 border border-cyan-400 rounded-lg p-4 w-48 shadow-lg flex flex-col gap-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={toggleMenu}
              className="hover:text-cyan-400 hover:cursor-pointer transition duration-300"
            >
              Home
            </Link>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={toggleMenu}
              className="hover:text-cyan-400 hover:cursor-pointer transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={toggleMenu}
              className="hover:text-cyan-400 hover:cursor-pointer transition duration-300"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={toggleMenu}
              className="hover:text-cyan-400 hover:cursor-pointer transition duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
