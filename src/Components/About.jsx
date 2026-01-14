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
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
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
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-900">About Me</h2>
      <p className="mt-4 text-gray-600">
        A quick snapshot of my background, work, and interests.
      </p>
    </div>
  );
}

function AboutCard({ title, icon, content }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}
