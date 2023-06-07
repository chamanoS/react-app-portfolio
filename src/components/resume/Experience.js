import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer Intern"
            subTitle="Application developer - The Digital Academy (2019 - 2020"
            result="Johanessburg"
            des="As a frontend developer intern, I gained valuable experience working with MEAN stack technology, contributing to the development of business applications and app presentations. I actively participated in real-life business projects, applying my skills in creating interactive and engaging user interfaces."
          />
          <ResumeCard
            title="Microsoft Scholarship Bootcamp"
            subTitle="Deviare - (2020 - 2021)"
            result="Online"
            des="I completed a rapid Microsoft bootcamp with Deviare, focusing on JavaScript, Java, Python, and Angular technologies. The intensive program provided comprehensive training and practical experience in these key areas, enhancing my proficiency in building robust and dynamic web applications."
          />
          <ResumeCard
            title="Fullstack Application Developer"
            subTitle="M & T Development - (2022 - 2023)"
            result="Centurion"
            des="As a fullstack developer, I contributed by creating intuitive interfaces and implementing new features. I gained experience working with technologies such as web sockets, fpdf for PDF generation, and performing CRUD and data operations. Additionally, I actively participated in hackathons, showcasing my ability to quickly prototype and deliver innovative solutions."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
