import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaSass, FaBootstrap, FaGitAlt, FaGithub, FaNpm, FaDocker } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiAxios, SiReactquery, SiGraphql, SiJest, SiPostgresql } from "react-icons/si";

function SkillsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slower duration for smoother animation
      once: true,
    });
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 />, description: "Markup language for web pages", color: "#E44D26" },
    { name: "CSS", icon: <FaCss3Alt />, description: "Style sheet language for web design", color: "#264DE4" },
    { name: "JavaScript", icon: <FaJs />, description: "Programming language for web development", color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, description: "JavaScript library for building user interfaces", color: "#61DBFB" },
    { name: "Redux", icon: <SiRedux />, description: "State management for React apps", color: "#764ABC" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "Utility-first CSS framework", color: "#38B2AC" },
    { name: "Bootstrap", icon: <FaBootstrap />, description: "Front-end framework for responsive design", color: "#7952B3" },
    { name: "Sass", icon: <FaSass />, description: "CSS preprocessor for better styling", color: "#CC6699" },
    { name: "Git", icon: <FaGitAlt />, description: "Version control system", color: "#F1502F" },
    { name: "GitHub", icon: <FaGithub />, description: "Platform for version control and collaboration", color: "#333" },
    { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database", color: "#4DB33D" },
    { name: "Express.js", icon: <SiExpress />, description: "Web framework for Node.js", color: "#000000" },
    { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime for server-side development", color: "#8CC84B" },
    { name: "Next.js", icon: <SiNextdotjs />, description: "React framework for server-side rendering", color: "#000000" },
    // { name: "Material UI", icon: <SiMaterialui />, description: "React component library with Material Design", color: "#007FFF" },
    { name: "Axios", icon: <SiAxios />, description: "Promise-based HTTP client for JavaScript", color: "#5A29E4" },
    { name: "React Query", icon: <SiReactquery />, description: "Data fetching and synchronization for React", color: "#FF4154" },
    { name: "NPM", icon: <FaNpm />, description: "Package manager for JavaScript", color: "#CB3837" },
    { name: "Docker", icon: <FaDocker />, description: "Containerization platform", color: "#2496ED" },
    { name: "GraphQL", icon: <SiGraphql />, description: "Query language for APIs", color: "#E10098" },
    { name: "Jest", icon: <SiJest />, description: "Testing framework for JavaScript", color: "#C13B36" },
    { name: "PostgreSQL", icon: <SiPostgresql />, description: "Open-source relational database", color: "#336791" },
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
              {/* Icon with color */}
              <div
                className="text-5xl mb-4"
                style={{ color: skill.color }}
                aria-label={`Icon for ${skill.name}`}
              >
                {skill.icon}
              </div>
              
              {/* Skill name */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{skill.name}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
