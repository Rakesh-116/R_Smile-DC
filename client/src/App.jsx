import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import OurTeam from "./components/OurTeam";
import OurOffice from "./pages/OurOffice";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Hero />
            </Layout>
          }
        />

        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/our-team"
          element={
            <Layout>
              <OurTeam />
            </Layout>
          }
        />

        <Route
          path="/office-gallery"
          element={
            <Layout>
              <OurOffice />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
