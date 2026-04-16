import React from "react";

// A reusable card for certificates
const CertCard = ({ title, issuer, date, credentialId, credential }) => (
  <div className="bg-white/10 p-5 rounded-lg border border-white/20 shadow-lg flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-purple-300 text-sm mt-1">{issuer}</p>
      <p className="text-gray-300 text-sm mt-2">Issued: {date}</p>
    </div>
    {credential ? (
      <a
        href={credential}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-cyan-300 mt-4 hover:underline"
      >
        Show Credential
      </a>
    ) : (
      credentialId && (
        <p className="text-sm text-cyan-300 mt-4">
          Credential ID: {credentialId}
        </p>
      )
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

        <CertCard
          title="Full Stack Development"
          issuer="University of Moratuwa"
          date="Apr 2022"
          credentialId="6fjoFXUduC"
          credential="https://drive.google.com/file/d/1jjEBeXpDJJUBr6ge9sh3b6LX6_nWtMKb/view"
        />
         <CertCard
          title="Professional certificate in C programming"
          issuer="Programiz"
          date="Jan 2024"
          credentialId="8B592D583B5B"
          credential="https://programiz.pro/certificates/detail/8B592D583B5B"
        />
         <CertCard
          title="Python NumPy for Data Science"
          issuer="Programiz"
          date="Feb 2024"
          credentialId="8AB4B871BAB0"
          credential="https://programiz.pro/certificates/detail/8AB4B871BAB0"
        />
          <CertCard
          title="Career Essentials in Generative AI"
          issuer="Microsoft & LinkedIn"
          date="Feb 2025"
          credential="https://www.linkedin.com/learning/certificates/56594e5fb066402087b721aa044773d42b4b1ec4b0cd75ab9e9e24c199bafff0"
        />
         <CertCard
          title="Google UX design professional certificate"
          issuer="Google"
          date="Feb 2025"
          credentialId="J6UEUH4GOHNG"
          credential="https://www.coursera.org/account/accomplishments/professional-cert/J6UEUH4GOHNG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof "
        />
        <CertCard
          title="Oracle Cloud Infrastructure Foundations"
          issuer="Oracle"
          date="Jul 2025"
          credential="https://catalog-education.oracle.com/ords/certview/sharebadge?id=120D68F79522001326CDE8334B9157B936C944EA6555516FF96BB5F40E112C93"
        />
         <CertCard
          title="Introduction to Cyber Security"
          issuer="CISCO"
          date="Jul 2025"
          credential="https://www.credly.com/badges/f17e5269-8e20-4926-8112-975f74240250/linked_in_profile"
        />
         <CertCard
          title="Ethical Hacking"
          issuer="CISCO"
          date="Aug 2025"
          credentialId="6fjoFXUduC"
          credential="https://www.credly.com/badges/a5c2cd1f-73fd-4c83-88f4-d87e2909ca43/public_url"
        />
         <CertCard
          title="Postman API Fundamentals Student Expert"
          issuer="Postman"
          date="Aug 2025"
          credential="https://badges.parchment.com/public/assertions/n8kCf_R4QteP3P7fVKT1PQ?identity__email=miniduoshan23@gmail.com"
        />
         <CertCard
          title="MongoDB Certified DBA Associate"
          issuer="MongoDB University"
          date="Aug 2025"
          credentialId="MDBqdd3n24w6b"
          credential="https://www.credly.com/badges/94271f36-959e-4a3c-bbb2-733ff169e43a/public_url"
        />
         <CertCard
          title="Introduction to Linux LFS101-System Administration"
          issuer="Linux Foundation"
          date="Sep 2025"
          credentialId="LF714rvyh90c"
          credential="https://www.credly.com/badges/806f3796-c478-4e7c-b547-6c08ce830d67/public_url"
        />
        <CertCard
          title="Aviatrix Certified Engineer"
          issuer="Aviatrix"
          date="Oct 2025"
          credentialId="2025-27208"
          credential="https://www.credly.com/badges/a91fb0f6-34d8-4cc5-ae85-d69a2daa6fea/public_url"
        />
        <CertCard
          title="Red Hat Training: Getting Started with Linux Fundamentals"
          issuer="Red Hat"
          date="2026"
        />
      </div>
    </section>
  );
};

export default Certification;
