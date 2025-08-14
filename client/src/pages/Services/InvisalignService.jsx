import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const Invisalign = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Invisalign Clear Aligners</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Straighten your teeth discreetly and comfortably with custom-made clear aligners.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Invisalign?</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Invisalign is a modern orthodontic treatment that uses a series of removable, clear plastic
                            aligners to gradually move your teeth into their ideal position—without the need for metal
                            braces.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            They are virtually invisible, comfortable to wear, and easy to remove for eating, brushing,
                            and flossing.
                        </p>
                        <Button onClick={openDentrixModal}>Book Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678103.jpg"
                            alt="Invisalign Clear Aligners"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Benefits of Invisalign</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Virtually invisible appearance",
                            "Comfortable, no metal wires or brackets",
                            "Removable for eating and cleaning",
                            "Custom-made for a perfect fit",
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Invisalign Process</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Consultation to assess your teeth and goals.</li>
                        <li>3D digital scan for a custom treatment plan.</li>
                        <li>Receive your set of aligners and instructions.</li>
                        <li>Wear each aligner for about 1–2 weeks.</li>
                        <li>Regular check-ups to monitor progress.</li>
                    </ol>
                </section>

                {/* Risks */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Possible Risks</h2>
                    <p className="text-gray-700">
                        While Invisalign is safe, some patients may experience mild discomfort, temporary speech
                        changes, or slower results if aligners are not worn as recommended.
                    </p>
                </section>

                {/* FAQ */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">How long does Invisalign treatment take?</h3>
                            <p className="text-gray-700">Most cases take 6–18 months, depending on complexity.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Can I eat with Invisalign?</h3>
                            <p className="text-gray-700">
                                You should remove your aligners while eating or drinking anything other than water.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Is Invisalign as effective as braces?</h3>
                            <p className="text-gray-700">
                                Yes, for many cases, Invisalign can achieve the same results with greater comfort and
                                aesthetics.
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

export default Invisalign;
