import React from "react";
import { about } from "../Datas/PortFolioData";

const About = () => {
  const { journey, work, hobbies } = about;

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-blue-100 via-blue-50 to-white"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-md">
            About Me
          </span>
        </h2>

        {/* Grid layout for cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Journey */}
          <div className="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-indigo-400">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
            <div className="relative flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-3xl group-hover:scale-110 transition duration-300">
                🧭
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                My Journey
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed relative z-10">
              {journey}
            </p>
          </div>

          {/* Work */}
          <div className="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-purple-400">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
            <div className="relative flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl group-hover:scale-110 transition duration-300">
                💼
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                What I Do
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed relative z-10">
              {work}
            </p>
          </div>

          {/* Hobbies */}
          <div className="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-pink-400">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
            <div className="relative flex items-center gap-4 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-3xl group-hover:scale-110 transition duration-300">
                🎨
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Beyond Work
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed relative z-10">
              {hobbies}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-24 left-10 w-48 h-48 bg-blue-400 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-24 right-10 w-48 h-48 bg-purple-400 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
    </section>
  );
};

export default About;
