import React from "react";
import TestimonialsSection from "../components/TestimonialsSection";
import GoogleReviewsSection from "../components/GoogleReviewsSection";

const Testimonials = () => {
  return (
    <div className="mt-30">
      <GoogleReviewsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Testimonials;
