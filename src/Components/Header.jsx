import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 p-4 shadow-md sticky top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-gray-700">My Portfolio</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-blue-500 hover:underline">About</Link>
          <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
          <Link to="/certificate" className="text-blue-500 hover:underline">Certificate</Link>
          <Link to="/projects" className="text-blue-500 hover:underline">Projects</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col mt-4 gap-4 md:hidden">
          <Link to="/" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/certificate" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Certificate</Link>
          <Link to="/projects" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Projects</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
