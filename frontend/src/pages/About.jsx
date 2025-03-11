import React from "react";

const About = () => {
  return (
    <section className="flex items-center justify-center h-auto min-h-screen bg-gray-100 px-10 py-20">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-10">
        {/* Left Side - Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={"profileImg"}
            alt="Anas Profile"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-white"
          />
        </div>

        {/* Right Side - About Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hi, I'm <span className="font-semibold text-blue-600">Anas</span>, a
            passionate full-stack web developer with expertise in *MERN stack*.
            I specialize in building scalable, user-friendly applications with
            modern technologies like *React, Node.js, Express, and MongoDB*. My
            goal is to create seamless digital experiences that make an impact.
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-700">
              Skills & Technologies
            </h3>
            <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
              <li>✅ JavaScript (ES6+)</li>
              <li>✅ React.js & Next.js</li>
              <li>✅ Node.js & Express</li>
              <li>✅ MongoDB & Mongoose</li>
              <li>✅ Tailwind CSS & Bootstrap</li>
              <li>✅ REST API Development</li>
              <li>✅ Git & GitHub</li>
            </ul>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
