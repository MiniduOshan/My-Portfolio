import React from "react";

// FIX: Add { children, className = "" } as props
function Body({ children, className = "" }) {
  const baseClasses = "rounded-2xl shadow-xl p-6 backdrop-blur-md bg-white/10 border border-white/20 text-gray-200";

  // FIX: Combine the base classes with any new classes
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}

export default Body;