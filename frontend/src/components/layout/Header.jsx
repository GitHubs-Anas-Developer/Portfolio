import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-950 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>

        {/* Desktop Menu (Hidden on small screens) */}
        <ul className="hidden md:flex space-x-4">
          <li className="hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:underline">
            <Link to={"/services"}>services</Link>
          </li>
          <li className="hover:underline">
            <Link to={"/skills"}>Skills</Link>
          </li>
          <li className="hover:underline">
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li className="hover:underline">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Sidebar for Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue-950 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
          <li>
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/skills"} onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to={"/projects"} onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
