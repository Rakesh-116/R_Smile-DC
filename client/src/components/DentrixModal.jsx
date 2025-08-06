// components/DentrixModal.jsx
import React from "react";
import { MdAccessTime } from "react-icons/md";

const DentrixModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const officeHours = [
    { day: "Monday", time: "9:00 am – 7:00 pm" },
    { day: "Tuesday", time: "2:00 pm – 7:00 pm" },
    { day: "Wednesday", time: "9:00 am – 7:00 pm" },
    { day: "Thursday", time: "Closed" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday", time: "7:00 am – 1:00 pm" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4 sm:px-8">
      <div className="bg-white w-full max-w-6xl h-[85vh] rounded-xl shadow-lg overflow-hidden relative flex flex-col md:flex-row">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold z-10"
        >
          &times;
        </button>

        {/* 🕒 Office Hours Sidebar */}
        <div className="bg-blue-50 w-full md:w-1/3 p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-4 text-blue-900 font-bold text-lg">
            <MdAccessTime className="text-xl" />
            Office Hours
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            {officeHours.map(({ day, time }) => (
              <li key={day} className="flex justify-between">
                <span>{day}</span>
                <span className="font-medium text-gray-900">{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 🦷 Dentrix iframe */}
        <div className="flex-1">
          <iframe
            src="https://bookit.dentrixascend.com/soe/new/dental?pid=ASC2000000000212&mode=externalLink"
            className="w-full h-full"
            title="Dentrix Appointment Booking"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DentrixModal;
