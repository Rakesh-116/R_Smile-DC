import React from "react";
import SectionHeading from "./SectionHeading ";

const insuranceProviders = [
  {
    name: "Aetna PPO",
    logo: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1771911.png",
  },
  {
    name: "Assurant",
    logo: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1858337.jpg",
  },
  {
    name: "Cigna PPO",
    logo: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1776759.png",
  },
  {
    name: "Delta Dental",
    logo: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1772502.png",
  },
  {
    name: "Guardian PPO",
    logo: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1773673.png",
  },
  {
    name: "United Concordia Advantage Plus",
    logo: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1785539.png",
  },
  { name: "Horizon Blue Cross Blue Shield", logo: "" },
  { name: "Teamcare", logo: "" },
  { name: "Cash Pay", logo: "" },
  { name: "Delta Dental PPO Plus Premier", logo: "" },
];

const InsurancePartners = () => {
  return (
    <section className="py-20 px-6 sm:px-10 bg-white">
      <div className="max-w-6xl mx-auto mb-12">
        <SectionHeading
          label="Our Trusted Insurance Partners"
          title="We work with the best, for you."
        />
        <p className="text-gray-600 mt-4 max-w-2xl">
          We accept most major PPO insurance plans to make your dental care
          accessible. Our team partners with trusted providers to ensure you
          receive the highest quality care and coverage.
        </p>
      </div>

      {/* Logos Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
        {insuranceProviders.map((provider, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex items-center justify-center text-center h-24 hover:shadow-md transition"
          >
            {provider.logo ? (
              <img
                src={provider.logo}
                alt={provider.name}
                className="h-12 object-contain"
              />
            ) : (
              <span className="text-blue-800 text-sm font-semibold">
                {provider.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsurancePartners;
