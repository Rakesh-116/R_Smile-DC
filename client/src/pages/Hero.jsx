import React from "react";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import OfficePreviewSection from "../components/OurOfficeSection";
import InsurancePartners from "../components/InsurancePartners";
import ServicesSection from "../components/ServicesSection";

const Hero = () => {
  return (
    <div className="p-10 bg-blue-500/90">
      <div
        className="mt-16 bg-fixed relative overflow-hidden rounded-4xl"
        style={{
          backgroundImage: `url('https://300experts.ru/upload/img/2022/05/28/6292811d9f541.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Overlay with Blur Effect */}
        <div className="absolute inset-0 bg-blue-950/50 "></div>

        <div className="relative z-10 max-w-7xl mx-auto pt-32 px-6">
          {/* Main Content */}
          <div className="text-center text-white py-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-blue-100">Your smile</span>
              <span className="block text-white">comes first.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              Experience exceptional dental care with modern technology and
              personalized treatment.
            </p>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mt-4 leading-relaxed">
              Trusted by families in Sewell, NJ — we provide gentle,
              personalized dental care with a focus on comfort and long-term
              health.
            </p>

            {/* ✨ CTA Button */}
            <div className="mt-8">
              <button
                href="#"
                className="border-2 border-white rounded-full px-4 py-3 hover:bg-white cursor-pointer hover:text-blue-950 hover:font-medium transition duration-300"
              >
                Request Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 my-10 rounded-4xl">
        <WhyChooseUsSection />
        <ServicesSection />
        <OfficePreviewSection />
        <InsurancePartners />
      </div>
    </div>
  );
};

export default Hero;
