import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar - Fixed at top */}
      <header className="relative z-50">
        <Navbar />
      </header>

      {/* Main Content - Takes remaining space */}
      <main className={`flex-1  ${className}`}>{children}</main>

      {/* Footer - Always at bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
