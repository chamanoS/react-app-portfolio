import React from 'react'
import Title from '../layouts/Title'
import { BsGithub } from "react-icons/bs";
import { projectOne, projectTwo, projAI, projEcom, projPort, projTodo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Portfolio Website"
          des=" This portfolio website was built using React, Node.js, and MongoDB. It features a blog creation and posting system, search functionality, comment section, contact form, and download capability. "
          src={projPort}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" This e-commerce platform was built to offers secure payment processing, mobile optimization, and robust inventory management to create a user-friendly online shopping experience that increases sales."
          src={projEcom}
        />
        <ProjectsCard
          title="Chat-GPT App"
          des=" 
          This ChatGPT app project was built using JavaScript and APIs. It leverages AI language models to offer conversational experiences with natural language processing capabilities.!"
          src={projAI}
        />
        <ProjectsCard
          title="Todo List App"
          des="These todo list apps were built using React, JavaScript, and Angular. They showcase the developer's proficiency in front-end development, UI/UX design, and project management. The apps offer intuitive task management features and demonstrate the developer's ability to create efficient, user-friendly interfaces."
          src={projTodo}
        />
        <ProjectsCard
          title="PDF-Practice Book"
          des="This ebook project was created using FPDF, PHP, MySQL, and ChatGPT for content generation. The result is a professional-grade ebook that showcases the developer's expertise in backend development, database management, and AI-powered content generation."
          src={projectOne}
        />
        <ProjectsCard
          title="UI/UX Design"
          des=" These designs were created using Figma, Canva, HTML, and CSS. They showcase the developer's skill in front-end development, UI/UX design, and graphic design. The designs offer visually appealing and user-friendly interfaces that cater to the needs of clients in various industries"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects