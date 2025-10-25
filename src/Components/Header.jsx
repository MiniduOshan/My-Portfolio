import React, { useState } from "react";
// 1. Import NavLink (replaces Link)
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // 2. This function now sets the classes WITHOUT 'transition'
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-400" // Active link style (no transition)
      : "text-gray-200 hover:text-blue-400"; // Inactive link style (no transition)

  return (
    // Keeping your sticky classes
    <header className="backdrop-blur-md bg-gray-800 border border-white/20 rounded-xl p-4 shadow-lg sticky top-12.5 z-20">
      <div className="flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-blue-400 drop-shadow-md">
          My Portfolio
        </h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          {/* 3. Use NavLink and the new className function */}
          <NavLink to="/" className={navLinkClasses}>About</NavLink>
          <NavLink to="/skills" className={navLinkClasses}>Skills</NavLink>
          <NavLink to="/education" className={navLinkClasses}>Education</NavLink>
          <NavLink to="/certificate" className={navLinkClasses}>Certificate</NavLink>
          <NavLink to="/projects" className={navLinkClasses}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col mt-4 gap-4 md:hidden">
          {/* 3. Use NavLink here as well */}
          <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/certificate" className={navLinkClasses} onClick={() => setIsOpen(false)}>Certificate</NavLink>
          <NavLink to="/projects" className={navLinkClasses} onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/education" className={navLinkClasses} onClick={() => setIsOpen(false)}>Education</NavLink>
          <NavLink to="/skills" className={navLinkClasses} onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;