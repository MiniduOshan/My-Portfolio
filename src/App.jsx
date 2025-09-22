// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Body from "./Body";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Certificate from "./Pages/Certificate";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="flex flex-col md:flex-row gap-1 p-6 bg-gray-100 min-h-screen">
      {/* Profile Section (fixed width on desktop, full width on mobile) */}
      <div className="w-full md:w-72 flex-shrink-0">
        <Profile />
      </div>

      {/* Body Section (expands on desktop, full width on mobile) */}
      <div className="flex-1">
        <Body>
          <Header />
          <div className="p-1 md:p-1">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </Body>
      </div>
    </div>
  );
}

export default App;
