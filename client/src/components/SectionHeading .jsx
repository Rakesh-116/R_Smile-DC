// components/SectionHeading.jsx
import React from "react";

const SectionHeading = ({ label, title }) => (
  <div className="max-w-6xl mx-auto mb-12">
    <p className="text-blue-600 font-semibold uppercase text-sm tracking-wide">
      {label}
    </p>
    <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-1">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
