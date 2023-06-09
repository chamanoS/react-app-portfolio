import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDribbble, FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["FullStack Developer", "Content Writer", "Web Designer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 9000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Chamano</span>
        </h1>
        <h3 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h3>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A passionate fullstack developer with expertise in JavaScript. I
          specialize in creating dynamic web applications and implementing
          innovative solutions. Explore my portfolio and join me on this journey
          of building exceptional digital experiences.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
    </div>
  );
};

export default LeftBanner;
