import React from "react";
import { FaStar } from "react-icons/fa";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

const reviews = [
    {
        name: "John D.",
        text: "The team is amazing! I always feel comfortable during my visits.",
        rating: 5,
        color: "bg-blue-50",
    },
    {
        name: "Sarah K.",
        text: "Best dental care I've ever experienced. Highly recommend!",
        rating: 5,
        color: "bg-yellow-50",
    },
    {
        name: "Michael P.",
        text: "Professional, friendly, and caring staff.",
        rating: 4,
        color: "bg-green-50",
    },
    {
        name: "Emily R.",
        text: "They made me feel at ease right away. Wonderful service!",
        rating: 5,
        color: "bg-pink-50",
    },
];

const Testimonials = () => {
    return (
        <div className="mt-20">
            {/* Hero Section */}
            {/* <section className="text-center px-6 mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-3">
          What Our Patients Say
        </h1>
        <p className="text-gray-600 mb-4">
          Trusted by hundreds of happy patients
        </p>
        <div className="flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
          <a
            href="https://www.google.com/search?q=R-Smile+Dental+Care+reviews+usa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-2"
          >
            1,200+ 5-star reviews!
          </a>
        </div>
      </section> */}

            {/* Highlight Review */}
            <section className="bg-gray-50 py-12 px-6 text-center mb-16">
                <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-4xl mx-auto">
                    “I still carry an unrealistic fear of going to the dentist from childhood. All of that evaporates
                    the minute I step into the office. The staff is friendly and every person makes me feel special.”
                </blockquote>
                <p className="mt-4 font-bold text-gray-600">— Cheryl W.</p>
            </section>

            {/* Colorful Review Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto mb-16">
                {reviews.map((review, idx) => (
                    <div key={idx} className={`${review.color} p-6 rounded-2xl shadow`}>
                        <div className="flex mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-4">"{review.text}"</p>
                        <p className="font-semibold text-gray-800">— {review.name}</p>
                    </div>
                ))}
            </section>

            {/* Video Testimonial */}
            {/* <section className="text-center px-6 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Patient Stories
        </h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Patient Testimonial"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section> */}

            {/* Google Reviews CTA */}
            <section className="bg-blue-600 text-white py-8 text-center">
                <h3 className="text-xl font-semibold mb-6">Want to read more?</h3>
                <a
                    href="https://www.google.com/search?q=R-Smile+Dental+Care+reviews+usa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
                >
                    View All Google Reviews
                </a>
            </section>

            <ServicesSection />
            <ContactSection />
        </div>
    );
};

export default Testimonials;
