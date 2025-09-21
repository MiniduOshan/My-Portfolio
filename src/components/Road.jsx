import React, { useEffect, useRef, useState } from 'react';

const Road = ({ journeyStarted }) => {
  const [showPaths, setShowPaths] = useState(false);
  const pathRef = useRef(null);

  useEffect(() => {
    if (journeyStarted) {
      setShowPaths(true);
    }
  }, [journeyStarted]);

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMin slice"
    >
      {/* Main S-shaped road path */}
      <path
        ref={pathRef}
        d="M 50 0 C 10 25, 90 75, 50 100"
        className={`stroke-gray-300 stroke-[2] fill-none transition-all duration-1000 ${showPaths ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Branch 1 (About) */}
      <path
        d="M 20 25 L 10 25"
        className={`stroke-blue-500 stroke-[1] fill-none transition-all duration-1000 delay-500 ${showPaths ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Branch 2 (Projects) */}
      <path
        d="M 80 75 L 90 75"
        className={`stroke-blue-500 stroke-[1] fill-none transition-all duration-1000 delay-700 ${showPaths ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Branch 3 (Contact) */}
      <path
        d="M 50 100 L 40 100"
        className={`stroke-blue-500 stroke-[1] fill-none transition-all duration-1000 delay-900 ${showPaths ? 'opacity-100' : 'opacity-0'}`}
      />
    </svg>
  );
};

export default Road;