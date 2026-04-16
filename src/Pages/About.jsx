import React from "react";
// Import icons for the new "At a Glance" section
import { FaAward, FaBriefcase, FaCode, FaPaintBrush } from 'react-icons/fa';

// A reusable card for the "At a Glance" highlights
const HighlightCard = ({ icon, title, text }) => (
  <div className="bg-white/10 p-6 rounded-lg border border-white/20 shadow-xl 
                  flex items-center gap-4 transition-all duration-300 
                  hover:bg-white/20 hover:border-white/30 hover:-translate-y-1">
    <span className="text-4xl text-purple-300">{icon}</span>
    <div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-gray-300">{text}</p>
    </div>
  </div>
);

const About = () => {
  return (
    // --- FIXED: Removed 'min-h-screen' and using 'py-16' ---
    <section className="py-16 px-8 text-gray-100">
      
      {/* --- FIXED: This is now the main title for the page --- */}
      <h2 className="text-4xl font-bold mb-8 animate-fade-in text-center">About Me</h2>
      
      {/* Two-column layout for the text */}
      <div className="grid grid-cols-1 text-gray-200 mb-12">
        <p className="animate-fade-in delay-200">
          Motivated BICT undergraduate at the University of Colombo, certified Database Administrator, and freelance web designer with over 2 years
          of experience in developing responsive and dynamic web applications.
          Currently working as an Intern Software Engineer at Fishifox Pvt Ltd,
          gaining hands-on industry experience in software development.
          Skilled in MERN Stack, and UI/UX design, with a solid
          foundation in database management and backend development. Passionate
          about crafting efficient, user-focused software solutions.
        </p>
      </div>

      {/* --- NEW: "At a Glance" section for better UI/UX --- */}
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in delay-500">
        <HighlightCard
          icon={<FaBriefcase />}
          title="Experience"
          text="Intern Software Engineer - Fishifox Pvt Ltd"
        />
        <HighlightCard
          icon={<FaCode />}
          title="Core Stack"
          text="MERN Stack"
        />
        <HighlightCard
          icon={<FaPaintBrush />}
          title="Specialty"
          text="REACT"
        />
        <HighlightCard
          icon={<FaAward />}
          title="Certified"
          text="Database Admin"
        />
      </div>

    </section>
  );
};

export default About;