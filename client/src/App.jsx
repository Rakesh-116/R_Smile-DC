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
import Crowns from "./pages/Services/CrownsService";
import RootCanal from "./pages/Services/RootCanalService";
import DentalImplants from "./pages/Services/DentalImplantsService";
import Dentures from "./pages/Services/DenturesService";
import Invisalign from "./pages/Services/InvisalignService";
import TeethWhitening from "./pages/Services/TeethWhiteningService";
import OralSurgery from "./pages/Services/OralSurgeryService";
import TeethCleaning from "./pages/Services/TeethCleaningService";
import EmergencyCare from "./pages/Services/EmergencyCareService";

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
                <Route
                    path="/services/crowns"
                    element={
                        <Layout>
                            <Crowns />
                        </Layout>
                    }
                />
                <Route
                    path="/services/root-canal"
                    element={
                        <Layout>
                            <RootCanal />
                        </Layout>
                    }
                />
                <Route
                    path="/services/dental-implants"
                    element={
                        <Layout>
                            <DentalImplants />
                        </Layout>
                    }
                />
                <Route
                    path="/services/dentures"
                    element={
                        <Layout>
                            <Dentures />
                        </Layout>
                    }
                />
                <Route
                    path="/services/invisalign"
                    element={
                        <Layout>
                            <Invisalign />
                        </Layout>
                    }
                />
                <Route
                    path="/services/teeth-whitening"
                    element={
                        <Layout>
                            <TeethWhitening />
                        </Layout>
                    }
                />
                <Route
                    path="/services/oral-surgery"
                    element={
                        <Layout>
                            <OralSurgery />
                        </Layout>
                    }
                />
                <Route
                    path="/services/teeth-cleaning"
                    element={
                        <Layout>
                            <TeethCleaning />
                        </Layout>
                    }
                />
                <Route
                    path="/services/emergency-care"
                    element={
                        <Layout>
                            <EmergencyCare />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
