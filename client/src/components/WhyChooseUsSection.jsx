import React from "react";
import { Link } from "react-router-dom"; // Only if using React Router
import SectionHeading from "./SectionHeading ";

const WhyChooseUsSection = () => {
  const points = [
    {
      title: "Advanced Safety First",
      number: "01.",
      description:
        "Every operatory features HEPA filters, doors, windows, and aerosol control for clean, safe air during treatment.",
    },
    {
      title: "Compassion for Every Patient",
      number: "02.",
      description: (
        <>
          Our{" "}
          <Link
            to="/our-team"
            className="underline text-blue-700 hover:text-blue-900 font-medium"
          >
            friendly team
          </Link>{" "}
          specializes in caring for anxious patients. From check-in to checkout,
          we provide a calm, supportive, and judgment-free experience.
        </>
      ),
    },
    {
      title: "Trusted Local Experience",
      number: "03.",
      description:
        "With 20+ years of care, Dr. Srivastava and our team continue Dr. Cetel’s trusted legacy in Sewell.",
    },
  ];

  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Why Patients Trust Us"
          title="From safety to comfort, we put your experience first."
        />

        <div className="grid gap-10 md:grid-cols-3 text-left">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-xl font-semibold mb-2">
                {item.number}
              </div>
              <h3 className="text-blue-900 text-lg font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
