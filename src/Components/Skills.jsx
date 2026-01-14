import { useRef, useEffect, useState, useMemo } from "react";
import { skills } from "../data/skills";
import { FiMonitor } from "react-icons/fi";
import { FaDatabase, FaTools } from "react-icons/fa";

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({});

  const skillGroups = useMemo(
    () => [
      {
        title: "Frontend",
        icon: <FiMonitor size={20} />,
        skills: skills.frontend,
      },
      {
        title: "Backend",
        icon: <FaDatabase size={20} />,
        skills: skills.backend,
      },
      {
        title: "Tools",
        icon: <FaTools size={20} />,
        skills: skills.tools,
      },
    ],
    []
  );

  /* ---------------- Intersection Observer ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- Count-up Animation ---------------- */
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCounters((prev) => {
        const updated = { ...prev };

        skillGroups.forEach((group) =>
          group.skills.forEach(({ name, level }) => {
            const current = updated[name] || 0;
            updated[name] = current < level ? current + 0.5 : level;
          })
        );

        return updated;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [visible, skillGroups]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Aurora Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[-30%] left-[-25%] w-[700px] h-[700px]
                        bg-indigo-500/10 rounded-full blur-[180px]"
        />
        <div
          className="absolute bottom-[-40%] right-[-25%] w-[700px] h-[700px]
                        bg-cyan-500/10 rounded-full blur-[200px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-gray-400">
            Technologies I use to design, build, and ship production systems.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl p-6
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         hover:border-white/20
                         transition"
            >
              <div className="flex items-center gap-3 mb-6 text-indigo-300">
                {group.icon}
                <h3 className="text-lg font-medium text-white">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">
                        {visible ? counters[skill.name] || 0 : 0}%
                      </span>
                    </div>

                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-indigo-400 transition-all duration-[600ms] ease-out"
                        style={{
                          width: visible
                            ? `${counters[skill.name] || 0}%`
                            : "0%",
                        }}
                      />
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
}
