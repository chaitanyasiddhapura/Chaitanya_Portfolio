import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-4 bg-[#0b0c10]/80 backdrop-blur-md shadow-md z-50 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Chaitanya Siddhapura
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-purple-400 transition font-semibold text-sm"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop Socials + Button */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/chaitanyasiddhapura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 text-xl"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya-siddhapura-998645252/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 text-xl"
          >
            <FaLinkedinIn />
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-[#4A67EC] via-[#514DC2] to-[#8F34EA] text-white px-4 py-2 rounded-lg text-sm font-medium drop-shadow-[0_0_12px_rgba(138,82,234,0.6)] hover:drop-shadow-[0_0_16px_rgba(138,82,234,0.9)] hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#0b0c10]/90 backdrop-blur-md px-6 py-6 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-purple-400 text-lg font-medium"
            >
              {link.name}
            </button>
          ))}
          <div className="flex gap-4">
            <a href="https://github.com/chaitanyasiddhapura" target="_blank" rel="noreferrer">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/chaitanya-siddhapura-998645252/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-[#4A67EC] via-[#514DC2] to-[#8F34EA] text-white px-4 py-2 rounded-lg text-sm font-medium drop-shadow-[0_0_12px_rgba(138,82,234,0.6)] hover:drop-shadow-[0_0_16px_rgba(138,82,234,0.9)] hover:scale-105 transition-all duration-300"
          >
            Hire
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
