import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import dp from "./assets/dp.jpg";
import cvFile from "./assets/Minidu_Oshan_FullStack_Developer_CV_2025.pdf";

const EMAIL = "miniduoshan23@gmail.com";
const PHONE_RAW = "0765736796";
const PHONE_INTL = "+94765736796";
const LOCATION_LABEL = "Sri Lanka";
const LINKEDIN_URL = "https://www.linkedin.com/in/miniduoshan";
const GITHUB_URL = "https://github.com/MiniduOshan";

// ✅ Compact reusable glass contact item
const GlassItem = ({ icon, label, value, href, hideValue }) => {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href || undefined}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-white/20 bg-white/10 
                 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30"
    >
      <div className="h-7 w-7 flex items-center justify-center rounded-md bg-white/10 border border-white/20 text-white/90">
        {icon}
      </div>
      <div className="leading-tight">
        {label && (
          <p className="text-[10px] uppercase tracking-wider text-gray-300">
            {label}
          </p>
        )}
        {!hideValue && (
          <p className="text-[13px] text-white font-medium">{value}</p>
        )}
      </div>
    </Wrapper>
  );
};

function Profile() {
  return (
    <div
      className="profile w-full sm:w-80 md:w-72 rounded-3xl shadow-2xl overflow-hidden 
      bg-white/15 backdrop-blur-2xl border border-white/30 text-white flex flex-col items-center"
    >
      {/* Header Image */}
      <div className="relative w-full">
        <img
          src={dp}
          alt="Minidu Oshan"
          className="w-full h-44 object-cover rounded-t-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl" />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold drop-shadow-sm">Minidu Oshan</h2>
        <p className="text-gray-200 text-xs mt-2 leading-relaxed max-w-[250px]">
          Fullstack Developer & UI/UX Designer passionate about Cloud, DevOps,
          and building complete web solutions.
        </p>

        <a
          href={cvFile}
          download="Minidu_Oshan_FullStack_Developer_CV_2025.pdf"
          className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500/80 to-blue-600/70 text-white rounded-lg 
                     text-sm font-medium shadow-md hover:shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
        >
          Download CV
        </a>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-4" />

        {/* Compact Contact Info */}
        <div className="w-full space-y-2 text-left">
          <GlassItem
            icon={<FaEnvelope className="text-white text-sm" />}
            label="Email"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
            hideValue={true}
          />
          <GlassItem
            icon={<FaPhone className="text-white text-sm" />}
            label="Phone"
            value={PHONE_RAW}
            href={`tel:${PHONE_INTL}`}
            hideValue={true}
          />
          
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3 justify-center mt-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20 
                       hover:bg-white/20 hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={14} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20 
                       hover:bg-white/20 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
