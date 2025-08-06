import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-blue-600 rounded-full 
        px-4 py-2         // default for mobile
        sm:px-5 sm:py-2.5 // slightly larger for tablets
        md:px-6 md:py-3   // even larger on desktop
        text-xs sm:text-base 
        hover:bg-blue-600 hover:text-white 
        text-blue-600 font-medium 
        transition duration-300 
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
