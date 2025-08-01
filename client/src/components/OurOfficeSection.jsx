import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import SectionHeading from "./SectionHeading ";

const OfficePreviewSection = () => {
  const navigate = useNavigate();

  const officeImages = [
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1678304.jpg",
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1678310.jpg",
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1837797.jpg",
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1678304.jpg",
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1678310.jpg",
    "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1837797.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 px-6 sm:px-12 bg-blue-50 rounded-4xl">
      <div className="max-w-7xl mx-auto lg:px-6">
        {/* Heading */}
        <SectionHeading
          label="Welcome to Our Office"
          title="A warm, calming space where comfort meets compassionate care."
        />

        {/* Description */}
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mb-12">
          <p className="mb-4 font-semibold text-blue-900 text-lg">
            "We specialize in treating fearful and anxious patients"
          </p>
          <p>
            Compassion and understanding are the guiding principles by which Dr.
            Rashmi Srivastava, DDS and her staff treat every patient. We care
            about our patients and do our best to create an environment that is
            both pleasant and comfortable. Dentistry has come a long way, and in
            the hands of a caring professional like Dr. Srivastava, patients can
            relax and receive all necessary treatment with ease.
          </p>
          <p className="mt-3">
            You’ll hear and see laughter and smiles from both staff and
            patients. Every member of our team is a dedicated professional who
            takes pride in their skill and knowledge.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings} className="mb-10">
          {officeImages.map((img, idx) => (
            <div key={idx} className="px-3">
              <div className="rounded-xl overflow-hidden shadow-md group">
                <img
                  src={img}
                  alt={`Office ${idx + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/our-office")}
            className="border-2 border-blue-950 rounded-full px-5 py-2 hover:bg-blue-950 hover:text-white text-blue-950 font-medium transition duration-300"
          >
            See Full Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficePreviewSection;
