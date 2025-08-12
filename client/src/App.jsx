import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import AboutDrRashmiSrivastava from "./pages/AboutDrRashmiSriVastsava";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import OurOffice from "./pages/OurOffice";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          path="/dr.rashmi-srivastava"
          element={
            <Layout>
              <AboutDrRashmiSrivastava />
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
        <Route
          path="/testimonials"
          element={
            <Layout>
              <Testimonials />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
