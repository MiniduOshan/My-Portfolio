import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-blue-400" : "text-gray-200 hover:text-blue-400";

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <header className="backdrop-blur-md bg-gray-800 border border-white/20 rounded-xl p-4 shadow-lg sticky top-12 z-20">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400 drop-shadow-md">
          My Portfolio
        </h1>

        {/* Desktop nav uses routes */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={navLinkClasses}>About</NavLink>
          <NavLink to="/skills" className={navLinkClasses}>Skills</NavLink>
          <NavLink to="/education" className={navLinkClasses}>Education</NavLink>
          <NavLink to="/certificate" className={navLinkClasses}>Certificate</NavLink>
          <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu: scrolls to stacked sections instead of routing */}
      {isOpen && isMobile && (
        <nav className="flex flex-col mt-4 gap-4 md:hidden">
          <button className="text-gray-200 text-left" onClick={() => scrollToId("about")}>About</button>
          <button className="text-gray-200 text-left" onClick={() => scrollToId("skills")}>Skills</button>
          <button className="text-gray-200 text-left" onClick={() => scrollToId("education")}>Education</button>
          <button className="text-gray-200 text-left" onClick={() => scrollToId("certificate")}>Certificate</button>
          <button className="text-gray-200 text-left" onClick={() => scrollToId("projects")}>Projects</button>
          <button className="text-gray-200 text-left" onClick={() => scrollToId("contact")}>Contact</button>
        </nav>
      )}
    </header>
  );
}

export default Header;
