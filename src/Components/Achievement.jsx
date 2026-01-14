import { profile } from "../data/profile";

export default function Achievement() {
  return (
    <section
      id="achievements"
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white">Achievement</h2>
          <p className="mt-4 text-gray-400">
            A milestone that reflects my dedication and consistency.
          </p>
        </div>

        {/* Spotlight Card */}
        <div className="mt-16 flex justify-center">
          <a
            href={profile.achievementPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative
                       rounded-2xl overflow-hidden
                       bg-white/5 backdrop-blur-xl
                       border border-white/10
                       hover:border-white/20
                       transition"
          >
            {/* Image */}
            <img
              src={profile.achievementImage}
              alt="Achievement Certificate"
              className="w-full max-w-md object-cover
                         transition-transform duration-500
                         group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0
                            bg-black/40 opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            flex items-center justify-center"
            >
              <span
                className="px-4 py-2 rounded-lg
                               bg-white/10 backdrop-blur
                               text-white text-sm font-medium"
              >
                View Certificate
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
