import React from "react";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import OfficePreviewSection from "../components/OurOfficeSection";
import InsurancePartners from "../components/InsurancePartners";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import OurTeamSection from "../components/OurTeamSection";

const Hero = ({ openDentrixModal }) => {
  return (
    <div className="sm:py-10 bg-white px-2">
      <HeroSection openDentrixModal={openDentrixModal} />
      <GoogleReviewsSection />
      <OfficePreviewSection />
      <ServicesSection />
      <OurTeamSection />
      <InsurancePartners />
      <ContactSection openDentrixModal={openDentrixModal} />
    </div>
  );
};

export default Hero;
