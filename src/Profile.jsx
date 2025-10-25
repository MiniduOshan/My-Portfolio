import React from "react";
import dp from "./assets/dp.png"; // This is your profile picture

function Profile() {
  return (
    <div className="profile cursor-vertical-text w-full sm:w-80 md:w-64 rounded-2xl shadow-lg overflow-hidden 
      bg-white/20 backdrop-blur-md border border-white/30">
      
      {/* Image Section */}
      <img
        src={dp}
        alt="Minidu Oshan" // Updated alt text
        className="w-full h-44 object-cover rounded-t-2xl"
      />

      {/* Body Section */}
      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold text-white drop-shadow-md">
          Minidu Oshan {/* Updated Name */}
        </h2>
        <p className="text-gray-200 text-sm mt-2 drop-shadow-sm">
          {/* Updated Description */}
          Fullstack Developer & UI/UX Designer. Passionate about Cloud, DevOps, and building complete web solutions.
        </p>
        <a
          href="#" // TODO: Add link to your CV PDF
          className="mt-4 px-4 py-2 bg-blue-500/70 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600/70 transition shadow-md"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Profile;