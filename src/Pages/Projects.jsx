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
import blogImg from "../assets/blog-site.png";
import weatherImg from "../assets/weather-app.png";
import placeholderImg from "../assets/placeholder.png";
import todoImg from "../assets/todo-app.png";
import calculator from "../assets/calculator.png";
import quizeAppImg from "../assets/quizeApp.png";
import cvMakerImg from "../assets/cv-maker.png";
import garagesystem from "../assets/garagesystem.png";
import multitredfileserver from "../assets/multitredfileserver.png";
import tyre from "../assets/tyre.png";
import aurion from "../assets/aurion.png";
import financialtracker from "../assets/financialtracker.png";
import lms from "../assets/lms.png";
import crm from "../assets/crm.png";

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
          projectUrl="https://github.com/cycotechnolgies/DSMS_MiniProject"
        />
        <ProjectCard
          title="Code Cast News App"
          description="Real-time university news mobile app with Firebase for instant updates and secure admin authentication."
          tech={["Figma", "Java", "Firebase"]}
          imgSrc={codecastImg}
          projectUrl="https://github.com/MiniduOshan/CodeCast-News"
        />
        <ProjectCard
          title="Online Clothing Shop"
          description="E-commerce web application with product listings, shopping cart, user authentication, and payment gateway integration."
          tech={["MERN"]}
          imgSrc={clothingShopImg}
          projectUrl="https://github.com/MiniduOshan/Online-Clothing-Shop"
        />
        <ProjectCard
          title="Delivery Tracking System"
          description="Created a real-time delivery tracking system with REST API endpoints and location-based updates for courier management."
          tech={["Ballerina", "API"]}
          imgSrc={deliveryImg}
          projectUrl="https://github.com/MiniduOshan/Delivery-Tracking-System"
        />
                <ProjectCard
          title="Library Management System (Web)"
          description="Automated book issuance and member tracking system reducing manual workload by 80%; implemented CRUD operations and SQL data management."
          tech={["PHP", "JavaScript", "MySQL"]}
          imgSrc={libraryWebImg}
          projectUrl="https://github.com/cycotechnolgies/LibararyManagementSystem"
        />
        <ProjectCard
          title="Library Management System (Desktop)"
          description="Desktop application for efficient book and user management with fine tracking and reporting tools."
          tech={["C#", "SQL"]}
          imgSrc={libraryDesktopImg}
        />
        <ProjectCard
          title="React App Generator CLI"
          description="Command-line tool that automates React project setup, improving developer productivity and reducing setup time by 70%."
          tech={["Node.js", "CLI"]}
          imgSrc={cliImg}
          projectUrl="https://github.com/MiniduOshan/custom-react-app-generator-cli"
        />
        <ProjectCard
          title="Gaming Event Portal"
          description="Gaming tournament portal with Firebase integration and real-time leaderboards."
          tech={["React", "Firebase"]}
          imgSrc={gamingImg}
          projectUrl="https://techwarfare.netlify.app/"
        />
        <ProjectCard
          title="Blog Site"
          description="Containerized blog app built with Docker and JavaScript, supporting post and comment management."
          tech={["Docker", "JavaScript"]}
          imgSrc={blogImg }
          // imgSrc={placeholderImg}
          projectUrl="https://github.com/MiniduOshan/blog-site"
        />
        <ProjectCard
          title="Weather App"
          description="Responsive weather app providing real-time data from a weather API with a modern UI built using Tailwind CSS."
          tech={["React", "Node.js", "API", "Tailwind CSS"]}
          imgSrc={weatherImg}
          // imgSrc={placeholderImg}
          projectUrl="https://github.com/MiniduOshan/Weather-App"
        />
        <ProjectCard
          title="Todo App"
          description="Full-featured task manager with CRUD, filters, due dates, and status tracking."
          tech={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
          imgSrc={todoImg}
          projectUrl="https://github.com/MiniduOshan/To-Do-App" // replace with your GitHub or live demo link
        />
        <ProjectCard
          title="Calculator"
          description="Responsive calculator built using a CSS grid layout for a clean, intuitive interface."
          tech={["React","Tailwind CSS"]}
          imgSrc={calculator}
          projectUrl="https://github.com/MiniduOshan/React-Calculator" // replace with your GitHub or live demo link
        />
        <ProjectCard
          title="CV-Maker"
          description="Responsive CV Maker built with React and CSS Grid, featuring a clean and intuitive user interface."
          tech={["React","Tailwind CSS"]}
          imgSrc={cvMakerImg}
          // imgSrc={placeholderImg}
          projectUrl="https://github.com/MiniduOshan/CV-Maker" // replace with your GitHub or live demo link
        />
        <ProjectCard
          title="Quize App"
          description="A fully responsive Quiz App built with React, featuring multiple-choice questions, real-time score tracking, and a clean, intuitive user interface for an engaging user experience."
          tech={["React","Tailwind CSS"]}
          imgSrc={quizeAppImg}
          // imgSrc={placeholderImg}
          projectUrl="https://github.com/MiniduOshan/Quiz-App" // replace with your GitHub or live demo link
        />
        <ProjectCard
          title="Garage Management System"
          description="MERN-based platform to manage vehicles, service history, bookings, parts inventory, and customer records for garage operations."
          tech={["MERN", "Tailwind CSS"]}
          imgSrc={garagesystem}
          projectUrl="#"
        />
        <ProjectCard
          title="Library Management System (MERN)"
          description="Full-stack LMS for tracking books, memberships, borrowing workflows, and admin analytics with role-based access."
          tech={["MERN"]}
          imgSrc={lms}
          projectUrl="#"
        />
        <ProjectCard
          title="CLI Task Manager"
          description="Rust-powered command-line task manager with fast local storage, priority tags, and deadline management."
          tech={["Rust", "CLI"]}
          imgSrc={placeholderImg}
          projectUrl="#"
        />
        <ProjectCard
          title="RAG App with Ollama"
          description="Document-aware retrieval-augmented generation app using Python, Flask, and Ollama for local AI-assisted Q&A."
          tech={["Python", "Flask", "Ollama", "RAG"]}
          imgSrc={placeholderImg}
          projectUrl="#"
        />
        <ProjectCard
          title="AI Chatbot (Flask)"
          description="Conversational AI chatbot backend built with Flask, supporting context-aware interactions and API integration."
          tech={["Python", "Flask", "AI"]}
          imgSrc={placeholderImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Academic Management System"
          description="MERN application for managing students, courses, timetables, results, and faculty operations in one dashboard."
          tech={["MERN"]}
          imgSrc={placeholderImg}
          projectUrl="#"
        />
        <ProjectCard
          title="POS System for Shop"
          description="Point-of-sale system built with Laravel for billing, inventory management, sales reports, and customer transactions."
          tech={["PHP", "Laravel", "MySQL"]}
          imgSrc={placeholderImg}
          projectUrl="#"
        />
        <ProjectCard
          title="Tyre Shop Management System"
          description="Business system for tyre inventory, fitment scheduling, supplier tracking, and invoice generation."
          tech={["Web App", "Management System"]}
          imgSrc={tyre}
          projectUrl="#"
        />
        <ProjectCard
          title="Aurion Company Official Website"
          description="Corporate website project focused on brand identity, service presentation, responsive layout, and contact funnels."
          tech={["Frontend", "Corporate Website"]}
          imgSrc={aurion}
          projectUrl="#"
        />
        <ProjectCard
          title="Financial Tracker"
          description="Personal and business finance tracker for income, expenses, budgeting insights, and monthly analytics."
          tech={["Finance", "Tracking", "Dashboard"]}
          imgSrc={financialtracker}
          projectUrl="#"
        />
        <ProjectCard
          title="Multithread File Server"
          description="Python/Flask file server with multithreaded request handling for concurrent uploads, downloads, and file management."
          tech={["Python", "Flask", "Multithreading"]}
          imgSrc={multitredfileserver}
          projectUrl="#"
        />
        <ProjectCard
          title="CRM System"
          description="Customer relationship management platform for lead tracking, follow-ups, communication logs, and reporting."
          tech={["Web App", "CRM"]}
          imgSrc={crm}
          projectUrl="#"
        />
      </div>
    </section>
  );
};

export default Projects;
