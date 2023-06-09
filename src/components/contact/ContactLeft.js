import React from 'react'
import { FaDribbble,FaDev,FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Chamano Sidney</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Feel free to reach out to me for any inquiries or collaborations.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">065 621 2377</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">chamano.sr@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
            <a href="https://dev.to/chamanos" rel="noreferrer" target="_blank">
              <span className="bannerIcon">
                <FaDev />
              </span>
            </a>

            <a href="https://github.com/chamanoS" rel="noreferrer" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/chamano-sidney-3b343611a/" rel="noreferrer" target="_blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://dribbble.com/chamano" rel="noreferrer" target="_blank">
              <span className="bannerIcon">
                <FaDribbble />
              </span>
            </a>
          </div>
      </div>
    </div>
  );
}

export default ContactLeft