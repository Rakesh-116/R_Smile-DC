import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {showTopBtn && (
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-white bg-blue-900 hover:bg-blue-800 px-4 py-2 lg:py-4 w-full transition flex items-center justify-center gap-2"
          >
            <FaArrowUp />
            Back to Top
          </button>
        </div>
      )}
      <footer className="bg-blue-950 py-16 px-6 sm:px-12 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About + Logo */}
          <div>
            <img
              src="/logo.png" // Replace with actual path to your logo
              alt="R-Smile Logo"
              className="w-32 mb-4"
            />
            <h4 className="text-sm uppercase text-gray-400 mb-2">
              About R-Smile Dental
            </h4>
            <p className="text-gray-300 text-sm">
              R-Smile Dental Care offers compassionate and modern dental
              treatments with trusted experience in Sewell, NJ.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase text-gray-400 mb-2">
              Quick Links
            </h4>
            <ul className="space-y-1 text-sm text-white">
              {[
                { label: "Home", to: "/" },
                { label: "Pay Online", to: "/pay-online" },
                { label: "Forms", to: "/forms" },
                { label: "Careers", to: "/careers" },
                { label: "Dental Emergencies", to: "/emergency" },
                { label: "FAQ", to: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:underline hover:text-gray-300 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase text-gray-400 mb-2">Contact Us</h4>
            <p className="text-sm font-semibold text-white">
              R-Smile Dental Care
            </p>
            <p className="text-sm text-gray-300">
              100B Kings Way West, Suite 100B <br /> Sewell, NJ 08080
            </p>
            <p className="text-sm mt-2 text-gray-300">Call: (856) 464-1900</p>
            <p className="text-sm text-gray-300">
              Email: info@rsmiledental.com
            </p>
          </div>

          {/* Map */}
          <div className="h-62 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.2747807425576!2d-75.06876152385458!3d39.7334780969409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6da641fb3308b%3A0xec4c0cffd33c14!2sR-Smile%20Dental%20Care!5e0!3m2!1sen!2sin!4v1754117322801!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-xs text-gray-400 mt-10 flex flex-wrap justify-center gap-4">
          <span>© 2025 R-Smile Dental Care. All Rights Reserved.</span>
          {[
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms & Conditions", to: "/terms" },
            { label: "Accessibility Notice", to: "/accessibility" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="hover:underline hover:text-gray-200 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
