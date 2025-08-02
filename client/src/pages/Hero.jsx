import React from "react";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import OfficePreviewSection from "../components/OurOfficeSection";
import InsurancePartners from "../components/InsurancePartners";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LocationHoursSection from "../components/LocationHoursSection";
import HeroSection from "../components/HeroSection";

const Hero = () => {
  return (
    <div className="sm:py-10 bg-white">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <OfficePreviewSection />
      <InsurancePartners />
      <TestimonialsSection />
      <LocationHoursSection />
    </div>
  );
};

export default Hero;
