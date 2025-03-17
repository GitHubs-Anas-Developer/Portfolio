import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiAxios,
  SiTypescript,
  SiGraphql,
  SiFirebase,
  SiSocketdotio,
  SiJest,
  SiCypress,
  SiJsonwebtokens,
  SiPostman,
  SiSwagger,
  SiMongoose,
  SiPrisma,
  SiDotenv,
  SiVercel,
  SiRender,
  SiDocker,
} from "react-icons/si";

// ✅ Reusable Heading Component
const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold text-white uppercase tracking-wide">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-gray-300 mt-2">{subtitle}</p>}
    <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
  </div>
);

// ✅ Skill Card Component
const SkillCard = ({ name, icon, description, color }) => (
  <div className="p-6 border rounded-lg shadow-xl bg-white transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
    <div className="text-5xl mb-4" style={{ color }}>
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // ✅ React & Frontend Technologies
  const frontendSkills = [
    {
      name: "React",
      icon: <FaReact />,
      description: "JavaScript UI Library",
      color: "#61DBFB",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      description: "React Framework",
      color: "#000000",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      description: "State Management",
      color: "#764ABC",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      description: "CSS Framework",
      color: "#38B2AC",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      description: "Frontend Build Tool",
      color: "#646CFF",
    },
    {
      name: "Axios",
      icon: <SiAxios />,
      description: "HTTP Client",
      color: "#5A29E4",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
      description: "API Query Language",
      color: "#E535AB",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      description: "Realtime Database & Auth",
      color: "#FFCA28",
    },
  ];

  // ✅ Node.js & Backend Technologies
  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      description: "JavaScript Runtime",
      color: "#8CC84B",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      description: "Backend Framework",
      color: "#000000",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      description: "NoSQL Database",
      color: "#4DB33D",
    },
    {
      name: "Mongoose",
      icon: <SiMongoose />,
      description: "MongoDB ORM",
      color: "#880000",
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
      description: "Next-Gen ORM",
      color: "#2D3748",
    },
    {
      name: "Socket.io",
      icon: <SiSocketdotio />,
      description: "WebSockets",
      color: "#010101",
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens />,
      description: "Authentication",
      color: "#000000",
    },
    {
      name: "Dotenv",
      icon: <SiDotenv />,
      description: "Environment Variables",
      color: "#ECD53F",
    },
  ];

  // ✅ DevOps & Deployment
  const devOpsSkills = [
    {
      name: "Git",
      icon: <FaGitAlt />,
      description: "Version Control",
      color: "#F1502F",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      description: "Code Hosting",
      color: "#333",
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      description: "Containerization",
      color: "#2496ED",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      description: "Frontend Deployment",
      color: "#000000",
    },
    {
      name: "Render",
      icon: <SiRender />,
      description: "Backend Deployment",
      color: "#4353FF",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      description: "API Testing",
      color: "#FF6C37",
    },
    {
      name: "Swagger",
      icon: <SiSwagger />,
      description: "API Documentation",
      color: "#85EA2D",
    },
    {
      name: "NPM",
      icon: <FaNpm />,
      description: "Package Manager",
      color: "#CB3837",
    },
  ];

  // ✅ Testing & QA
  const testingSkills = [
    {
      name: "Jest",
      icon: <SiJest />,
      description: "JavaScript Testing",
      color: "#C21325",
    },
    {
      name: "Cypress",
      icon: <SiCypress />,
      description: "End-to-End Testing",
      color: "#17202C",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      id="skills"
      className="bg-gradient-to-r from-[#055081] to-[#3C7F9F] py-20 px-6"
    >
      <div className="container mx-auto">
        {/* ✅ Frontend Skills */}
        <SectionHeading
          title="Frontend Technologies"
          subtitle="React-based UI development"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* ✅ Backend Skills */}
        <SectionHeading
          title="Backend Technologies"
          subtitle="Server-side tools for MERN"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {backendSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* ✅ DevOps & Deployment */}
        <SectionHeading
          title="DevOps & Deployment"
          subtitle="Tools for scaling and automation"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {devOpsSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* ✅ Testing & QA */}
        <SectionHeading
          title="Testing & QA"
          subtitle="Ensuring quality and stability"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {testingSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
