// components/LocationHoursSection.jsx
import React from "react";

const LocationHoursSection = () => {
  return (
    <section className="py-20 px-6 sm:px-12 bg-blue-50 rounded-4xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Location */}
        <div>
          <h3 className="text-gray-400 text-sm uppercase mb-2">Location</h3>
          <p className="text-blue-900 font-bold text-lg mb-1">
            R-Smile Dental Care
          </p>
          <p>100B Kings Way West, Suite 100B</p>
          <p>Washington Township, Sewell, NJ 08080</p>
          <p className="mt-2">Phone: 856-210-9508</p>
          <p>Fax: 856-537-3803</p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-gray-400 text-sm uppercase mb-2">Office Hours</h3>
          <ul className="text-gray-700">
            <li>Mon: 9:00 am – 7:00 pm</li>
            <li>Tue: 2:00 pm – 7:00 pm</li>
            <li>Wed: 9:00 am – 7:00 pm</li>
            <li>Thu: Closed</li>
            <li>Fri: Closed</li>
            <li>Sat: 7:00 am – 1:00 pm</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LocationHoursSection;
