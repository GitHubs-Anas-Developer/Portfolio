import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
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
  SiDotenv,
  SiVercel,
  SiRender,
  SiDocker,
} from "react-icons/si";

// ✅ Reusable Heading Component
const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12 mt-7">
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
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);

function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const frontendSkills = [
    { name: "React", icon: <FaReact />, description: "JavaScript UI Library", color: "#61DBFB" },
    { name: "Next.js", icon: <SiNextdotjs />, description: "React Framework", color: "#000000" },
    { name: "Redux", icon: <SiRedux />, description: "State Management", color: "#764ABC" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, description: "CSS Framework", color: "#38B2AC" },
    { name: "Vite", icon: <SiVite />, description: "Frontend Build Tool", color: "#646CFF" },
    { name: "Axios", icon: <SiAxios />, description: "HTTP Client", color: "#5A29E4" },
    { name: "GraphQL", icon: <SiGraphql />, description: "API Query Language", color: "#E535AB" },
    { name: "Firebase", icon: <SiFirebase />, description: "Realtime Database & Auth", color: "#FFCA28" },
    {
      name: "Zustand",
      icon: <img src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560" alt="zustand" className=" h-10" />,
      description: "Minimal Global State Manager",
      color: "#FF9E0F",
    },
    {
      name: "Material UI",
      icon: <img src="https://mui.com/static/logo.png" alt="mui" className="w-10 h-10" />,
      description: "React UI Framework",
      color: "#007FFF",
    },
    {
      name: "Bootstrap",
      icon: <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="bootstrap" className="w-10 h-10" />,
      description: "CSS Framework",
      color: "#7952B3",
    },
    {
      name: "ShadCN UI",
      icon: <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" alt="shadcn" className="w-10 h-10" />,
      description: "Accessible UI Components",
      color: "#000000",
    },
    { name: "TypeScript", icon: <SiTypescript />, description: "Typed JavaScript", color: "#3178C6" },
    {
      name: "React Query",
      icon: <img src="data:image/jpeg;base64,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" alt="" className=" h-10" />,
      description: "Async State Manager",
      color: "#FF4154",
    },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript Runtime", color: "#8CC84B" },
    { name: "Express.js", icon: <SiExpress />, description: "Backend Framework", color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL Database", color: "#4DB33D" },
    { name: "Mongoose", icon: <SiMongoose />, description: "MongoDB ORM", color: "#880000" },
    { name: "Socket.io", icon: <SiSocketdotio />, description: "WebSockets", color: "#010101" },
    { name: "JWT", icon: <SiJsonwebtokens />, description: "Authentication", color: "#000000" },
    { name: "Dotenv", icon: <SiDotenv />, description: "Environment Variables", color: "#ECD53F" },
    {
      name: "Redis",
      icon: <img src="https://cdn.worldvectorlogo.com/logos/redis.svg" alt="redis" className="w-10 h-10" />,
      description: "In-Memory Data Store",
      color: "#DC382D",
    },
    {
      name: "PostgreSQL",
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="postgres" className="w-10 h-10" />,
      description: "Relational DBMS",
      color: "#336791",
    },
    {
      name: "Stripe",
      icon: <img src="" alt="" className="w-10 h-10" />,
      description: "Payment Integration",
    },
    {
      name: "Clerk Auth",
      icon: <img src="https://avatars.githubusercontent.com/u/80195107?s=200&v=4" alt="clerk" className="w-10 h-10" />,
      description: "Authentication Service",
      color: "#3B82F6",
    },
  ];

  const devOpsSkills = [
    { name: "Git", icon: <FaGitAlt />, description: "Version Control", color: "#F1502F" },
    { name: "GitHub", icon: <FaGithub />, description: "Code Hosting", color: "#333" },
    { name: "Docker", icon: <SiDocker />, description: "Containerization", color: "#2496ED" },
    { name: "Vercel", icon: <SiVercel />, description: "Frontend Deployment", color: "#000000" },
    { name: "Render", icon: <SiRender />, description: "Backend Deployment", color: "#4353FF" },
    { name: "Postman", icon: <SiPostman />, description: "API Testing", color: "#FF6C37" },
    { name: "Swagger", icon: <SiSwagger />, description: "API Documentation", color: "#85EA2D" },
    { name: "NPM", icon: <FaNpm />, description: "Package Manager", color: "#CB3837" },
  ];

  const testingSkills = [
    { name: "Jest", icon: <SiJest />, description: "JavaScript Testing", color: "#C21325" },
    { name: "Cypress", icon: <SiCypress />, description: "End-to-End Testing", color: "#17202C" },
  ];

  return (
    <section
      data-aos="fade-up"
      id="skills"
      className="bg-gradient-to-r from-[#055081] to-[#3C7F9F] py-20 px-6"
    >
      <div className="container mx-auto">
        <SectionHeading title="Frontend Technologies" subtitle="React-based UI development" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <SectionHeading title="Backend Technologies" subtitle="Server-side tools for MERN" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {backendSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <SectionHeading title="DevOps & Deployment" subtitle="Tools for scaling and automation" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {devOpsSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <SectionHeading title="Testing & QA" subtitle="Ensuring quality and stability" />
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
