import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const Dentures = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Dentures</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Restore your smile and chewing ability with custom-made, comfortable dentures.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Dentures</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Dentures are removable appliances that replace missing teeth and surrounding tissues. They
                            help restore your smile, improve speech, and make eating easier.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer both full and partial dentures tailored to fit comfortably and look natural.
                        </p>
                        <Button onClick={openDentrixModal}>Book Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678101.jpg"
                            alt="Dentures"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Benefits of Dentures</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Restore smile aesthetics",
                            "Improve chewing and speech",
                            "Support facial muscles",
                            "Custom-fitted for comfort",
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 mt-1" />
                                <p className="text-gray-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Procedure */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Denture Process</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Initial consultation and oral examination.</li>
                        <li>Impressions of your mouth for a precise fit.</li>
                        <li>Fabrication of dentures in a dental lab.</li>
                        <li>Fitting session to ensure comfort and function.</li>
                        <li>Adjustments and follow-up for the perfect fit.</li>
                    </ol>
                </section>

                {/* Risks */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Possible Risks</h2>
                    <p className="text-gray-700">
                        Dentures may cause initial discomfort, sore spots, or difficulty speaking until you adapt.
                        Regular adjustments help improve fit and comfort.
                    </p>
                </section>

                {/* FAQ */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">How long do dentures last?</h3>
                            <p className="text-gray-700">
                                With proper care, dentures typically last 5–8 years before needing replacement.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Can I eat normally with dentures?</h3>
                            <p className="text-gray-700">
                                Yes, but it may take a few weeks to adapt to chewing different foods.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Do dentures require special care?</h3>
                            <p className="text-gray-700">
                                Yes—clean them daily, handle them carefully, and keep them moist when not in use.
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

export default Dentures;
