import { profile } from "../data/profile";

export default function Achievement() {
  return (
    <section
      id="achievements"
      className="relative py-36 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Stronger Aurora Backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-[-30%] w-[900px] h-[900px]
                     bg-indigo-500/20 rounded-full blur-[260px]"
        />
        <div
          className="absolute bottom-[-45%] right-[-30%] w-[900px] h-[900px]
                     bg-cyan-500/15 rounded-full blur-[280px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full
                           bg-white/10 text-indigo-300 text-sm tracking-wide"
          >
            Highlight
          </span>

          <h2 className="text-4xl font-semibold text-white">
            A Defining Achievement
          </h2>

          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            A milestone that reflects long-term dedication, discipline, and
            consistent growth as an engineer.
          </p>
        </div>

        {/* Spotlight */}
        <div className="relative mt-20 flex justify-center">
          {/* Frame */}
          <div
            className="relative rounded-3xl p-3
                       bg-gradient-to-br from-indigo-500/30 to-cyan-500/20
                       shadow-[0_0_120px_rgba(99,102,241,0.35)]"
          >
            <a
              href={profile.achievementPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden
                         bg-[#0e1424] border border-white/20"
            >
              <img
                src={profile.achievementImage}
                alt="Achievement Certificate"
                className="w-full max-w-lg object-cover
                           transition-transform duration-700
                           group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/50 opacity-0
                           group-hover:opacity-100 transition-opacity
                           flex items-center justify-center"
              >
                <span
                  className="px-5 py-2 rounded-lg
                             bg-white/10 backdrop-blur
                             text-white text-sm font-medium"
                >
                  View Certificate →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
