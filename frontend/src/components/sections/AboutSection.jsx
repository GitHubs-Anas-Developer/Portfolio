import React, { useEffect } from "react";
import profileImg from "../../assets/images/1712031961239 (1).jpeg";
import AOS from "aos";
import "aos/dist/aos.css"; 

function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slower duration for smoother animation
      once: true,
    });
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="flex items-center justify-center bg-gradient-to-r from-[#055081] to-[#0177b6] px-6 py-24"
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-10">
        {/* Left Side - Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={profileImg}
            alt="Anas Profile"
            className="w-80 h-80 object-cover rounded-full shadow-xl border-4 border-white transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Side - About Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold text-yellow-400">Anas</span>,
            a passionate full-stack web developer with expertise in the <span className="font-semibold text-yellow-400">MERN stack</span>.
            I specialize in building scalable, user-friendly applications with modern technologies like 
            <span className="font-semibold text-yellow-400"> React, Node.js, Express, and MongoDB</span>. 
            My goal is to create seamless digital experiences that make an impact.
          </p>

        

          <div className="mt-8">
            <a
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
