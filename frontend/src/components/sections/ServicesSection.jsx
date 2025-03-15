import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles
import { MonitorSmartphone, Server, Palette } from "lucide-react"; // Import Icons

function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Smooth animation duration
      once: true,
    });
  }, []);

  return (
    <div>
      <section
        data-aos="fade-up"
        className="py-24 bg-gradient-to-r from-[#8686AC] to-[#4F4F8C]"
        id="design"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            UI/UX & Web Development
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We specialize in designing intuitive user experiences and building 
            high-performance web applications.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front-End Development */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
              <MonitorSmartphone className="text-[#4F4F8C] w-20 h-20" />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                Front-End Development
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                We create modern, responsive UI designs that enhance user engagement.
              </p>
            </div>

            {/* Back-End Development */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
              <Server className="text-[#4F4F8C] w-20 h-20" />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                Backend Development
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                We build robust and scalable backend solutions with the latest technologies.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
              <Palette className="text-[#4F4F8C] w-20 h-20" />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                UI/UX Design
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                We create visually appealing and user-friendly UI/UX designs for all platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesSection;
