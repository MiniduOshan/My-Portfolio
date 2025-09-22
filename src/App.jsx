import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Body from "./Body";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Certificate from "./Pages/Certificate";
import Projects from "./Pages/Projects";
import ParallaxBackground from "./Components/ParallaxBackground";

function App() {
  return (
    <>
      {/* Move keyframes here for the background crackle effect */}
      <style>
        {`
          @keyframes blueCrackle {
            0% { opacity: 0; transform: scale(0.5) translateY(0); }
            20% { opacity: 0.8; transform: scale(1) translateY(-10px); }
            80% { opacity: 0.8; transform: scale(1) translateY(10px); }
            100% { opacity: 0; transform: scale(0.5) translateY(0); }
          }
        `}
      </style>

      <div className="relative min-h-screen">
        {/* Parallax background */}
        <ParallaxBackground />

        {/* Flex container for profile and body */}
        <div className="flex flex-col md:flex-row gap-6 p-6 relative z-10">
          {/* Profile Section (fixed on desktop) */}
          <div className="w-full md:w-72 flex-shrink-0">
            <div className="sticky top-6">
              <Profile />
            </div>
          </div>

          {/* Main Body Section */}
          <div className="flex-1 sticky top-6">
            <Body>
              <Header />
              <div className="p-0 md:p-0 sticky top-6">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/certificate" element={<Certificate />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </Body>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
