import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    text: "Amazing dental care! The staff is super friendly and professional.",
  },
  {
    name: "Jane Smith",
    rating: 5,
    text: "Best experience I've had at a dentist. Highly recommend!",
  },
  {
    name: "Michael Johnson",
    rating: 4,
    text: "Very caring team. They made sure I was comfortable throughout.",
  },
  {
    name: "Sarah Lee",
    rating: 5,
    text: "Beautiful clinic and wonderful staff. My smile has never been better!",
  },
];

const GoogleReviewsSection = () => {
  const GOOGLE_REVIEWS_URL =
    "https://www.google.com/search?q=R-Smile+Dental+Care+reviews+usa&sca_esv=f5680b47e71e92a2&rlz=1C1RXQR_en-GBIN1070IN1070&sxsrf=AE3TifNYlBPm_ei6etel2L8UDw60KmfaQg%3A1754909737808&ei=KcyZaOOPMdW5seMP496QmQI&ved=0ahUKEwijyKOczIKPAxXVXGwGHWMvJCMQ4dUDCBA&uact=5&oq=R-Smile+Dental+Care+reviews+usa&gs_lp=Egxnd3Mtd2l6LXNlcnAiH1ItU21pbGUgRGVudGFsIENhcmUgcmV2aWV3cyB1c2EyCBAhGKABGMMESJMUUABYAHAAeACQAQCYAaMBoAGjAaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACqQGYAwCSBwMwLjGgB9YBsgcDMC4xuAepAcIHAzAuMcgHAg&sclient=gws-wiz-serp";

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-1 z-20 md:p-2 shadow-lg hover:bg-blue-700 text-xs md:text-base"
    >
      ◀
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full z-20 p-1 md:p-2 shadow-lg hover:bg-blue-700 text-xs md:text-base"
    >
      ▶
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const handleReviewClick = () => {
    window.open(GOOGLE_REVIEWS_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-gray-50 pt-10 pb-20 px-2 cursor-pointer">
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review, idx) => (
            <div
              key={idx}
              onClick={handleReviewClick}
              className="px-2 transition-transform duration-200 hover:scale-105"
            >
              <div className="bg-white shadow rounded-lg p-4 md:p-8 mx-4 md:mx-0 flex flex-col justify-between h-full">
                {/* Stars */}
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                {/* One line review */}
                <p className="text-gray-700 text-sm">"{review.text}"</p>

                {/* Name */}
                <span className="mt-2 text-xs text-gray-500">
                  – {review.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
