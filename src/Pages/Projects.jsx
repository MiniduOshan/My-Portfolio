import React from "react";

// --- Import your project images (add placeholders if not available) ---
import drivingSchoolImg from "../assets/driving-school.png";
import libraryWebImg from "../assets/library-web.png";
import libraryDesktopImg from "../assets/library-desktop.png";
import codecastImg from "../assets/codecast-news.png";
import clothingShopImg from "../assets/online-shop.png";
import deliveryImg from "../assets/delivery-tracking.png";
import cliImg from "../assets/react-cli.png";
import gamingImg from "../assets/gaming-portal.png";
// import blogImg from "../assets/blog-site.png";
// import weatherImg from "../assets/weather-app.png";
import placeholderImg from "../assets/placeholder.png";
import todoImg from "../assets/todo-app.png";

// --- Reusable project card component ---
const ProjectCard = ({ title, description, tech, imgSrc, projectUrl }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-48 object-cover border-b border-white/20"
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>

      <div className="mb-4">
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-gray-100">Tech Stack:</span>{" "}
          {tech.join(", ")}
        </p>
      </div>

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
      <h2 className="text-4xl font-bold mb-4 animate-fade-in">
        Featured Projects
      </h2>
      <p className="text-lg text-gray-300 mb-12 animate-fade-in delay-100">
        Explore my latest work in full-stack development.
      </p>

      {/* Responsive grid layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Driving School Management System"
          description="Developed a full-featured platform for managing students, instructors, and payments; integrated secure login, database-driven scheduling, and report generation."
          tech={["MERN", "Tailwind CSS"]}
          imgSrc={drivingSchoolImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Library Management System (Web)"
          description="Automated book issuance and member tracking system reducing manual workload by 80%; implemented CRUD operations and SQL data management."
          tech={["PHP", "JavaScript", "MySQL"]}
          imgSrc={libraryWebImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Library Management System (Desktop)"
          description="Desktop application for efficient book and user management with fine tracking and reporting tools."
          tech={["C#", "SQL"]}
          imgSrc={libraryDesktopImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Code Cast News App"
          description="Real-time university news mobile app with Firebase for instant updates and secure admin authentication."
          tech={["Figma", "Java", "Firebase"]}
          imgSrc={codecastImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Online Clothing Shop"
          description="E-commerce web application with product listings, shopping cart, user authentication, and payment gateway integration."
          tech={["MERN"]}
          imgSrc={clothingShopImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Delivery Tracking System"
          description="Created a real-time delivery tracking system with REST API endpoints and location-based updates for courier management."
          tech={["Ballerina", "API"]}
          imgSrc={deliveryImg}
          projectUrl="#"
        />
        <ProjectCard
          title="React App Generator CLI"
          description="Command-line tool that automates React project setup, improving developer productivity and reducing setup time by 70%."
          tech={["Node.js", "CLI"]}
          imgSrc={cliImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Gaming Event Portal"
          description="Gaming tournament portal with Firebase integration and real-time leaderboards."
          tech={["React", "Firebase"]}
          imgSrc={gamingImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Blog Site"
          description="Containerized blog app built with Docker and JavaScript, supporting post and comment management."
          tech={["Docker", "JavaScript"]}
          // imgSrc={blogImg }
          imgSrc={placeholderImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Weather App"
          description="Responsive weather app providing real-time data from a weather API with a modern UI built using Tailwind CSS."
          tech={["React", "Node.js", "API", "Tailwind CSS"]}
          // imgSrc={weatherImg}
          imgSrc={placeholderImg}
          projectUrl="#"
        />
        <ProjectCard
        title="Todo App"
        description="Full-featured task manager with CRUD, filters, due dates, and status tracking. Supports authentication and persists data."
        tech={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
        imgSrc={todoImg}
        projectUrl="#" // replace with your GitHub or live demo link
        />
      </div>
    </section>
  );
};

export default Projects;
