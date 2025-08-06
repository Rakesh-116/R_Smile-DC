import DentrixModal from "./DentrixModal";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDentrixModal = () => setIsModalOpen(true);
  const closeDentrixModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  // 🟢 Use React.cloneElement to inject prop into children
  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, { openDentrixModal })
      : child
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="relative z-50">
        <Navbar openDentrixModal={openDentrixModal} />
      </header>

      <main className="flex-1">{childrenWithProps}</main>

      <DentrixModal isOpen={isModalOpen} onClose={closeDentrixModal} />

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
