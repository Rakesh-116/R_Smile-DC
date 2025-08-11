import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ openDentrixModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [touchDropdown, setTouchDropdown] = useState(null);

  const dropdownItems = {
    staff: ["Dr.Rashmi Srivastava", "Our Team"],
    office: [
      "Forms and Patient Education",
      "Insurance and Billing",
      "Office Gallery",
    ],
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTouchDropdown = (section) => {
    setTouchDropdown(touchDropdown === section ? null : section);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const isHome = location.pathname === "/" || location.pathname === "/home";
    if (isHome) {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/contact");
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 mb-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          <img src="./logo.png" alt="R-Smile Logo" className="h-12" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          {/* Services as direct link */}
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>

          {/* Staff Dropdown */}
          {["staff"].map((section) => (
            <div
              key={section}
              className="relative group"
              onClick={(e) => {
                if (window.matchMedia("(hover: none)").matches) {
                  e.preventDefault();
                  toggleTouchDropdown(section);
                }
              }}
            >
              <button className="flex items-center gap-1 hover:text-blue-600">
                {section === "staff" ? "Our Staff" : "Our Office"}
                <FiChevronDown className="text-xs mt-0.5" />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ${
                  touchDropdown === section ? "visible opacity-100" : ""
                }`}
              >
                {dropdownItems[section].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Contact
          </a>

          {/* Testimonials direct link */}
          <Link to="/testimonials" className="hover:text-blue-600 transition">
            Testimonials
          </Link>
        </nav>

        <Button onClick={openDentrixModal}>Request Appointment</Button>

        {/* Hamburger */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 px-4 pb-4 shadow-inner">
          <nav className="flex flex-col gap-3 text-gray-700 text-sm font-medium">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link to="/services" className="hover:text-blue-600">
              Services
            </Link>

            <a
              href="#contact"
              onClick={handleContactClick}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Contact
            </a>

            {/* Dropdowns for mobile */}
            {Object.keys(dropdownItems).map((section) => (
              <div key={section} className="border-b border-gray-200 py-2">
                <button
                  onClick={() => toggleTouchDropdown(section)}
                  className="w-full flex justify-between items-center text-left hover:text-blue-600"
                >
                  <span className="capitalize">
                    {section === "staff"
                      ? "Our Staff"
                      : section.replace(/([A-Z])/g, " $1")}
                  </span>
                  {touchDropdown === section ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {touchDropdown === section && (
                  <div className="mt-2 ml-2 space-y-2">
                    {dropdownItems[section].map((item) => (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block pl-2 text-gray-600 hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link to="/testimonials" className="hover:text-blue-600">
              Testimonials
            </Link>

            <Button onClick={openDentrixModal}>Request Appointment</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Button from "./Button";

// const Navbar = ({ openDentrixModal }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [touchDropdown, setTouchDropdown] = useState(null); // for tablets

//   const dropdownItems = {
//     services: [
//       "Crowns",
//       "Root Canal",
//       "Dental Implants",
//       "Dentures",
//       "Invisalign",
//       "Teeth Whitening",
//       "Oral Surgery",
//       "Emergency Care",
//       "Teeth Cleaning",
//     ],
//     staff: ["Dr. Rashmi Srivastava", "Our Team"],
//     office: [
//       "Forms and Patient Education",
//       "Insurance and Billing",
//       "Office Gallery",
//     ],
//     more: ["Specials", "Blog", "Testimonials"],
//   };

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleTouchDropdown = (section) => {
//     setTouchDropdown(touchDropdown === section ? null : section);
//   };

//   const handleContactClick = (e) => {
//     e.preventDefault();
//     const isHome = location.pathname === "/" || location.pathname === "/home";
//     if (isHome) {
//       document.getElementById("contact")?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     } else {
//       navigate("/contact");
//     }
//     setMenuOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 mb-10">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
//         <Link to="/" className="text-2xl font-bold text-blue-700">
//           <img src="./logo.png" alt="R-Smile Logo" className="h-12" />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
//           <Link to="/" className="hover:text-blue-600 transition">
//             Home
//           </Link>

//           {/* Loop only through services, staff, office */}
//           {["staff"].map((section) => (
//             <div
//               key={section}
//               className="relative group"
//               onClick={(e) => {
//                 if (window.matchMedia("(hover: none)").matches) {
//                   e.preventDefault();
//                   toggleTouchDropdown(section);
//                 }
//               }}
//             >
//               <button className="flex items-center gap-1 hover:text-blue-600">
//                 {section === "services"
//                   ? "Services"
//                   : section === "staff"
//                   ? "Our Staff"
//                   : "Our Office"}
//                 <FiChevronDown className="text-xs mt-0.5" />
//               </button>

//               <div
//                 className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ${
//                   touchDropdown === section ? "visible opacity-100" : ""
//                 }`}
//               >
//                 {dropdownItems[section].map((item) => (
//                   <Link
//                     key={item}
//                     to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}

//           {/* Contact Link */}
//           <a
//             href="#contact"
//             onClick={handleContactClick}
//             className="hover:text-blue-600 transition cursor-pointer"
//           >
//             Contact
//           </a>

//           {/* More Dropdown (Last) */}
//           <div
//             className="relative group"
//             onClick={(e) => {
//               if (window.matchMedia("(hover: none)").matches) {
//                 e.preventDefault();
//                 toggleTouchDropdown("more");
//               }
//             }}
//           >
//             <button className="flex items-center gap-1 hover:text-blue-600">
//               More <FiChevronDown className="text-xs mt-0.5" />
//             </button>
//             <div
//               className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ${
//                 touchDropdown === "more" ? "visible opacity-100" : ""
//               }`}
//             >
//               {dropdownItems.more.map((item) => (
//                 <Link
//                   key={item}
//                   to={`/${item.toLowerCase()}`}
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </nav>

//         <Button onClick={openDentrixModal}>Request Appointment</Button>

//         {/* Hamburger */}
//         <button
//           className="lg:hidden text-2xl text-gray-700"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <div className="lg:hidden bg-white/95 px-4 pb-4 shadow-inner">
//           <nav className="flex flex-col gap-3 text-gray-700 text-sm font-medium">
//             <Link to="/" className="hover:text-blue-600">
//               Home
//             </Link>

//             <a
//               href="#contact"
//               onClick={handleContactClick}
//               className="hover:text-blue-600 transition cursor-pointer"
//             >
//               Contact
//             </a>

//             {/* Dropdowns */}
//             {Object.keys(dropdownItems).map((section) => (
//               <div key={section} className="border-b border-gray-200 py-2">
//                 <button
//                   onClick={() => toggleTouchDropdown(section)}
//                   className="w-full flex justify-between items-center text-left hover:text-blue-600"
//                 >
//                   <span className="capitalize">
//                     {section === "more"
//                       ? "More"
//                       : section.replace(/([A-Z])/g, " $1")}
//                   </span>
//                   {touchDropdown === section ? (
//                     <FiChevronUp />
//                   ) : (
//                     <FiChevronDown />
//                   )}
//                 </button>
//                 {touchDropdown === section && (
//                   <div className="mt-2 ml-2 space-y-2">
//                     {dropdownItems[section].map((item) => (
//                       <Link
//                         key={item}
//                         to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                         className="block pl-2 text-gray-600 hover:text-blue-600"
//                       >
//                         {item}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <Button onClick={openDentrixModal}>Request Appointment</Button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
