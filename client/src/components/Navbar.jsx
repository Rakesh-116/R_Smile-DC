import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    staff: false,
    office: false,
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (key) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const mainLinks = ["Home", "Specials", "Blog", "Testimonials", "Contact"];

  const dropdownItems = {
    services: [
      "Crowns",
      "Root Canal",
      "Dental Implants",
      "Dentures",
      "Invisalign",
      "Teeth Whitening",
      "Oral Surgery",
      "Emergency Care",
      "Teeth Cleaning",
    ],
    staff: ["Dr. Howard Cetel", "Dr. Rashmi Srivastava", "Staff Members"],
    office: [
      "Forms and Patient Education",
      "Insurance and Billing",
      "Office Gallery",
    ],
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 mb-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link className="text-2xl font-bold text-blue-700" to="/">
          {/* R-Smile Dental Care */}
          <img src="./logo.png" alt="R-Smile Dental Care" className="h-8" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 relative">
          {mainLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="hover:text-blue-600 transition"
            >
              {link}
            </Link>
          ))}

          {/* Desktop Dropdowns */}
          {["services", "staff", "office"].map((section) => (
            <div className="relative group" key={section}>
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                {section === "services"
                  ? "Services"
                  : section === "staff"
                  ? "Our Staff"
                  : "Our Office"}
                <FiChevronDown className="text-xs mt-0.5" />
              </div>

              {/* Hover target area expanded */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dropdownItems[section].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-4 py-2 block text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <button
          href="#"
          className="border-2 border-blue-950 rounded-full px-4 py-3 hover:bg-blue-950 cursor-pointer hover:text-white hover:font-medium transition duration-300"
        >
          Request Appointment
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 px-4 pb-4 shadow-inner">
          <nav className="flex flex-col gap-3 text-gray-700 text-sm font-medium">
            {/* Static Links */}
            {mainLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="border-b border-gray-200 py-2 hover:text-blue-600"
              >
                {link}
              </a>
            ))}

            {/* Dropdowns on mobile */}
            {["services", "staff", "office"].map((section) => (
              <div className="border-b border-gray-200 py-2" key={section}>
                <button
                  onClick={() => toggleDropdown(section)}
                  className="w-full flex justify-between items-center text-left hover:text-blue-600"
                >
                  <span>
                    {section === "services"
                      ? "Services"
                      : section === "staff"
                      ? "Our Staff"
                      : "Our Office"}
                  </span>
                  {mobileDropdowns[section] ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {mobileDropdowns[section] && (
                  <div className="mt-2 ml-2 space-y-2">
                    {dropdownItems[section].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block pl-2 text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA for mobile */}
            <a
              href="#"
              className="mt-3 bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700 transition"
            >
              Request Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
