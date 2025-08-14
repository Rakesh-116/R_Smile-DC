import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const TeethWhitening = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Teeth Whitening</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Brighten your smile with safe, effective, and professional teeth whitening treatments.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Professional Teeth Whitening in Sewell, NJ
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Over time, many adults experience stained or discolored teeth due to diet, lifestyle, or
                            other factors. Our professional teeth whitening treatments are designed to safely and
                            effectively enhance your smile.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Using custom-fitted trays and professional-grade whitening solutions, we help you achieve a
                            brighter, more confident smile in just a couple of weeks.
                        </p>
                        <Button onClick={openDentrixModal}>Book Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678102.jpg"
                            alt="Teeth Whitening Treatment"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Causes of Staining */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Common Causes of Tooth Discoloration
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Berries, citrus fruits, and balsamic vinegar",
                            "Coffee, tea, wine, and soda",
                            "Smoking or chewing tobacco",
                            "Trauma, illness, or certain medications",
                        ].map((cause, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 mt-1" />
                                <p className="text-gray-700">{cause}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Procedure */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Whitening Process</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Comprehensive cleaning and dental check to ensure optimal results.</li>
                        <li>Take impressions to create custom-fitted whitening trays.</li>
                        <li>Provide professional-grade whitening gel and detailed instructions.</li>
                        <li>Wear trays up to 4 hours a day for 1–2 weeks.</li>
                        <li>Enjoy your bright, picture-perfect smile.</li>
                    </ol>
                </section>

                {/* Maintenance */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Maintaining Your Results</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Avoid stain-causing foods and drinks.</li>
                        <li>Use a straw to limit liquid contact with teeth.</li>
                        <li>Brush twice daily with whitening toothpaste.</li>
                        <li>Floss daily and avoid tobacco products.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">Is teeth whitening safe?</h3>
                            <p className="text-gray-700">
                                Yes, our professional treatments are safe and closely monitored to minimize sensitivity.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">How long will my results last?</h3>
                            <p className="text-gray-700">
                                Results vary, but with proper care, most patients enjoy a bright smile for 6–12 months.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">What if I have sensitive teeth?</h3>
                            <p className="text-gray-700">
                                We can adjust your treatment plan and recommend products to help manage sensitivity.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <ServicesSection />
            <ContactSection />
        </div>
    );
};

export default TeethWhitening;
