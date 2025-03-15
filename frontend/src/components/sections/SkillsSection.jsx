import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSass, FaBootstrap, FaGitAlt, FaGithub, FaNpm, FaDocker } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiAxios, SiReactquery, SiGraphql, SiJest, SiPostgresql, SiPostman, SiReacthookform, SiImmer, SiLodash, SiVite, SiWebpack, SiCypress, SiFramer, SiChakraui } from "react-icons/si";

function SkillsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, description: "Markup language for web pages", color: "#E44D26" },
    { name: "CSS", icon: <FaCss3Alt />, description: "Style sheet language for web design", color: "#264DE4" },
    { name: "JavaScript", icon: <FaJs />, description: "Programming language for web development", color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, description: "JavaScript library for building UIs", color: "#61DBFB" },
    { name: "Redux", icon: <SiRedux />, description: "State management for React apps", color: "#764ABC" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework", color: "#38B2AC" },
    { name: "Bootstrap", icon: <FaBootstrap />, description: "Front-end framework for responsive design", color: "#7952B3" },
    { name: "Sass", icon: <FaSass />, description: "CSS preprocessor for better styling", color: "#CC6699" },
    { name: "Git", icon: <FaGitAlt />, description: "Version control system", color: "#F1502F" },
    { name: "GitHub", icon: <FaGithub />, description: "Platform for version control", color: "#333" },
    { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database", color: "#4DB33D" },
    { name: "PostgreSQL", icon: <SiPostgresql />, description: "Relational database system", color: "#336791" },
    { name: "Express.js", icon: <SiExpress />, description: "Web framework for Node.js", color: "#000000" },
    { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime for server-side", color: "#8CC84B" },
    { name: "Next.js", icon: <SiNextdotjs />, description: "React framework for server-side rendering", color: "#000000" },
    { name: "Chakra UI", icon: <SiChakraui />, description: "Modern UI component library", color: "#319795" },
    { name: "Axios", icon: <SiAxios />, description: "Promise-based HTTP client", color: "#5A29E4" },
    { name: "React Query", icon: <SiReactquery />, description: "Data fetching for React", color: "#FF4154" },
    { name: "NPM", icon: <FaNpm />, description: "Package manager for JavaScript", color: "#CB3837" },
    { name: "Postman", icon: <SiPostman />, description: "API testing tool", color: "#FF6C37" },
    { name: "GraphQL", icon: <SiGraphql />, description: "Query language for APIs", color: "#E10098" },
    { name: "React Hook Form", icon: <SiReacthookform />, description: "Form handling in React", color: "#EC5990" },
    { name: "Immer", icon: <SiImmer />, description: "Immutable state management", color: "#5A29E4" },
    { name: "Lodash", icon: <SiLodash />, description: "JavaScript utility library", color: "#3492FF" },
    { name: "Vite", icon: <SiVite />, description: "Fast frontend build tool", color: "#646CFF" },
    { name: "Webpack", icon: <SiWebpack />, description: "Module bundler for JavaScript", color: "#8DD6F9" },
    { name: "Docker", icon: <FaDocker />, description: "Containerization platform", color: "#2496ED" },
    { name: "Jest", icon: <SiJest />, description: "Testing framework for JavaScript", color: "#C13B36" },
    { name: "Cypress", icon: <SiCypress />, description: "End-to-end testing framework", color: "#17202C" },
    { name: "Framer Motion", icon: <SiFramer />, description: "Animation library for React", color: "#0055FF" },
  ];

  return (
    <section
      data-aos="fade-up"
      id="skills"
      className="bg-gradient-to-r from-[#055081] to-[#3C7F9F] py-20 px-6"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          My Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-xl bg-white transform transition-transform duration-300 hover:scale-105 flex flex-col items-center"
            >
              <div className="text-5xl mb-4" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
