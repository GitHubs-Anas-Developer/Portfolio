import React, { useEffect, useState } from "react";
import AOS from "aos"; // Correct import
import "aos/dist/aos.css"; // Import AOS styles

function ContactSections() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Reduced duration for better UX
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("There was an error sending your message.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-r from-[#055081] to-[#3C7F9F]"
    >
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>
        <p className="text-lg text-white mb-6">
          Feel free to reach out with any questions or inquiries.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            Send Message
          </button>

          {status && (
            <p
              className={`mt-4 text-sm ${
                status.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSections;
