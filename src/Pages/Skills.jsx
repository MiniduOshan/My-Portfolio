import React from "react";
// Import icons from react-icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiC,
} from "react-icons/si";
import { GrCycle } from "react-icons/gr"; // For OOP

// A reusable card component for skills
const SkillCard = ({ icon, skill, color }) => (
  <div
    className="group bg-white/10 p-3 rounded-lg border border-white/20 
    flex flex-col items-center justify-center gap-1 
    transition-all duration-300 ease-in-out
    hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 hover:shadow-xl"
  >
    {/* Icon: Reduced to text-4xl */}
    <span
      className="text-4xl text-gray-300 transition-all duration-300 group-hover:scale-110"
      style={{ color: color }} // Apply color directly
    >
      {icon}
    </span>
    {/* Skill Name: Reduced to text-xs */}
    <p className="text-xs font-medium text-white">{skill}</p>
  </div>
);

const Skills = () => {
  return (
    // --- FIXED: Reduced vertical padding to 'py-16' (from py-24) ---
    <section className="flex flex-col items-center justify-center py-8 px-8 text-gray-100">
      {/* --- FIXED: Reduced margin-bottom to 'mb-10' (from mb-12) --- */}
      <h2 className="text-4xl font-bold mb-10 animate-fade-in">
        Technical Skills
      </h2>

      {/* --- FIXED: Reduced space-y to 'space-y-6' (from space-y-8) --- */}
      <div className="w-full max-w-6xl space-y-2">
        {/* Frontend Section */}
        <div>
          {/* --- FIXED: Reduced margin-bottom to 'mb-4' (from mb-5) --- */}
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4 text-center md:text-left">
            Frontend
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
            <SkillCard icon={<FaReact />} skill="React" color="#61DAFB" />
            <SkillCard
              icon={<SiJavascript />}
              skill="JavaScript"
              color="#F7DF1E"
            />
            <SkillCard
              icon={<SiTypescript />}
              skill="Typescript"
              color="#3178C6"
            />
            <SkillCard icon={<FaHtml5 />} skill="HTML5" color="#E34F26" />
            <SkillCard icon={<FaCss3Alt />} skill="CSS3" color="#1572B6" />
          </div>
        </div>

        {/* Backend Section */}
        <div>
          {/* --- FIXED: Reduced margin-bottom to 'mb-4' (from mb-5) --- */}
          <h3 className="text-2xl font-semibold text-green-300 mb-4 text-center md:text-left">
            Backend
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
            <SkillCard icon={<FaNodeJs />} skill="Node.js" color="#339933" />
            <SkillCard icon={<SiExpress />} skill="Express" color="#FFFFFF" />
            <SkillCard icon={<FaJava />} skill="Java" color="#f89820" />
            <SkillCard icon={<FaPython />} skill="Python" color="#3776AB" />
            <SkillCard icon={<SiC />} skill="C" color="#A8B9CC" />
            <SkillCard
              icon={<GrCycle />}
              skill="OOP"
              color="#FFFFFF"
            />
          </div>
        </div>

        {/* Databases & Tools Section */}
        <div>
          {/* --- FIXED: Reduced margin-bottom to 'mb-4' (from mb-5) --- */}
          <h3 className="text-2xl font-semibold text-orange-300 mb-2 text-center md:text-left">
            Databases & Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
            <SkillCard icon={<SiMongodb />} skill="Mongo DB" color="#47A248" />
            <SkillCard icon={<FaDocker />} skill="Docker" color="#2496ED" />
            <SkillCard icon={<FaGitAlt />} skill="Git" color="#F05032" />
            <SkillCard icon={<FaGithub />} skill="GitHub" color="#FFFFFF" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;