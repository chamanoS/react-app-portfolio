import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Design"
          des="We specialize in custom web design that is visually appealing, user-friendly, responsive, and optimized for search engines."
        />
        <Card
          title="App Development"
          des="We provide custom app development tailored to meet the unique needs of the client and are designed to be user-friendly and functional."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Consultation"
          des="Our consulting services cover technology, architecture, performance, security, and project management. We provide advice to help clients achieve optimal results in their software projects."
          icon={<SiProgress />}
        />
        <Card
          title="Digital Marketing"
          des="We offer a range of digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, CRO, and analytics."
          icon={<FaMobile />}
        />
        <Card
          title="Content Writing"
          des="Our content is designed to help businesses create high-quality, engaging, and relevant content for their websites, blogs, and social media platforms. We create content that resonates with your target audience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Tutoring"
          des="The services offered include providing guidance and instruction to beginners on getting started with coding, as well as teaching them about the different tech stacks used in frontend and backend."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
