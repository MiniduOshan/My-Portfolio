import React from "react";

// --- Import your project images ---
import drivingSchoolImg from "../assets/driving-school.png";
import libraryWebImg from "../assets/library-web.png";
import libraryDesktopImg from "../assets/library-desktop.png";
import codecastImg from "../assets/codecast-news.png";

// A reusable card for projects
// Reverted to the dark "glassmorphism" style for better UI cohesion
const ProjectCard = ({ title, description, tech, imgSrc, projectUrl }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
    
    {/* Image section */}
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-48 object-cover border-b border-white/20" // Light border
    />

    {/* Content section (with padding) */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3> 
      <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
      
      {/* Tech Stack (light text) */}
      <div className="mb-4">
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-gray-100">Tech Stack:</span> {tech.join(', ')}
        </p>
      </div>

      {/* View Project Link (bright color for contrast) */}
      <a 
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-300 font-medium hover:text-cyan-100 transition-colors"
      >
        View Project &rarr;
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center p-8 text-gray-100">
      {/* Updated Title and Subtitle to match screenshot */}
      <h2 className="text-4xl font-bold mb-4 animate-fade-in">
        Featured Projects
      </h2>
      <p className="text-lg text-gray-300 mb-12 animate-fade-in delay-100">
        Explore my latest work in full-stack development.
      </p>

      {/* Updated Grid to be 2 columns for a better fit */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <ProjectCard
          title="Driving School Management System"
          description="Developed a full-stack system to manage driving school operations efficiently. Led a team and handled both frontend and backend development."
          tech={["MERN", "Tailwind CSS"]}
          imgSrc={drivingSchoolImg}
          projectUrl="#" // TODO: Add your project link
        />
        <ProjectCard
          title="Library Management System (Web)"
          description="Built a web app for managing users, books, and borrow/return operations with admin dashboards and fine calculations."
          tech={["PHP", "JS", "MySQL"]}
          imgSrc={libraryWebImg}
          projectUrl="#" // TODO: Add your project link
        />
        <ProjectCard
          title="Library Management System (Desktop)"
          description="Created a desktop app using Windows Forms for managing books, users, and transactions efficiently."
          tech={["C#", "SQL"]}
          imgSrc={libraryDesktopImg}
          projectUrl="#" // TODO: Add your project link
        />
        <ProjectCard
          title="CodeCast News App"
          description="Designed and developed a mobile app providing real-time university news and announcements using Firebase backend."
          tech={["Java", "Firebase", "Figma"]}
          imgSrc={codecastImg}
          projectUrl="#" // TODO: Add your project link
        />
      </div>
    </section>
  );
};

export default Projects;