import React from "react";
// Import the icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

// A reusable component for a contact detail item
const ContactInfoItem = ({ icon, label, value, href }) => (
  <a
    href={href}
    className="bg-white/10 p-4 rounded-lg border border-white/20 flex items-center gap-4
    transition-all duration-300 hover:bg-white/20 hover:border-white/30"
  >
    <span className="text-purple-300 text-2xl">{icon}</span>
    <div>
      <p className="text-sm text-gray-300">{label}</p>
      <p className="text-md font-semibold text-white">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    // --- FIXED: Removed 'min-h-screen' and added 'py-16' ---
    <section className="flex flex-col items-center justify-center py-8 px-8 text-gray-100">
      <h2 className="text-4xl font-bold mb-12 animate-fade-in">Get In Touch</h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Contact Info & Socials */}
        <div className="flex flex-col justify-start">
          <h3 className="text-3xl font-semibold mb-6">Contact Details</h3>
          
          {/* --- FIXED: Restyled contact details into visual cards --- */}
          <div className="space-y-4 text-lg">
            <ContactInfoItem
              icon={<FaEnvelope />}
              label="Email"
              value=""
              href="mailto:"
            />
            <ContactInfoItem
              icon={<FaPhone />}
              label="Phone"
              value=""
              href="tel:"
            />
            <ContactInfoItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value="Sri-Lanka"
              href="#" // No link for location
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-10">Find me on</h3>
          {/* --- FIXED: Restyled social links to match theme --- */}
          <div className="flex space-x-4">
            <a
              href="#" // TODO: Add your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="#" // TODO: Add your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form (already looks good) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl p-8">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="your.email@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
              <textarea id="message" rows="5" className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full py-3 px-6 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;