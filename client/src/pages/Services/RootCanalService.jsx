import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const RootCanal = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Root Canal Therapy</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Save your natural tooth and relieve pain with gentle and precise root canal treatment.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Root Canal Therapy</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Root canal therapy is a procedure used to treat infection and save a tooth that might
                            otherwise need to be removed. It involves removing the infected pulp, cleaning and
                            disinfecting the tooth’s canals, and sealing it to prevent further infection.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            This treatment can relieve pain, restore function, and maintain your natural smile without
                            the need for extraction.
                        </p>
                        <Button onClick={openDentrixModal}>Book Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678099.jpg"
                            alt="Root Canal Therapy"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Benefits of Root Canal Therapy
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Relieves severe tooth pain",
                            "Saves the natural tooth",
                            "Prevents the spread of infection",
                            "Restores normal chewing and biting force",
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Root Canal Procedure</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Examine and take X-rays to assess the tooth.</li>
                        <li>Administer local anesthesia for comfort.</li>
                        <li>Remove the infected pulp and clean the canals.</li>
                        <li>Fill and seal the tooth to prevent reinfection.</li>
                        <li>Restore the tooth with a crown if necessary.</li>
                    </ol>
                </section>

                {/* Risks */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Possible Risks</h2>
                    <p className="text-gray-700">
                        Root canal therapy is generally safe and effective. Rarely, reinfection can occur if the tooth
                        develops new decay, cracks, or the filling material breaks down.
                    </p>
                </section>

                {/* FAQ */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">Is root canal therapy painful?</h3>
                            <p className="text-gray-700">
                                With modern anesthesia and techniques, most patients feel little to no pain during the
                                procedure.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">How long does it take to recover?</h3>
                            <p className="text-gray-700">
                                Mild soreness may last a few days, but you can resume normal activities almost
                                immediately.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Will I need a crown after a root canal?</h3>
                            <p className="text-gray-700">
                                In most cases, yes—a crown strengthens and protects the treated tooth for long-term use.
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

export default RootCanal;
