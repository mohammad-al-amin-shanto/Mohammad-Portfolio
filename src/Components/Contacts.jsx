import { profile } from "../data/profile";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-36 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[-35%] left-[-30%] w-[900px] h-[900px]
                     bg-indigo-500/15 rounded-full blur-[240px]"
        />
        <div
          className="absolute bottom-[-45%] right-[-30%] w-[900px] h-[900px]
                     bg-cyan-500/10 rounded-full blur-[260px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white">
            Let’s Build Something Meaningful
          </h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            Open to remote roles, long-term collaborations, and impactful
            projects. If my work resonates with you, let’s talk.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {/* PRIMARY */}
          <a
            href={`mailto:${profile.email}`}
            className="md:col-span-2 relative rounded-3xl p-10
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

            <div className="relative flex items-start gap-5">
              <FaEnvelope size={28} className="text-indigo-300 mt-1" />
              <div>
                <h3 className="text-2xl font-medium text-white">
                  Start a Conversation
                </h3>
                <p className="mt-3 text-gray-300 text-lg">{profile.email}</p>
                <p className="mt-4 text-gray-400 text-sm max-w-xl">
                  Reach out via email for job opportunities, project
                  discussions, or anything related to building high-quality
                  software.
                </p>
              </div>
            </div>
          </a>

          {/* SECONDARY */}
          <div className="flex flex-col gap-6">
            <a
              href={`tel:${profile.phone}`}
              className="rounded-2xl p-6
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         hover:border-white/20
                         transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <FaPhone size={20} className="text-indigo-300" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400 text-sm">{profile.phone}</p>
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         hover:border-white/20
                         transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <FaWhatsapp size={20} className="text-indigo-300" />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-gray-400 text-sm">
                    Quick chat & availability
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
