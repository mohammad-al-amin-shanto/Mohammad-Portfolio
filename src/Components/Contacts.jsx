import { profile } from "../data/profile";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const CONTACTS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <FaEnvelope size={18} />,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: <FaPhone size={18} />,
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: `https://wa.me/${profile.whatsapp}`,
    icon: <FaWhatsapp size={18} />,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
            Let’s Work Together
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            I’m open to remote opportunities, freelance work, and meaningful
            collaborations. Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {CONTACTS.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group rounded-2xl p-6
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         hover:border-white/20
                         transition"
            >
              <div className="flex items-center gap-3 text-indigo-300 mb-3">
                {contact.icon}
                <span className="text-sm font-medium text-white">
                  {contact.label}
                </span>
              </div>

              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
