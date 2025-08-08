import React, { useState } from "react";
import { MdAccessTime, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = ({ openDentrixModal }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rsddssewell@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Your message has been sent!");
        e.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 sm:px-12 pt-32">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out with questions or book an appointment below. We’re here
            for you.
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MdPhone className="text-blue-600" />
              <a href="tel:8564641900" className="hover:underline">
                (856) 464-1900
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-blue-600" />
              <a
                href="mailto:info@rsmiledental.com"
                className="hover:underline"
              >
                info@rsmiledental.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-blue-600" />
              <span>100B Kings Way West, Suite 100B, Sewell, NJ 08080</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <MdAccessTime /> Office Hours
            </h3>
            <ul className="text-sm text-gray-700">
              <li>Monday: 9:00 am – 7:00 pm</li>
              <li>Tuesday: 2:00 pm – 7:00 pm</li>
              <li>Wednesday: 9:00 am – 7:00 pm</li>
              <li>Thursday – Friday: Closed</li>
              <li>Saturday: 7:00 am – 1:00 pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Button onClick={openDentrixModal}>Book Appointment</Button>
            <Button
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={() => (window.location.href = "tel:8564641900")}
            >
              Call Us
            </Button>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Send Us a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* FormSubmit settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              name="name"
              type="text"
              placeholder="Name"
              className="border rounded-md p-3 text-sm"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border rounded-md p-3 text-sm"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="border rounded-md p-3 text-sm sm:col-span-2"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="border rounded-md p-3 text-sm sm:col-span-2"
              required
            />

            <div className="flex items-start gap-2 sm:col-span-2 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1 accent-blue-600"
                id="consent"
              />
              <label htmlFor="consent" className="text-gray-600">
                By submitting this form, you agree to send your information by
                email. Do not include sensitive health information.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-md font-medium sm:col-span-2 transition ${
                loading
                  ? "bg-gray-400 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
