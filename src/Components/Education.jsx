import { education } from "../data/education";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-32 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Aurora Backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-[-30%] w-[900px] h-[900px]
                     bg-indigo-500/12 rounded-full blur-[240px]"
        />
        <div
          className="absolute bottom-[-40%] right-[-30%] w-[900px] h-[900px]
                     bg-cyan-500/10 rounded-full blur-[260px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white">Education</h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            A key milestone that shaped my problem-solving mindset and technical
            foundation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 flex justify-center">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 w-px bg-white/10" />

          {education.map((edu, index) => (
            <div
              key={index}
              className="relative z-10 w-full max-w-xl
                         bg-white/10 backdrop-blur-xl
                         border border-white/20
                         rounded-3xl p-10
                         shadow-[0_0_80px_rgba(99,102,241,0.18)]
                         transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Timeline Node */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <div
                  className="w-14 h-14 rounded-full
                                bg-indigo-500/25
                                border border-indigo-400/40
                                flex items-center justify-center
                                text-indigo-300 shadow-lg"
                >
                  <FaGraduationCap size={22} />
                </div>
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-2xl font-medium text-white">
                  {edu.degree}
                </h3>

                <p className="mt-3 text-gray-300">{edu.institution}</p>

                <p className="mt-1 text-sm text-gray-500">{edu.year}</p>

                <p className="mt-6 text-base text-gray-400 leading-relaxed">
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
