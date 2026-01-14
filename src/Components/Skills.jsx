import React, { useRef, useEffect, useState, useMemo } from "react";
import { skills } from "../Datas/PortFolioData";
import { FiMonitor } from "react-icons/fi";
import { FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);

  const { frontend, backend, tools } = skills;

  const skillGroup = useMemo(
    () => [
      {
        title: "Frontend",
        skills: frontend,
        icon: <FiMonitor className="text-3xl text-indigo-500" />,
      },
      {
        title: "Backend",
        skills: backend,
        icon: <FaDatabase className="text-3xl text-green-500" />,
      },
      {
        title: "Tools",
        skills: tools,
        icon: <FaTools className="text-3xl text-purple-500" />,
      },
    ],
    [frontend, backend, tools]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const updated = {};
          skillGroup.forEach((group) =>
            group.skills.forEach((s) => {
              const current = prev[s.name] || 0;
              updated[s.name] = current < s.level ? current + 2 : s.level;
            })
          );
          return updated;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [visible, skillGroup]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100"
    >
      {/* Background accents */}
      <div className="absolute -top-28 -left-28 w-80 h-80 bg-indigo-300/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/20 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14">
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroup.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl p-6 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                {group.icon}
                <h3 className="text-xl font-bold text-gray-800">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {group.skills.map((skill, i) => (
                  <li key={i}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                      <span>{skill.name}</span>
                      <span>{visible ? counters[skill.name] || 0 : 0}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-700 ease-out"
                        style={{
                          width: visible
                            ? `${counters[skill.name] || 0}%`
                            : "0%",
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
