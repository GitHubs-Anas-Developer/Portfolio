import React, { useEffect, useState } from "react";
import AOS from "aos"; // Correct import
import "aos/dist/aos.css"; // Import AOS styles
function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Slower duration for smoother animation
      once: true,
    });
  }, []);
  return (
    <div>
      <section data-aos="fade-up"
        className=" py-24 bg-gradient-to-r from-[#8686AC] to-[#4F4F8C]"
        id="design"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            UI/UX, Web & App Design/Development
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Beautiful, user-friendly interfaces and robust solutions that drive
            engagement and enhance user experience.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UX Design Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimy2twnGR4L8TtDzshV99ipqasiXgFfjfBBNcTvyuQQ976W4Ju9kzIFhNvJXQvWVZGVM&usqp=CAU"
                } // UX Design Image
                alt="UX Design"
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                UX Design
              </h3>
              <p className="mt-4 text-gray-600">
                We focus on creating intuitive and seamless user experiences
                through user research, prototyping, and usability testing.
              </p>
            </div>

            {/* Web Development Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiBSrY3rPB6EYrh3FaDqXejdrHY_MZKMmPIJ0IKPsuyaIWBZdqJkJItFZ9ndL3i6HTBI&usqp=CAU"
                } // Web Design/Development Image
                alt="Web Development"
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                Web Development
              </h3>
              <p className="mt-4 text-gray-600">
                Building responsive and dynamic websites that perform well on
                all devices, ensuring a seamless experience across platforms.
              </p>
            </div>

            {/* App Development Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={
                  "https://www.digitalauthority.me/wp-content/uploads/2019/04/shutterstock_572886535.jpg"
                } // App Development Image
                alt="App Development"
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">
                App Development
              </h3>
              <p className="mt-4 text-gray-600">
                We design and develop powerful mobile and desktop applications
                that offer an intuitive and smooth user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesSection;
