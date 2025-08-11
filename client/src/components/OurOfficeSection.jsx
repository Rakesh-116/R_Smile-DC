import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import SectionHeading from "./SectionHeading ";
import Button from "./Button";

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

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -left-4 lg:-left-10 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-1 z-20 md:p-2 shadow-lg hover:bg-blue-700 text-xs md:text-base"
    >
      ◀
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -right-4 lg:-right-10 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full z-20 p-1 md:p-2 shadow-lg hover:bg-blue-700 text-xs md:text-base"
    >
      ▶
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <section className="py-20 px-6 sm:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Welcome to Our Office"
          title="A relaxing space designed to make you feel at home."
        />
        {/* Heading */}

        {/* Shortened Description */}
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mb-12">
          <p className="mb-4 font-semibold text-blue-900 text-lg">
            "We treat fearful and anxious patients with care."
          </p>
          <p>
            Dr. Rashmi Srivastava, DDS and her team create a friendly, calm
            environment so you feel relaxed during your visit. Modern dentistry
            and gentle care come together for a stress-free experience.
          </p>
          <p className="mt-3">
            Expect smiles, comfort, and a team that truly loves what they do.
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
        {/* <div className="mt-10 text-center">
          <Button onClick={() => navigate("/our-office")}>See Full Tour</Button>
        </div> */}
      </div>
    </section>
  );
};

export default OfficePreviewSection;
