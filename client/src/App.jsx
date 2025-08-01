import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import OurTeam from "./components/OurTeam";
import OurOffice from "./pages/OurOffice";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/our-office" element={<OurOffice />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
