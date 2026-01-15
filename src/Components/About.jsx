import { about } from "../data/about";

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#0b0f1a]">
      {/* Aurora Backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/4 left-[-30%] w-[900px] h-[900px]
                     bg-indigo-500/15 rounded-full blur-[220px]"
        />
        <div
          className="absolute bottom-[-40%] right-[-30%] w-[900px] h-[900px]
                     bg-cyan-500/10 rounded-full blur-[240px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader />

        {/* ROW 1 — FEATURED */}
        <div className="mt-20">
          <FeaturedCard />
        </div>

        {/* ROW 2 — SUPPORTING */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <SupportingCard title="What I Do" icon="💼" content={about.work} />
          <SupportingCard
            title="Beyond Work"
            icon="🎨"
            content={about.hobbies}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function SectionHeader() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-semibold text-white">About Me</h2>
      <p className="mt-5 text-lg text-gray-400 leading-relaxed">
        A short story about my journey, my work philosophy, and who I am beyond
        code.
      </p>
    </div>
  );
}

function FeaturedCard() {
  return (
    <div
      className="relative rounded-3xl p-10
                 bg-white/10 backdrop-blur-xl
                 border border-white/20
                 shadow-[0_0_80px_rgba(99,102,241,0.18)]
                 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Inner Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl
                   bg-gradient-to-br from-indigo-500/25 to-cyan-500/10
                   blur-3xl opacity-70"
      />

      <div className="relative max-w-3xl">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">🧭</span>
          <h3 className="text-2xl font-medium text-white">My Journey</h3>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">{about.journey}</p>
      </div>
    </div>
  );
}

function SupportingCard({ title, icon, content }) {
  return (
    <div
      className="relative rounded-2xl p-8
                 bg-white/5 backdrop-blur-xl
                 border border-white/10
                 hover:border-white/20
                 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl text-indigo-300">{icon}</span>
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>

      <p className="text-gray-400 text-base leading-relaxed">{content}</p>
    </div>
  );
}
