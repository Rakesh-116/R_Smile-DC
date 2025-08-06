// components/ContactSection.jsx
import React from "react";
import { MdAccessTime, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Button from "./Button";

const ContactSection = ({ openDentrixModal }) => {
  return (
    <section id="contact" className="bg-white py-20 px-6 sm:px-12 pt-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Info + Hours */}
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
              <a href="tel:8562109508" className="hover:underline">
                (856) 210-9508
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
              onClick={() => (window.location.href = "tel:8562109508")}
            >
              Call Us
            </Button>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Send Us a Message
          </h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded-md p-3 text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md p-3 text-sm"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-md p-3 text-sm sm:col-span-2"
              required
            />
            <textarea
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
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium sm:col-span-2 hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
