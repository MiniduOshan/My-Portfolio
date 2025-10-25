import React from "react";

// A reusable card for certificates
const CertCard = ({ title, issuer, date, credentialId }) => (
  <div className="bg-white/10 p-5 rounded-lg border border-white/20 shadow-lg flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-purple-300 text-sm mt-1">{issuer}</p>
      <p className="text-gray-300 text-sm mt-2">Issued: {date}</p>
    </div>
    {credentialId && (
      <a
        href="#" // TODO: Add actual credential link
        className="text-sm text-cyan-300 mt-4 hover:underline"
      >
        Credential ID: {credentialId}
      </a>
    )}
  </div>
);

const Certification = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 text-gray-100">
      <h2 className="text-4xl font-bold mb-12 animate-fade-in">
        Certificates
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* All certificate data is from [cite: 37] */}
        <CertCard
          title="Google UX design professional certificate"
          issuer="Google"
          date="Feb 2025"
          credentialId="J6UEUH4GOHNG"
        />
        <CertCard
          title="MongoDB Certified DBA Associate"
          issuer="MongoDB University"
          date="Aug 2025"
          credentialId="MDBqdd3n24w6b"
        />
        <CertCard
          title="Aviatrix Certified Engineer"
          issuer="Aviatrix"
          date="Oct 2025"
          credentialId="2025-27208"
        />
        <CertCard
          title="Introduction to Linux LFS101"
          issuer="Linux Foundation"
          date="Sep 2025"
          credentialId="LF714rvyh90c"
        />
        <CertCard
          title="Professional certificate in C programming"
          issuer="Programiz"
          date="Jan 2024"
          credentialId="8B592D583B5B"
        />
        <CertCard
          title="Postman API Fundamentals Student Expert"
          issuer="Postman"
          date="Aug 2025"
          
        />
        <CertCard
          title="Full Stack Development"
          issuer="University of Moratuwa"
          date="Apr 2022"
          credentialId="6fjoFXUduC"
        />
      </div>
    </section>
  );
};

export default Certification;