import React from 'react';

const Hero = ({ onStartJourney }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Hi, I'm Minidu Oshan 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
        A passionate developer building elegant and user-friendly digital experiences.
        <br />
        Welcome to my journey!
      </p>
      <button
        onClick={onStartJourney}
        className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Start Journey
      </button>
    </div>
  );
};

export default Hero;