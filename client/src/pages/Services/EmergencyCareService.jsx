import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const EmergencyCare = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Emergency Dental Care</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Prompt care when you need it most — from severe toothaches to knocked-out teeth, we’re here for
                        your dental emergencies.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">When Every Second Counts</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Dental emergencies can happen anytime — and they often require quick action to prevent
                            further damage. Whether it’s a broken tooth, severe pain, or swelling, immediate
                            professional care can make all the difference.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Dr. Cetel and our team are committed to providing compassionate, same-day emergency
                            treatment to get you out of pain and back to smiling.
                        </p>
                        <Button onClick={openDentrixModal}>Call for Emergency Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678104.jpg"
                            alt="Emergency Dental Care"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Signs You Need Emergency Care */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Signs You May Need Emergency Dental Care
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Severe oral pain or swelling",
                            "Knocked-out or broken tooth",
                            "Bleeding from the mouth due to injury",
                            "Lost filling or crown",
                            "Shifting or loosened teeth",
                            "Unusual lumps or bumps on gums",
                        ].map((sign, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 mt-1" />
                                <p className="text-gray-700">{sign}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Prevention Tips */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Prevent Dental Emergencies</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Avoid chewing hard items like ice, hard candies, and popcorn kernels.</li>
                        <li>Wear a mouthguard when playing contact sports.</li>
                        <li>Never use your teeth to open packages or bottles.</li>
                        <li>Maintain good oral hygiene by brushing and flossing daily.</li>
                        <li>Limit sugary foods and drinks to prevent decay.</li>
                        <li>Stay up-to-date with regular dental checkups.</li>
                    </ol>
                </section>

                {/* FAQ */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">What should I do if I knock out a tooth?</h3>
                            <p className="text-gray-700">
                                Rinse it gently without scrubbing, place it back in the socket if possible, or store it
                                in milk. Seek dental care immediately for the best chance of saving the tooth.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">
                                Can a severe toothache be a dental emergency?
                            </h3>
                            <p className="text-gray-700">
                                Yes, especially if accompanied by swelling or fever. It could indicate an infection that
                                requires immediate treatment.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Are emergency visits more expensive?</h3>
                            <p className="text-gray-700">
                                Costs vary depending on the procedure needed, but treating an issue early often prevents
                                more expensive procedures later.
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

export default EmergencyCare;
