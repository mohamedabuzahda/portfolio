import React, { useState } from "react";
import {
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { TbFileCv } from "react-icons/tb";

const Contact = () => {
  const [contacts] = useState([
    {
      id: 1,
      method: "Whatsapp",
      link: "https://wa.me/201093568986",
      icon: <IoLogoWhatsapp className="text-2xl" />,
    },
    {
      id: 2,
      method: "Github",
      link: "https://github.com/mohamedabuzahda",
      icon: <IoLogoGithub className="text-2xl" />,
    },
    {
      id: 3,
      method: "LinkedIn",
      link: "https://www.linkedin.com/in/mohamed-abuzahda-700812254",
      icon: <IoLogoLinkedin className="text-2xl" />,
    },
    {
      id: 4,
      method: "CV",
      link: "https://drive.google.com/file/d/1AQwA1QWGJbBqbmdqDVMn-pP5dcfo7DU-/view?usp=sharing",
      icon: <TbFileCv className="text-2xl" />,
    },
  ]);

  return (
    <section id="contact" className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-6xl">
        
        <h2 className="text-gray-250 text-3xl font-bold text-center">
          Contact with me
        </h2>

       
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {contacts.map((contact) => (
            <div key={contact.id} className="w-full sm:w-auto">
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center
                  gap-3
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  text-black font-bold
                  py-3 px-4
                  rounded-xl
                  transition-all duration-300
                  w-full sm:w-[260px] md:w-[300px]
                  shadow-2xl hover:shadow-cyan-500/50
                  border border-gray-700 hover:border-cyan-500
                  hover:scale-105
                "
              >
                {contact.icon}
                <span>{contact.method}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
