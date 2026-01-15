import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f1a] border-t border-white/10">
      <div
        className="max-w-6xl mx-auto px-6 py-8
                      flex flex-col sm:flex-row
                      items-center justify-between gap-4"
      >
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300">{profile.name}</span>. All rights
          reserved.
        </p>

        {/* Right */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          {Object.entries(profile.social).map(([key, link]) => (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-300
                         transition-colors duration-200
                         hover:text-indigo-400"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}

              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 h-[1.5px] w-0
                           bg-indigo-400
                           transition-all duration-300
                           group-hover:w-full"
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
