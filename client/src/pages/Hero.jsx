import React from "react";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import OfficePreviewSection from "../components/OurOfficeSection";
import InsurancePartners from "../components/InsurancePartners";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LocationHoursSection from "../components/LocationHoursSection";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

const Hero = ({ openDentrixModal }) => {
  return (
    <div className="sm:py-10 bg-white px-2">
      <HeroSection openDentrixModal={openDentrixModal} />
      <GoogleReviewsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <OfficePreviewSection />
      <InsurancePartners />
      <TestimonialsSection />
      <ContactSection openDentrixModal={openDentrixModal} />
    </div>
  );
};

export default Hero;
