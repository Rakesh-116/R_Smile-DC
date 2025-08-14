import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const TeethCleaning = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Teeth Cleaning</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Keep your teeth white, bright, and healthy with professional teeth cleaning for lasting oral
                        health.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Professional Cleaning Matters</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Regular brushing and flossing are essential, but they can’t remove hardened tartar that
                            traps bacteria and increases your risk of cavities and gum disease. Professional cleaning
                            ensures your teeth and gums stay healthy, removing plaque and tartar from places your
                            toothbrush can't reach.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our gentle cleaning techniques help maintain a bright smile while preventing gum disease,
                            cavities, and other dental issues.
                        </p>
                        <Button onClick={openDentrixModal}>Book Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://www.shutterstock.com/image-photo/smiling-face-woman-dentist-closeup-600nw-2561523233.jpg"
                            alt="Teeth Cleaning"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Benefits of Professional Teeth Cleaning
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Removes hardened tartar and plaque",
                            "Reduces risk of cavities and gum disease",
                            "Keeps breath fresh",
                            "Polishes teeth for a brighter smile",
                            "Helps detect early signs of dental problems",
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 mt-1" />
                                <p className="text-gray-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What to Expect */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">What Happens During a Cleaning</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Examination of teeth and gums for signs of decay or disease.</li>
                        <li>Removal of plaque and tartar from gum lines and between teeth.</li>
                        <li>Polishing teeth with a professional-grade paste.</li>
                        <li>Flossing to remove remaining debris.</li>
                        <li>Fluoride treatment for added cavity protection.</li>
                    </ol>
                </section>

                {/* Deep Cleaning Info */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">What is a Deep Cleaning?</h2>
                    <p className="text-gray-700">
                        A deep cleaning, also known as scaling and root planing, goes below the gum line to remove
                        tartar and bacteria. This is recommended if plaque and tartar have caused gum inflammation,
                        tissue loss, or bone damage.
                    </p>
                </section>

                {/* FAQ */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">How often should I get my teeth cleaned?</h3>
                            <p className="text-gray-700">
                                Most people should have a professional cleaning every six months, but your dentist may
                                recommend more frequent visits based on your needs.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Does a cleaning hurt?</h3>
                            <p className="text-gray-700">
                                For most patients, cleanings are painless. Mild sensitivity may occur but is temporary.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">
                                Can smokers benefit from more frequent cleanings?
                            </h3>
                            <p className="text-gray-700">
                                Yes, smokers benefit from more frequent cleanings to reduce staining and the risk of gum
                                disease.
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

export default TeethCleaning;
