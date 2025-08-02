// components/TestimonialsSection.jsx
import React from "react";
import SectionHeading from "./SectionHeading ";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily R.",
      quote:
        "Best dental care I've ever received! Dr. Srivastava and team made me feel calm and cared for.",
    },
    {
      name: "James D.",
      quote:
        "The staff is warm, friendly, and super professional. My fear of dentists is gone.",
    },
    {
      name: "Sophia K.",
      quote:
        "Clean, modern office and gentle treatment. Highly recommend for families!",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Our Patients Say It Best"
          title="Kind words from those we care for."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 text-base italic">“{t.quote}”</p>
              <p className="text-blue-900 font-semibold mt-4">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
