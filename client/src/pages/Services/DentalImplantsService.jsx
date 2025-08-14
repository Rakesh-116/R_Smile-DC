import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import ServicesSection from "../../components/ServicesSection";
import ContactSection from "../../components/ContactSection";

const DentalImplants = ({ openDentrixModal }) => {
    return (
        <div>
            <div className="mt-20">
                {/* Hero Section */}
                <section className="bg-blue-50 py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Dental Implants</h1>
                    <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                        Replace missing teeth with durable, natural-looking dental implants for a confident smile.
                    </p>
                </section>

                {/* Intro with Image */}
                <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Dental Implants</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Dental implants are titanium posts surgically placed into the jawbone to replace missing
                            teeth roots. They provide a strong foundation for fixed or removable replacement teeth
                            designed to match your natural teeth.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Implants can restore function, improve oral health, and enhance your smile’s appearance.
                        </p>
                        <Button onClick={openDentrixModal}>Book Appointment</Button>
                    </div>

                    {/* Image */}
                    <div className="lg:w-2/5 w-full">
                        <img
                            src="https://sa1s3optim.patientpop.com/231x200/assets/images/provider/photos/1678100.jpg"
                            alt="Dental Implants"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Benefits */}
                <section className="bg-gray-50 py-12 px-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Benefits of Dental Implants</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            "Look and feel like natural teeth",
                            "Restore full chewing power",
                            "Prevent bone loss in the jaw",
                            "Long-lasting and durable solution",
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Dental Implant Procedure</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>Comprehensive exam and digital imaging.</li>
                        <li>Placement of the titanium implant into the jawbone.</li>
                        <li>Healing period to allow the implant to fuse with the bone.</li>
                        <li>Attachment of an abutment to the implant.</li>
                        <li>Placement of the custom crown or bridge.</li>
                    </ol>
                </section>

                {/* Risks */}
                <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Possible Risks</h2>
                    <p className="text-gray-700">
                        Dental implant surgery is safe and predictable when performed by experienced dentists. Rare
                        risks include infection, nerve damage, sinus issues, or implant failure due to poor healing.
                    </p>
                </section>

                {/* FAQ */}
                <section className="py-12 px-6 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">How long do dental implants last?</h3>
                            <p className="text-gray-700">
                                With proper care, dental implants can last 20+ years or even a lifetime.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Is the procedure painful?</h3>
                            <p className="text-gray-700">
                                Most patients experience minimal discomfort during and after surgery thanks to
                                anesthesia.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Can anyone get dental implants?</h3>
                            <p className="text-gray-700">
                                Most healthy adults are good candidates, but adequate jawbone density is needed for
                                support.
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

export default DentalImplants;
