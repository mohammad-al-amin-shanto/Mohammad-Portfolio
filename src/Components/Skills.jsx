import { useRef, useEffect, useState, useMemo } from "react";
import { skills } from "../data/skills";
import { FiMonitor } from "react-icons/fi";
import { FaDatabase, FaTools } from "react-icons/fa";

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({});

  const groups = useMemo(
    () => ({
      frontend: {
        title: "Core Frontend Stack",
        icon: <FiMonitor size={22} />,
        skills: skills.frontend,
      },
      backend: {
        title: "Backend & APIs",
        icon: <FaDatabase size={20} />,
        skills: skills.backend,
      },
      tools: {
        title: "Tools & Workflow",
        icon: <FaTools size={20} />,
        skills: skills.tools,
      },
    }),
    []
  );

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Count Animation */
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCounters((prev) => {
        const next = { ...prev };
        Object.values(groups).forEach((group) =>
          group.skills.forEach(({ name, level }) => {
            next[name] = Math.min((next[name] || 0) + 0.5, level);
          })
        );
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [visible, groups]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[-30%] left-[-25%] w-[900px] h-[900px]
                        bg-indigo-500/15 rounded-full blur-[240px]"
        />
        <div
          className="absolute bottom-[-40%] right-[-25%] w-[900px] h-[900px]
                        bg-cyan-500/10 rounded-full blur-[260px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white">
            Skills & Expertise
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            A practical overview of the tools and technologies I use in
            production.
          </p>
        </div>

        {/* FEATURED — Frontend */}
        <div className="mt-20">
          <FeaturedSkillCard
            group={groups.frontend}
            counters={counters}
            visible={visible}
          />
        </div>

        {/* SUPPORTING — Backend + Tools */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <SkillCard
            group={groups.backend}
            counters={counters}
            visible={visible}
          />
          <SkillCard
            group={groups.tools}
            counters={counters}
            visible={visible}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function FeaturedSkillCard({ group, counters, visible }) {
  return (
    <div
      className="relative rounded-3xl p-10
                 bg-white/10 backdrop-blur-xl
                 border border-white/20
                 shadow-[0_0_90px_rgba(99,102,241,0.25)]
                 transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl
                      bg-gradient-to-br from-indigo-500/25 to-cyan-500/10
                      blur-3xl opacity-70"
      />

      <div className="relative">
        <div className="flex items-center gap-4 mb-8 text-indigo-300">
          {group.icon}
          <h3 className="text-2xl font-medium text-white">{group.title}</h3>
        </div>

        <SkillList
          skills={group.skills}
          counters={counters}
          visible={visible}
          barHeight="h-3"
          glow
        />
      </div>
    </div>
  );
}

function SkillCard({ group, counters, visible }) {
  return (
    <div
      className="rounded-2xl p-8
                 bg-white/5 backdrop-blur-xl
                 border border-white/10
                 hover:border-white/20
                 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-6 text-indigo-300">
        {group.icon}
        <h3 className="text-lg font-medium text-white">{group.title}</h3>
      </div>

      <SkillList
        skills={group.skills}
        counters={counters}
        visible={visible}
        barHeight="h-2"
      />
    </div>
  );
}

function SkillList({ skills, counters, visible, barHeight, glow }) {
  return (
    <ul className="space-y-5">
      {skills.map((skill) => (
        <li key={skill.name}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">{skill.name}</span>
            <span className="text-gray-400">
              {visible ? counters[skill.name] || 0 : 0}%
            </span>
          </div>

          <div
            className={`w-full ${barHeight} bg-white/10 rounded-full overflow-hidden`}
          >
            <div
              className={`h-full rounded-full bg-indigo-400
                          transition-all duration-[700ms] ease-out
                          ${
                            glow ? "shadow-[0_0_12px_rgba(99,102,241,0.6)]" : ""
                          }`}
              style={{
                width: visible ? `${counters[skill.name] || 0}%` : "0%",
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
