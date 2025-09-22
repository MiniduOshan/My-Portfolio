import React, { useState, useEffect } from "react";

const NUM_CRACKS = 30;
const MAX_SIZE = 15;
const MIN_SIZE = 5;
const ANIM_DURATION_MIN = 2;
const ANIM_DURATION_MAX = 5;

const ParallaxBackground = () => {
  const [cracks, setCracks] = useState([]);

  useEffect(() => {
    const newCracks = Array.from({ length: NUM_CRACKS }).map((_, i) => ({
      id: i,
      size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration:
        Math.random() * (ANIM_DURATION_MAX - ANIM_DURATION_MIN) +
        ANIM_DURATION_MIN,
      animationDelay: Math.random() * ANIM_DURATION_MAX,
    }));
    setCracks(newCracks);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden -z-10 bg-gray-900">
      {cracks.map((crack) => (
        <div
          key={crack.id}
          className="absolute rounded-full bg-blue-500 animate-blue-crackle"
          style={{
            "--size": `${crack.size}px`,
            "--left": `${crack.left}vw`,
            "--top": `${crack.top}vh`,
            "--animation-duration": `${crack.animationDuration}s`,
            "--animation-delay": `${crack.animationDelay}s`,
            width: `var(--size)`,
            height: `var(--size)`,
            left: `var(--left)`,
            top: `var(--top)`,
            boxShadow: `
              0 0 calc(var(--size) * 0.7) 0 rgba(0, 100, 255, 0.8),
              0 0 calc(var(--size) * 1.5) calc(var(--size) * 0.2) rgba(0, 150, 255, 0.5),
              0 0 calc(var(--size) * 2) calc(var(--size) * 0.4) rgba(0, 200, 255, 0.3)
            `,
            animation: `blueCrackle var(--animation-duration) infinite alternate ease-in-out var(--animation-delay)`,
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
