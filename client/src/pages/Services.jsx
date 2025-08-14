import React from "react";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

const Services = () => {
    return (
        <div className="mt-10 sm:py-10">
            <ServicesSection className="bg-white" />
            <ContactSection />
        </div>
    );
};

export default Services;
