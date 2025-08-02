import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-blue-600 rounded-full px-5 py-2 hover:bg-blue-600 hover:text-white text-blue-600 font-medium transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
