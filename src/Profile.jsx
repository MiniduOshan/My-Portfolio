import React from "react";
import dp from "./assets/dp.png";

function Profile() {
  return (
    <div className="profile cursor-vertical-text w-full sm:w-80 md:w-64 rounded-2xl shadow-lg overflow-hidden 
      bg-white/20 backdrop-blur-md border border-white/30">
      
      {/* Image Section */}
      <img
        src={dp}
        alt="Profile"
        className="w-full h-44 object-cover rounded-t-2xl"
      />

      {/* Body Section */}
      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold text-white drop-shadow-md">
          John Doe
        </h2>
        <p className="text-gray-200 text-sm mt-2 drop-shadow-sm">
          Frontend Developer at TechCorp. Passionate about UI/UX and clean code.
        </p>
        <a
          href="mailto:you@example.com"
          className="mt-4 px-4 py-2 bg-blue-500/70 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600/70 transition shadow-md"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Profile;
