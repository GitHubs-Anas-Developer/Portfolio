import React, { useEffect, useState } from "react";
import AOS from "aos"; // Correct import
import "aos/dist/aos.css"; // Import AOS styles

function SkillsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slower duration for smoother animation
      once: true,
    });
  }, []);
  const mernSkills = [
    { name: "MongoDB", level: 85, color: "#4DB33D" }, // Color for MongoDB (Green)
    { name: "Express.js", level: 80, color: "#000000" }, // Color for Express (Black)
    { name: "React", level: 90, color: "#61DBFB" }, // Color for React (Blue)
    { name: "Node.js", level: 85, color: "#8CC84B" }, // Color for Node (Green)
  ];

  return (
    <section data-aos="fade-up"
      id="skills"
      className="bg-gradient-to-r from-[#055081] to-[#3C7F9F] py-20 px-6"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          My Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mernSkills.map((skill, index) => (
            <div
              key={index}
              className="p-8 border rounded-lg shadow-xl bg-white transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {skill.name}
              </h3>
              <div className="relative pt-2">
                <div className="flex mb-4 items-center justify-between">
                  <span className="text-sm font-semibold inline-block py-1 px-2 uppercase text-gray-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
