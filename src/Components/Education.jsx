import { education } from "../data/education";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Subtle Aurora Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-[-25%] w-[700px] h-[700px]
                        bg-indigo-500/10 rounded-full blur-[180px]"
        />
        <div
          className="absolute bottom-[-40%] right-[-25%] w-[700px] h-[700px]
                        bg-cyan-500/10 rounded-full blur-[200px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white">Education</h2>
          <p className="mt-4 text-gray-400">
            Academic foundation that supports my engineering work.
          </p>
        </div>

        {/* Centered Card */}
        <div className="mt-16 flex justify-center">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative w-full max-w-md
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         rounded-3xl p-8
                         hover:border-white/20
                         transition"
            >
              {/* Icon Badge */}
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2
                              w-12 h-12 rounded-full
                              bg-indigo-500/20
                              border border-indigo-400/30
                              flex items-center justify-center
                              text-indigo-300"
              >
                <FaGraduationCap size={20} />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-medium text-white">{edu.degree}</h3>

                <p className="mt-2 text-gray-300">{edu.institution}</p>

                <p className="mt-1 text-sm text-gray-500">{edu.year}</p>

                <p className="mt-6 text-sm text-gray-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
