import { useState } from "react";
import { profile } from "./../data/profile";
import { scrollToSection } from "./../Utils/scrollToSection";
import { NAV_ITEMS } from "../data/navigation";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavigate = (id) => {
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Brand />

        <DesktopNav onNavigate={handleNavigate} />

        <MobileToggle
          isOpen={isMobileOpen}
          onToggle={() => setIsMobileOpen((prev) => !prev)}
        />
      </div>

      <MobileNav isOpen={isMobileOpen} onNavigate={handleNavigate} />
    </header>
  );
}

export default Navbar;

/* ---------------------------------- */
/* Sub Components (Same File on Purpose) */
/* ---------------------------------- */

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-11 h-11 rounded-full ring-2 ring-indigo-500/70 object-cover"
      />
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">
          {profile.name}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {profile.designation}
        </p>
      </div>
    </div>
  );
}

function DesktopNav({ onNavigate }) {
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      {NAV_ITEMS.map(({ label, id }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className="group relative text-gray-800 dark:text-gray-200
             hover:text-indigo-400 transition-colors duration-200"
        >
          {label}

          <span
            className="absolute left-0 -bottom-1 h-[1.5px] w-0
               bg-indigo-400
               transition-all duration-300
               group-hover:w-full"
          />
        </button>
      ))}

      <a
        href={profile.resumeLink}
        download
        className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Resume
      </a>
    </nav>
  );
}

function MobileToggle({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      aria-label="Toggle navigation"
    >
      {isOpen ? "✕" : "☰"}
    </button>
  );
}

function MobileNav({ isOpen, onNavigate }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <nav className="px-4 py-4 flex flex-col gap-4 text-sm font-medium">
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className="text-left text-gray-800 dark:text-gray-200 hover:text-indigo-500 transition"
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
