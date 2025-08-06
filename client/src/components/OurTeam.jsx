import React from "react";

const OurTeam = () => {
  const doctors = [
    {
      name: "Debbie Baran",
      title: "RDH",
      img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1675266.jpeg",
      bio: "I thoroughly enjoy working for Dr. Cetel and his office. Since 1994, I have been with Dr. Cetel’s practice. I have been practicing Dental Hygiene for patients since 1984. I graduated #1 in my hygiene program. I feel confident that our Dental facility provides top-notch care which I am happy to contribute to. I enjoy my profession as a Dental Hygienist and strive to do my utmost in following the 'Golden rule' in treating our dental patients.",
      showAppointmentButton: false,
    },
    {
      name: "Dean Murrell",
      title: "RDH",
      img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1675268.jpeg",
      bio: "I received a Bachelor of Arts degree in Biology from Rutgers University and a Bachelor of Science degree in Dental Hygiene from Thomas Jefferson University. My hobbies and interests include kite flying, gourmet cooking, and playing keyboards for a jazz band. I am married and have two children.",
      showAppointmentButton: false,
    },
    {
      name: "Kim Hadfield",
      title: "RDH",
      img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1675270.jpeg",
      bio: "I am proud to say I have worked at Dr. Cetel's office as a hygienist over 20 years. Everyone here truly loves what they do which makes this a very special place. Our practice sets a high standard of care for our patients while creating a relaxing environment. I feel honored to work with such a dedicated group of professionals and hope to for many years to come. I have an associates degree from Camden County College and I hold a Bachelor's degree from Rowan University.",
      showAppointmentButton: false,
    },
    {
      name: "Nicole Pelczar",
      title: "",
      img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/1815900.jpeg",
      bio: "I have worked in the Dental field for about 4 years. I enjoy working with patients and seeing them smile when treatment is completed. I enjoy spending time with my husband and two dogs.",
      showAppointmentButton: false,
    },
    {
      name: "Christina",
      title: "RDH",
      img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2261007.jpeg",
      bio: "I completed my Associates Degree in Dental Hygiene at the Community College of Philadelphia. Making my patients feel cared for and comfortable is my priority. I have a passion for people and absolutely love my job. I am proud to be a part of this incredible team at Dr. Cetel's office.",
      showAppointmentButton: false,
    },
    {
      name: "Barbara",
      title: "RDH",
      img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2261996.jpeg",
      bio: "Providing high quality care, educating my patients on how to maintain optimum oral health, and making every appointment a positive experience are my top priorities as a dental hygienist. I graduated from Temple University School of Dental Hygiene in 1980 and have 40 years of experience in the field. I was a member of Dr Cetel’s staff for 10 years at the Mantua location and recently rejoined the practice. I feel extremely fortunate to be back in such a caring practice that is dedicated to meeting all of our patient’s dental needs. When not working, you’ll find me catching a game with my sports crazed family. Go Phillies!",
      showAppointmentButton: false,
    },
    {
      name: "Lucy Holton",
      title: "CDA",
      img: "",
      bio: "Hi! My name is Lucy Holton and I have enjoyed being a dental assistant for the past 15 years. When I'm not assisting, I enjoy spending time with my son Michael. I love going to the beach, fishing, and camping. I also enjoy volunteering as the President of the West Deptford High School PTO.",
      showAppointmentButton: false,
    },
  ];

  return (
    <section className="pt-28 px-6 sm:px-12 py-16 bg-blue-50 min-h-screen">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-md sm:text-4xl font-bold text-gray-400">
          Your smile deserves the best.
        </h2>
        <p className="text-gray-600 font-bold mt-10 text-6xl">
          Meet the dental team <br /> that puts you first.
        </p>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between items-center text-center max-w-sm w-full mx-auto"
          >
            <div>
              <img
                src={
                  doc.img ||
                  "https://thumbs.dreamstime.com/b/doctor-icon-man-avatar-medical-mask-coat-isolated-white-background-245788736.jpg"
                }
                alt={doc.name}
                className="w-full h-64 object-top rounded-xl shadow-sm"
              />
              <div className="mt-4 space-y-1">
                <h3 className="text-xl font-bold text-blue-900">{doc.name}</h3>
                <p className="text-gray-500 text-sm">{doc.title}</p>
                <p className="text-gray-700 text-sm mt-2">{doc.bio}</p>
              </div>
            </div>
            {doc.showAppointmentButton && (
              <button
                href="#"
                className="border-2 border-blue-950 rounded-full px-4 py-2 mt-4 hover:bg-blue-950 cursor-pointer hover:text-white hover:font-medium transition duration-300"
              >
                Request Appointment
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
