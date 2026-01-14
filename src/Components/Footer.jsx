import React from "react";
import { profile } from "../Datas/PortFolioData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {Object.entries(profile.social).map(([key, link]) => (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
