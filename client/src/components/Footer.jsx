// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-6 sm:px-12 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h4 className="text-sm uppercase text-gray-500 mb-2">
            About R-Smile Dental
          </h4>
          <p className="text-gray-700 text-sm">
            R-Smile Dental Care offers compassionate and modern dental
            treatments with trusted experience in Sewell, NJ.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm uppercase text-gray-500 mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-blue-900 underline">
            <li>Home</li>
            <li>Pay Online</li>
            <li>Forms</li>
            <li>Careers</li>
            <li>Dental Emergencies</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm uppercase text-gray-500 mb-2">Contact Us</h4>
          <p className="text-sm text-blue-900 font-semibold">
            R-Smile Dental Care
          </p>
          <p className="text-sm">
            100B Kings Way West, Suite 100B <br /> Sewell, NJ 08080
          </p>
          <p className="text-sm mt-2">Call: 856-210-9508</p>
          <p className="text-sm">Fax: 856-537-3803</p>
          <p className="text-sm">Email: info@rsmiledental.com</p>
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

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-400 mt-10 space-x-4">
        <span>© 2025 Tebra Inc.</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Accessibility Notice</span>
        <span>Contact Us</span>
      </div>
    </footer>
  );
};

export default Footer;
