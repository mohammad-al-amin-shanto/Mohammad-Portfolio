import { about } from "../data/about";

const ABOUT_CARDS = [
  {
    title: "My Journey",
    icon: "🧭",
    contentKey: "journey",
  },
  {
    title: "What I Do",
    icon: "💼",
    contentKey: "work",
  },
  {
    title: "Beyond Work",
    icon: "🎨",
    contentKey: "hobbies",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-[#0b0f1a]">
      {/* Subtle Aurora Backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/3 left-[-20%] w-[700px] h-[700px]
                        bg-indigo-500/10 rounded-full blur-[160px]"
        />
        <div
          className="absolute bottom-[-40%] right-[-30%] w-[700px] h-[700px]
                        bg-cyan-500/10 rounded-full blur-[180px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader />

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {ABOUT_CARDS.map((card) => (
            <AboutCard
              key={card.title}
              title={card.title}
              icon={card.icon}
              content={about[card.contentKey]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function SectionHeader() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-white">About Me</h2>
      <p className="mt-4 text-gray-400 leading-relaxed">
        A brief look into my background, professional focus, and interests.
      </p>
    </div>
  );
}

function AboutCard({ title, icon, content }) {
  return (
    <div
      className="relative rounded-2xl p-6
                 bg-white/5 backdrop-blur-xl
                 border border-white/10
                 hover:border-white/20
                 transition"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl text-indigo-300">{icon}</span>
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>

      <p className="text-gray-400 leading-relaxed text-sm">{content}</p>
    </div>
  );
}
