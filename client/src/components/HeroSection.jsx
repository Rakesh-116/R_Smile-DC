import React from "react";
import { FaUsers } from "react-icons/fa";
import Button from "../components/Button";

const HeroSection = ({ openDentrixModal }) => {
  return (
    <section className="bg-white px-6 pt-28  pb-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-blue-950">
            <span className="block">
              Your <span className="text-blue-600">smile</span>
            </span>
            <span className="block">comes first.</span>
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            At our clinic, we believe that every smile tells a story. That’s why
            we are committed to providing personalized, gentle dental care that
            makes you feel relaxed and confident.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center lg:justify-start gap-4 flex-wrap">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-shadow hover:shadow-lg duration-300"
              onClick={openDentrixModal}
            >
              Book Appointment
            </Button>

            <Button onClick={() => (window.location.href = "tel:8564641900")}>
              (856) 464-1900
            </Button>
          </div>

          {/* Trusted badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-sm text-gray-500">
            <FaUsers className="text-blue-600" />
            <span>
              Trusted by <strong className="text-blue-900">1.5k+</strong> happy
              customers
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="./hero-img-1.jpg"
              alt="Hero"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
