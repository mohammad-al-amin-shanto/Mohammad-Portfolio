import { profile } from "../data/profile";
import { scrollToSection } from "../Utils/scrollToSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-8 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-[-30%] left-[-20%] w-[900px] h-[900px]
                        bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-400/20
                        blur-[180px]"
        />
        <div
          className="absolute bottom-[-40%] right-[-30%] w-[900px] h-[900px]
                        bg-gradient-to-tr from-cyan-500/25 via-blue-500/20 to-indigo-500/20
                        blur-[200px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full
                           bg-white/10 text-indigo-300 text-sm tracking-wide"
          >
            Full Stack Web Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            {profile.name}
          </h1>

          <p className="mt-5 text-lg text-gray-300 max-w-xl leading-relaxed">
            {profile.intro}
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href={profile.resumeLink}
              download="Mohammad_Al_Alamin_Resume.pdf"
              className="px-6 py-3 rounded-lg
                         bg-indigo-500 text-white font-medium
                         hover:bg-indigo-400 transition"
            >
              Download Resume
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-lg
                         border border-white/20 text-white
                         hover:border-white/40 transition"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT — Glass Avatar Card */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full
                            bg-gradient-to-tr from-indigo-500/40 to-cyan-500/40
                            blur-3xl opacity-70 group-hover:opacity-90 transition"
            />

            {/* Glass Ring */}
            <div
              className="relative p-2 rounded-full
                            bg-white/10 backdrop-blur-xl
                            border border-white/20"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-56 h-56 rounded-full object-cover
                           transition-transform duration-300
                           group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
