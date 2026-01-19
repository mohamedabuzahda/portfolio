import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/WhatsApp_Image_2025-02-28_at_13.35.54_4771104f-removebg-preview.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub,FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <motion.div
      initial={{ x: -300, opacity: 0 }}   
      animate={{ x: 0, opacity: 1 }}     
      transition={{ duration: 0.8 }}
    >
    <section id="home" className="flex justify-center px-4 py-8">
       <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-5 w-full max-w-6xl">
        <div className="flex-1 min-w-0">
          <h2 className="text-gray-100 text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Hi 👋, I'm Mohamed
          </h2>
          <h3 className="text-gray-200 text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            Front-End Developer
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            I'm a Junior software engineer specialized in ReactJS with 8 months
            of hands-on experience building responsive, user-friendly, and
            modern web applications. Skilled in JavaScript, HTML, CSS, and
            React, with a passion for delivering seamless user experiences and
            solving real-world problems through clean, maintainable code.{" "}
          </p>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button className="w-full md:w-[200px] h-12 md:h-14 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-2 px-4 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition duration-300 shadow-lg hover:shadow-cyan-500/50 hover:shadow-xl text-sm md:text-base">
              <a
                href="https://wa.me/201093568986"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2"
              >
                <IoLogoWhatsapp className="text-xl md:text-2xl" /> Contact WhatsApp
              </a>
            </button>
            <button className="w-full md:w-[200px] h-12 md:h-14 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-2 px-4 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition duration-300 shadow-lg hover:shadow-cyan-500/50 hover:shadow-xl text-sm md:text-base">
              <a
                href="https://github.com/mohamedabuzahda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2"
              >
                <FaGithub className="text-xl md:text-2xl" /> GitHub
              </a>
            </button>
            <button className="w-full md:w-[200px] h-12 md:h-14 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-2 px-4 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition duration-300 shadow-lg hover:shadow-cyan-500/50 hover:shadow-xl text-sm md:text-base">
              <a
                href="https://www.linkedin.com/in/mohamed-osama-abuzahda-1b8a05256"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2"
              >
                <FaLinkedin className="text-xl md:text-2xl" /> LinkedIn
              </a>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-6 md:mt-0">
          <img
            src={logo}
            alt="logo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-2 border-cyan-400 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
    </motion.div>
    </>
  );
};

export default Home;
