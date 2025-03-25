import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import profileImg from "../../assets/images/1712031961239 (1).jpeg"; // Profile Image

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Reduced duration for better UX
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-20">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Side - Text & Animation */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1
            className="text-3xl sm:text-5xl font-bold text-white leading-tight "
            data-aos="fade-right"
          >
            Hi, I'm <span className="text-yellow-400">Anas</span>
          </h1>
          <TypeAnimation
            sequence={["Full Stack Developer", 3000, "A Designer", 3000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "#FFDD57",
            }}
          />
          <p
            className="mt-4 text-lg text-gray-200 max-w-lg mx-auto"
            data-aos="fade-left"
          >
            I’m passionate about building modern web applications that are
            user-friendly, responsive, and impactful.
          </p>

          {/* Download CV Button */}
          <div className="mt-6" data-aos="flip-up">
            <a
              href="/path/to/your/cv.pdf" // Link to your CV file
              download
              className="inline-block bg-yellow-400 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex justify-center md:justify-start space-x-8">
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <FaTwitter size={32} />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0" data-aos="zoom-in">
          <div className="relative">
            <img
              src={profileImg}
              alt="Anas Profile"
              className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white transform transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-b-lg">
              <p className="text-white text-sm font-semibold">
                Web Developer & Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
