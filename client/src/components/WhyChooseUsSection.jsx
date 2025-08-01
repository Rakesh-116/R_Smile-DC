import React from "react";
import { Link } from "react-router-dom"; // Only if using React Router
import SectionHeading from "./SectionHeading ";

const WhyChooseUsSection = () => {
  const points = [
    {
      title: "Advanced Safety First",
      number: "01.",
      description:
        "We care deeply about your safety. Every operatory includes a medical-grade HEPA filter, operatory doors, openable windows, and a high-tech aerosol-reducing unit to ensure top-tier air quality and protection.",
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
          specializes in treating fearful and anxious patients. From check-in to
          checkout, we offer a comfortable, judgment-free environment with
          laughter and genuine care at the center of every visit.
        </>
      ),
    },
    {
      title: "Trusted Local Experience",
      number: "03.",
      description:
        "With over 20 years of expertise, Dr. Rashmi Srivastava and our team deliver patient-first dentistry. We’re proud to continue Dr. Cetel’s legacy of compassionate care that families in Sewell have trusted for decades.",
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-6 sm:px-10 rounded-3xl">
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
