import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLink } from "react-icons/fa"; // Importing GitHub and Link icons from react-icons
import portfolio from "../../assets/images/Screenshot 2025-03-17 044213.png";
import cashbook from "../../assets/images/Screenshot 2025-03-29 033618.png";
import x from "../../assets/images/1870465-untitleddesign3.webp"

function ProjectsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "Fitness Tracker App",
      description:
        "A full-stack web application built using the MERN stack for tracking fitness activities, setting goals, and visualizing progress over time.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Tailwind CSS",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkIhGAzgbLll1p4OTmviRfYO6w7m5p55qQw&s",
      demoLink: "https://live-demo-link.com",
      githubLink: "https://github.com/username/fitness-tracker",
    },
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform for product listing, shopping cart management, and payment gateway integration.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Bootstrap"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkIhGAzgbLll1p4OTmviRfYO6w7m5p55qQw&s",
      demoLink: "https://live-demo-link.com",
      githubLink: "https://github.com/username/e-commerce",
    },
    {
      title: "Cash Note Books",
      description: "A simple cashbook application for managing notes and finances.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      image: cashbook,
      demoLink: "https://cash-note-books.onrender.com",
      githubLink: "https://github.com/GitHubs-Anas-Developer/Cash-Note-Books",
    },
    {
      title: "X Clone App",
      description:
        "A full-stack clone of the X (Twitter) platform, including post creation, JWT authentication, media uploads via Cloudinary, and responsive UI with DaisyUI.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Tailwind CSS",
        "DaisyUI",
        "TanStack Query",
        "JWT",
        "Cloudinary",
      ],
      image: x,
      demoLink: "https://x-clone-app-01.onrender.com",
      githubLink: "https://github.com/GitHubs-Anas-Developer/X-clone-app", // update if needed
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built to showcase projects, skills, and achievements with a responsive design and smooth animations.",
      technologies: ["React", "Tailwind CSS", "React Router"],
      image: portfolio,
      demoLink: "https://dreamcode699.onrender.com",
      githubLink: "https://github.com/GitHubs-Anas-Developer/Portfolio",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      id="projects"
      className="py-20  bg-gradient-to-r from-[#8686AC] to-[#4F4F8C] px-6"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain transition-all duration-500 hover:scale-110"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <FaLink /> {/* Link Icon */}
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline flex items-center gap-2"
                  >
                    <FaGithub /> {/* GitHub Icon */}
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
