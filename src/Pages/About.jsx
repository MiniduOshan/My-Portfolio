import React from "react";

const About = () => {
  return (
    <div className="space-y-24">
      {/* About Me Section */}
      <section className="min-h-screen flex items-center justify-center text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 max-w-xl">
          Hello! I’m a frontend developer building interactive experiences. Scroll down to see the parallax effect.
        </p>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center text-center bg-gray-50">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="mt-4 max-w-xl">Here are some of my amazing projects.</p>
      </section>

      {/* Certificates Section */}
      <section className="min-h-screen flex items-center justify-center text-center">
        <h2 className="text-4xl font-bold">Certificates</h2>
        <p className="mt-4 max-w-xl">I have earned multiple certifications to improve my skills.</p>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center text-center bg-gray-50">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="mt-4 max-w-xl">Get in touch for collaborations or just to say hi!</p>
      </section>
    </div>
  );
};

export default About;
