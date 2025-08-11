import React from "react";
import SectionHeading from "./SectionHeading ";

const services = [
  {
    name: "Crowns",
    image:
      "https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678098.jpg",
  },
  {
    name: "Root Canal",
    image:
      "https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678099.jpg",
  },
  {
    name: "Dental Implants",
    image:
      "https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678100.jpg",
  },
  {
    name: "Dentures",
    image:
      "https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678101.jpg",
  },
  {
    name: "Invisalign",
    image:
      "https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678103.jpg",
  },
  {
    name: "Teeth Whitening",
    image:
      "https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678102.jpg",
  },
  {
    name: "Oral Surgery",
    image:
      "https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678095.jpg",
  },
  {
    name: "Emergency Care",
    image:
      "https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678104.jpg",
  },
  {
    name: "Teeth Cleaning",
    image:
      "https://www.shutterstock.com/image-photo/smiling-face-woman-dentist-closeup-600nw-2561523233.jpg",
  },
];

const ServicesSection = ({ className }) => {
  return (
    <section
      id="services"
      className={`py-20 px-6 sm:px-10 bg-blue-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          label="Our Services"
          title="Gentle dental care tailored for every smile."
        />

        {/* Services Grid */}
        <div className="lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Box 1: Intro */}
          <div
            className={`${
              window.location.pathname === "/services"
                ? "bg-blue-50"
                : "bg-white"
            } rounded-2xl p-6 shadow-md flex flex-col justify-center`}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Personalized Treatments
            </h3>
            <p className="text-sm text-gray-600">
              Whether you're in for a cleaning or a crown, your care is built
              around comfort.
            </p>
          </div>

          {/* Box 2: Intro */}
          <div
            className={`${
              window.location.pathname === "/services"
                ? "bg-blue-50"
                : "bg-white"
            } rounded-2xl p-6 shadow-md flex flex-col justify-center`}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Modern Methods
            </h3>
            <p className="text-sm text-gray-600">
              We use the latest technology for precise, efficient, and gentle
              procedures.
            </p>
          </div>

          {/* Box 3 & 4: Crowns & Root Canal */}
          {[0, 1].map((i) => (
            <div
              key={services[i].name}
              className="relative h-48 rounded-2xl overflow-hidden shadow-md group"
            >
              <img
                src={services[i].image}
                alt={services[i].name}
                className="w-full h-full object-cover brightness-75 hover:brightness-100 group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-blue-900/80 text-white px-4 py-2 text-sm font-semibold">
                {services[i].name}
              </div>
            </div>
          ))}

          {/* Box 5-6: Full-width Dental Implants */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative h-48 rounded-2xl overflow-hidden shadow-md group">
            <img
              src={services[2].image}
              alt={services[2].name}
              className="w-full h-full object-cover brightness-75 hover:brightness-100 group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 bg-blue-900/80 text-white px-4 py-2 text-lg font-semibold">
              {services[2].name}
            </div>
          </div>

          {/* Box 7-12: Remaining Services */}
          {[3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={services[i].name}
              className="relative h-48 rounded-2xl overflow-hidden shadow-md group"
            >
              <img
                src={services[i].image}
                alt={services[i].name}
                className="w-full h-full object-cover brightness-75 hover:brightness-100 group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-blue-900/80 text-white px-4 py-2 text-sm font-semibold">
                {services[i].name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
