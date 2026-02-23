import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled
          ? "bg-[#030712] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="text-white py-5 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#f43f5e]">&lt;</span>
          <span className="text-white">Vidhi</span>
          <span className="text-[#0d9488]">/</span>
          <span className="text-white">Kaiwart</span>
          <span className="text-[#f43f5e]">&gt;</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#f43f5e] transition-colors duration-200 ${activeSection === item.id ? "text-[#f43f5e]" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/vidhikaiwart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#f43f5e] transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vidhikaiwart/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#0d9488] transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#f43f5e] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#f43f5e] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#030712] bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#f43f5e]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/vidhikaiwart"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f43f5e]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vidhikaiwart/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0d9488]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
