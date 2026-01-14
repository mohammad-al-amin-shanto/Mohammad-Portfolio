import React from "react";
import { profile } from "../Datas/PortFolioData";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { email, phone, whatsapp } = profile;

  const contacts = [
    {
      label: "Email Me",
      href: `mailto:${email}`,
      gradient: "from-blue-500 to-indigo-600",
      icon: <FaEnvelope className="text-xl" />,
    },
    {
      label: "Call Me",
      href: `tel:${phone}`,
      gradient: "from-green-500 to-emerald-600",
      icon: <FaPhone className="text-xl" />,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${whatsapp}`,
      gradient: "from-teal-400 to-green-500",
      icon: <FaWhatsapp className="text-xl" />,
    },
  ];

  return (
    <section
      className="relative py-20 sm:py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
      id="contact"
    >
      {/* Background blobs */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-indigo-300/20 blur-[120px] animate-pulse sm:w-96 sm:h-96"></div>
      <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-green-300/20 blur-[120px] animate-pulse sm:w-96 sm:h-96"></div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-10 sm:mb-12 text-base sm:text-lg">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.label === "WhatsApp" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold shadow-lg
                         bg-gradient-to-r ${contact.gradient}
                         hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex items-center gap-3 justify-center overflow-hidden`}
            >
              {/* Glow effect */}
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300 rounded-xl"></span>

              {/* Icon */}
              <span className="relative transform group-hover:rotate-12 transition-transform duration-300">
                {contact.icon}
              </span>

              <span className="relative text-sm sm:text-base">
                {contact.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
