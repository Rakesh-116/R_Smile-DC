import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const OralSurgery = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Oral Surgery</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Gentle, professional oral surgery care in a comfortable and supportive environment.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Expert Oral Surgery in Sewell, NJ</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The thought of oral surgery can make anyone feel uneasy. At R-Smile Dental Care, we create a
                            relaxing and supportive atmosphere, ensuring your comfort from consultation to recovery.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our experienced team offers a range of surgical treatments, from tooth extractions to dental
                            implants, with comprehensive pre- and post-operative care.
                        </p>
                        <Button onClick={openDentrixModal}>Book Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678095.jpg"
                            alt="Oral Surgery"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Common Procedures */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Common Oral Surgery Procedures
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Tooth extractions (including wisdom teeth)",
                            "Removal of broken or severely decayed teeth",
                            "Dental implant placement",
                            "Treatment of impacted teeth",
                            "Orthodontic extractions for crowding",
                        ].map((procedure, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <FaCheckCircle className="text-blue-600 mt-1" />
                                <p className="text-gray-700">{procedure}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reasons for Extraction */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">When You Might Need a Tooth Extraction</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Impacted or partially erupted wisdom teeth</li>
                        <li>Trauma causing cracked or broken teeth</li>
                        <li>Decay beyond repair</li>
                        <li>Root fractures</li>
                        <li>Primary teeth not falling out on time</li>
                        <li>Part of an orthodontic treatment plan</li>
                    </ul>
                </section>

                {/* Anesthesia Options */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Anesthesia Options for Comfort</h2>
                    <p className="text-gray-700 mb-4">
                        We offer different anesthesia options to ensure your procedure is as comfortable as possible:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                            <strong>Local Anesthesia:</strong> Numbs pain in the treatment area without affecting
                            consciousness.
                        </li>
                        <li>
                            <strong>Nitrous Oxide (“Laughing Gas”):</strong> Helps you feel relaxed while staying awake
                            during the procedure.
                        </li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">Is oral surgery painful?</h3>
                            <p className="text-gray-700">
                                With modern anesthesia and gentle techniques, discomfort during surgery is minimal.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">What is recovery like?</h3>
                            <p className="text-gray-700">
                                Most patients experience mild swelling or soreness for a few days, which can be managed
                                with prescribed medication and proper aftercare.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Will I need someone to drive me home?</h3>
                            <p className="text-gray-700">
                                If sedation is used, yes. For local anesthesia only, you can typically drive yourself.
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

export default OralSurgery;
