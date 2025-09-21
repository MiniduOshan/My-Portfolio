import React, { useRef, useEffect, useState } from 'react';

const Section = ({ id, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contentClasses = `
    w-full max-w-md px-4 py-8 md:p-12
    bg-white rounded-xl shadow-lg transition-all duration-800 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
  `;

  return (
    <section
      id={id}
      ref={sectionRef}
      className={contentClasses}
    >
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-blue-500 mr-4"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;