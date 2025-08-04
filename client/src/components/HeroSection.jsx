import React from "react";
import { FaUsers } from "react-icons/fa";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section className="bg-white py-10 px-6 lg:-mt-10 pt-28 sm:pt-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 h-[80vh]">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-blue-950">
            <span className="block ">
              Your <span className="text-blue-600">smile</span>
            </span>
            <span className="block">comes first.</span>
          </h1>

          <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            At our clinic, we believe that every smile tells a story. That’s why
            we are committed to providing personalized, gentle dental care that
            makes you feel relaxed and confident.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-shadow hover:shadow-lg">
                Book Appointment
              </button> */}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-shadow hover:shadow-lg duration-300">
              Book Appointment
            </Button>

            {/* <button
                onClick={() => navigate("/our-office")}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-shadow hover:shadow-lg"
              >
                856-210-9508
              </button> */}
            <Button onClick={() => (window.location.href = "tel:8562109508")}>
              856-210-9508
            </Button>
          </div>

          {/* Trusted badge (optional) */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-sm text-gray-500">
            <FaUsers className="text-blue-600" />
            <span>
              Trusted by <strong className="text-blue-900">1.5k+</strong> happy
              customers
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full hidden sm:block">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src="./hero-img-1.jpg" alt="Hero" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
