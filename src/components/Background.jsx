import React from 'react';

const Background = () => {
  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="absolute w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 bottom-1/4 right-1/4 animate-pulse-slow"></div>
    </div>
  );
};

export default Background;