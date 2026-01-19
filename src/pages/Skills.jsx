import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiAxios } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";   

function Skills() {
  const skills = [
    {
    name: "HTML ",
    level: "Advanced",
    percent: 100,
    icon: <FaHtml5 className="text-orange-500 text-2xl" />,
  },
    {
    name: " CSS",
    level: "Advanced",
    percent: 100,
    icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    percent: 90,
    icon: <FaJs className="text-yellow-400 text-2xl" />,
  },
  {
    name: "React",
    level: "Advanced",
    percent: 85,
    icon: <FaReact className="text-cyan-400 text-2xl" />,
  },
  {
    name: "Bootstrap",
    level: "Advanced",
    percent: 90,
    icon: <FaBootstrap className="text-purple-600 text-2xl" />,
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    percent: 80,
    icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
  },
  {
    name: "Axios",
    level: "Advanced",
    percent: 80,
    icon: <SiAxios className="text-indigo-500 text-2xl" />,
  },
  {
    name: "Framer Motion",
    level: "Advanced",
    percent: 80,
    icon: <TbBrandFramerMotion className="text-indigo-500 text-2xl" />,
  },
  ];
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}   // يبدأ من بعيد على اليمين
      animate={{ x: 0, opacity: 1 }}     // يوصل لمكانه الطبيعي
      transition={{ duration: 0.8 }}
    >
    <section id="skills" className="min-h-screen flex justify-center px-4 py-8">
     <div className="w-full max-w-6xl">
         <div className='text-gray-250 text-3xl font-bold text-center'>My Skills</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 md:p-6 rounded-xl shadow-2xl hover:shadow-cyan-500/50 hover:shadow-2xl border border-gray-700 transition-all duration-300 hover:border-cyan-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl md:text-3xl">{skill.icon}</span>
              <div className="min-w-0">
                <h3 className="font-bold text-white text-base md:text-lg truncate">{skill.name}</h3>
                <p className="text-xs md:text-sm text-cyan-400">{skill.level}</p>
              </div>
            </div>

            <div className="w-80 bg-gray-700 rounded-full h-3 md:h-4 overflow-hidden flex items-center relative mt-2">
              <div
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${skill.percent}%` }}
              >
                <span className="text-white font-bold text-xs">{skill.percent}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div>
    </section>
    </motion.div>
  );
}

export default Skills;
