import React from "react";
import { education } from "../Datas/PortFolioData";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Decorative blur circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="flex justify-center">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-md"
            >
              {/* Icon */}
              <div className="absolute -top-5 -left-5 bg-indigo-500 text-white p-3 rounded-full shadow-lg">
                <FaGraduationCap className="text-xl" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-700 font-medium">{edu.institution}</p>
              <p className="text-gray-500 mb-4">{edu.year}</p>
              <p className="text-gray-600 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
