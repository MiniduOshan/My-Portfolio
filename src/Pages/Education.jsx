import React from "react";

// A reusable card for education entries
const EducationCard = ({ degree, institution, dates }) => (
  <div className="bg-white/10 p-6 rounded-lg border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-300">
    <h3 className="text-xl font-semibold text-white">{degree}</h3>
    <p className="text-purple-300 text-md mt-1">{institution}</p>
    <p className="text-gray-300 text-sm mt-2">{dates}</p>
  </div>
);

const Education = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 text-gray-100">
      <h2 className="text-4xl font-bold mb-12 animate-fade-in">
        Education 
      </h2>

      <div className="w-full max-w-3xl space-y-6">
        <EducationCard
          degree="Reading for Bachelor of Information and Communication Technology"
          institution="Faculty of Technology, University of Colombo"
          dates="2023-2027"
        />
        <EducationCard
          degree="IT Professionals (Certificate Level)"
          institution="British Computer Society UK (Chartered Institute for IT)"
          dates="2022-2023"
        />
        <EducationCard
          degree="Diploma in Information Technology"
          institution="Esoft Metro Campus, Pearson Assured"
          dates="2019-2020"
        />
        <EducationCard
          degree="GCE Advanced Level Examination in Engineering Technology Stream"
          institution="Pinnawala Central College, Rambukkana"
          dates="2017-2019"
        />
      </div>
    </section>
  );
};

export default Education;