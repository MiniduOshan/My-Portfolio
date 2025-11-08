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
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import MobileSectionsScroller from "./Components/MobileSectionsScroller";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <>
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
        <ParallaxBackground />

        <div className="flex flex-col md:flex-row gap-6 p-6 relative z-10">
          {/* Profile (sticky left column on desktop) */}
          <div className="w-full md:w-72 flex-shrink-0">
          {/* CHANGED: Added 'md:' prefix. 
            Now it's only sticky on medium screens and up.
          */}
            <div className="md:sticky md:top-6">
              <Profile />
            </div>
          </div>

          {/* Main content area */}
          {/* CHANGED: Added 'md:' prefix to sticky and height.
            On mobile, this div will now have a natural height.
          */}
          <div className="flex-1 md:sticky md:top-6 md:h-[calc(100vh-3rem)]">
            <Body className="flex flex-col h-full">
              <Header />

              {isMobile ? (
                <MobileSectionsScroller />
              ) : (
                <div className="p-0 md:p-0 mt-4 flex-1 overflow-y-auto">
                  <Routes>
                    {/* ... your routes ... */}
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/certificate" element={<Certificate />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              )}
            </Body>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;