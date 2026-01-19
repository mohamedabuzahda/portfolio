import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react'
import projectImage from '../assets/image.png'
import projectImage1 from '../assets/image1.png'
import projectImage2 from '../assets/image2.png'
import projectImage3 from '../assets/image3.png'
import projectImage4 from '../assets/image4.png'
import projectImage5 from '../assets/image5.png'
import projectImage6 from '../assets/image6.png'
import projectImage7 from '../assets/image7.png'
import projectImage8 from '../assets/image8.png'



const Projects = () => {

    const [projects,setProjects] = useState([

        {
            id:1,
            imageUrl: projectImage,
            title:"AKAR",
            lang:"ReactJS - Bootstrap - Axios - react-router - react-icons",
            github: "https://github.com/mohamedabuzahda/Real-State",
            live: "https://mohamedabuzahda.github.io/Real-State/",
        },
        {
            id:2,
            imageUrl: projectImage1,
            title:"Amazon Clone",
            lang:"ReactJS - Bootstrap - Axios - react-router - react-icons",
            github: "https://github.com/mohamedabuzahda/Amazon",
            live: "https://mohamedabuzahda.github.io/Amazon/",
        },
        {
            id:3,
            imageUrl: projectImage2,
            title:"AZStore",
            lang:"Html - Bootstrap - Axios - CSS",
            github: "https://github.com/mohamedabuzahda/AZ.Store",
            live: "https://mohamedabuzahda.github.io/AZ.Store/index.html#home",
        },
        {
            id:4,
            imageUrl: projectImage3,
            title:"VivaDecor",
            lang:"Html - Bootstrap - CSS ",
            github: "https://github.com/mohamedabuzahda/VivaDecor",
            live: "https://mohamedabuzahda.github.io/VivaDecor/",
        },
        {
            id:5,
            imageUrl: projectImage4,
            title:"Movie App Master",
            lang:"Html - Bootstrap - CSS - JavaScript",
            github: "https://github.com/mohamedabuzahda/Movie-App-Master",
            live: "https://mohamedabuzahda.github.io/Movie-App-Master/",
        },
        {
            id:6,
            imageUrl: projectImage5,
            title:"Solar Company",
            lang:"Html - CSS - JavaScript",
            github: "https://github.com/mohamedabuzahda/Solar-Company",
            live: "https://mohamedabuzahda.github.io/Solar-Company/",
        },
        {
            id:6,
            imageUrl: projectImage6,
            title:"E-Commerce Cloths",
            lang:"Html - CSS",
            github: "https://github.com/mohamedabuzahda/E-Commerce_Cloths",
            live: "https://mohamedabuzahda.github.io/E-Commerce_Cloths/",
        },
        {
            id:7,
            imageUrl: projectImage7,
            title:"Product Managment System",
            lang:"Html - CSS - JavaScript",
            github: "https://github.com/mohamedabuzahda/Product_Managment_System",
            live: "https://mohamedabuzahda.github.io/Product_Managment_System/",
        },
        {
            id:8,
            imageUrl: projectImage8,
            title:"Coffee Website",
            lang:"Html - CSS - JavaScript",
            github: "https://github.com/mohamedabuzahda/Coffee_Website",
            live: "https://mohamedabuzahda.github.io/Coffee_Website/",
        },
    ]);
  return (
    <>
     <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
    <section id="projects" className=" flex justify-center mt-5">
        <div>
            <div className='text-gray-250 text-3xl font-bold text-center '>My Projects  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 rounded-2xl">
            {projects.map((project) => (
                <div key={project.id} className="project-card border-2 border-gray-500 rounded-lg p-4 m-4 shadow-2xl hover:shadow-cyan-500/50 hover:shadow-2xl transition-shadow duration-300">
                    <div className="overflow-hidden rounded-2xl mb-4">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"/>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-300 mb-4">{project.lang}</p>
                    <div className="flex gap-4">
                        <button className='rounded bg-gradient-to-r from-cyan-400 to-blue-500'><a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-white">GitHub</a></button>
                         <button className='rounded bg-gradient-to-r from-cyan-400 to-blue-500'><a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-white">Live Demo</a></button>
                    </div>
                </div>
            ))}
        </div>
        </div>
      </section>
      </motion.div>
    </>
  )
}

export default Projects
