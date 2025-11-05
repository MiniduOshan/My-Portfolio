import React from "react";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education";
import Certificate from "../Pages/Certificate";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

const sections = [
  { id: "about", label: "About", el: <About /> },
  { id: "skills", label: "Skills", el: <Skills /> },
  { id: "education", label: "Education", el: <Education /> },
  { id: "certificate", label: "Certificate", el: <Certificate /> },
  { id: "projects", label: "Projects", el: <Projects /> },
  { id: "contact", label: "Contact", el: <Contact /> },
];

export default function MobileSectionsScroller() {
  return (
    <div
      className="
        mt-4 flex-1 overflow-y-auto
        snap-y snap-mandatory
        scroll-smooth
      "
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="
            snap-start
            min-h-[calc(100vh-6rem)]
            px-0 md:px-0
          "
        >
          {s.el}
        </section>
      ))}
    </div>
  );
}
