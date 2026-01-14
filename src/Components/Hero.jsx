import React from "react";
import { profile } from "../Datas/PortFolioData";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-100 pt-20 overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute w-96 h-96 bg-blue-300 rounded-full top-[-120px] left-[-120px] blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-300 rounded-full bottom-[-120px] right-[-120px] blur-[120px] opacity-40 animate-pulse"></div>

      {/* Floating Orbs */}
      <div className="absolute w-6 h-6 bg-blue-400 rounded-full top-1/3 left-1/4 animate-bounce"></div>
      <div className="absolute w-8 h-8 bg-purple-400 rounded-full bottom-1/3 right-1/4 animate-ping"></div>

      {/* Hero Content */}
      <div className="text-center max-w-3xl relative z-10 px-4">
        {/* Profile Image with Glow */}
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl opacity-70 animate-pulse"></div>
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative w-40 h-40 mx-auto rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold mt-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg">
          {profile.name}
        </h1>

        {/* Designation */}
        <p className="text-xl text-gray-700 dark:text-gray-300 font-medium mt-3 tracking-wide">
          {profile.designation}
        </p>

        {/* Intro */}
        <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          {profile.intro}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href={profile.resumeLink}
            download="Mohammad_Al_Alamin_Resume.pdf" // <-- automatically download
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
            📄 Download Resume
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-7 py-3 rounded-xl border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 font-semibold transform hover:-translate-y-1 transition duration-300"
          >
            📬 Contact Me
          </button>
        </div>
      </div>

      {/* Wave Transition to About */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44C213.75,78,106.88,111.92,0,120V0H1200V120c-103.52-8.35-207.05-30.67-310.57-41.89C782.86,63.89,652.27,43,521.69,44.26,455.29,45,388.34,53.76,321.39,56.44Z"
            className="fill-blue-100"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
