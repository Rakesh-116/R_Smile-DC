import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const Crowns = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Dental Crowns</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Restore and protect your damaged teeth with high-quality, natural-looking crowns.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Dental Crowns</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Dental crowns are custom-made caps that fit over damaged or decayed teeth to restore their
                            strength, function, and appearance. At R-Smile Dental Care, we use durable, tooth-colored
                            materials that blend seamlessly with your natural smile.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Crowns are ideal for teeth that have been weakened by decay, cracks, or large fillings and
                            can also be used to complete dental implants or hold dental bridges in place.
                        </p>
                        <Button onClick={openDentrixModal}>Book Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678098.jpg"
                            alt="Dental Crown"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Benefits of Dental Crowns</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Strengthens and protects damaged teeth",
                            "Restores natural tooth shape and size",
                            "Improves chewing and speaking ability",
                            "Matches the color of your natural teeth",
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Crown Procedure</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Examination & preparation of the tooth.</li>
                        <li>Taking impressions to create a custom-fit crown.</li>
                        <li>Placement of a temporary crown while the permanent one is made.</li>
                        <li>Fitting and bonding the permanent crown securely in place.</li>
                    </ol>
                </section>

                {/* Risks */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Possible Risks</h2>
                    <p className="text-gray-700">
                        While dental crowns are safe and long-lasting, some patients may experience minor sensitivity or
                        discomfort after placement. Rarely, a crown may loosen or chip and require repair.
                    </p>
                </section>

                {/* FAQ */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">How long do dental crowns last?</h3>
                            <p className="text-gray-700">
                                With proper care, crowns can last between 10–15 years or longer.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Do crowns require special care?</h3>
                            <p className="text-gray-700">
                                No special care is needed—just maintain good oral hygiene and regular check-ups.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Will my crown look natural?</h3>
                            <p className="text-gray-700">
                                Yes. We use tooth-colored materials that blend perfectly with your natural teeth.
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

export default Crowns;
