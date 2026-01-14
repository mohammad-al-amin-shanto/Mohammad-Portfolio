import React from "react";
import { profile } from "../Datas/PortFolioData";

const Achievement = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-300/20 blur-[150px] animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-300/20 blur-[150px] animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
          My Achievement
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Here’s a special achievement I’m proud of:
        </p>

        <a
          href={profile.achievementPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative rounded-xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-300"
        >
          <img
            src={profile.achievementImage}
            alt="Achievement"
            className="w-full max-w-md mx-auto rounded-xl object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <span className="text-white font-semibold text-lg">View PDF</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Achievement;
