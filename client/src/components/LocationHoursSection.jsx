import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { MdLocationOn, MdAccessTime, MdPhone } from "react-icons/md";

const LocationHoursSection = ({ openDentrixModal }) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* 📍 Location Info */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-blue-800 font-semibold uppercase text-sm">
            <MdLocationOn className="text-xl" />
            <span>Location</span>
          </div>
          <h3 className="text-2xl text-blue-950 font-bold mb-2">
            R-Smile Dental Care
          </h3>
          <p className="text-gray-700 text-sm mb-1">
            100B Kings Way West, Suite 100B
          </p>
          <p className="text-gray-700 text-sm">Sewell, NJ 08080</p>
          <p className="text-gray-700 text-sm mt-4">
            <MdPhone className="inline-block mr-1" />
            <strong>Phone:</strong> 856-210-9508
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Fax:</strong> 856-537-3803
          </p>
        </div>

        {/* ⏰ Office Hours */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-blue-800 font-semibold uppercase text-sm">
            <MdAccessTime className="text-xl" />
            <span>Office Hours</span>
          </div>
          <ul className="text-gray-700 text-sm leading-relaxed">
            <li>Monday: 9:00 am – 7:00 pm</li>
            <li>Tuesday: 2:00 pm – 7:00 pm</li>
            <li>Wednesday: 9:00 am – 7:00 pm</li>
            <li>Thursday: Closed</li>
            <li>Friday: Closed</li>
            <li>Saturday: 7:00 am – 1:00 pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* 📞 Get in Touch */}
        <div>
          <div className="text-blue-800 font-semibold uppercase text-sm mb-2">
            Get in Touch
          </div>
          <p className="text-gray-700 text-sm mb-6">
            Book your visit or call us for quick assistance.
          </p>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-shadow hover:shadow-lg"
              onClick={openDentrixModal}
            >
              Book Appointment
            </Button>
            <Button onClick={() => (window.location.href = "tel:8562109508")}>
              856-210-9508
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHoursSection;
