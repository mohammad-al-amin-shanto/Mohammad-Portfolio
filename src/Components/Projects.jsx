import React, { useState } from "react";
import { projects } from "../Datas/PortFolioData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 bg-transparent relative" id="projects">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-indigo-300 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-300 rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-md">
            Projects
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-lg p-4 md:p-6 lg:p-8 bg-white/80 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-4 text-center font-semibold text-lg">
                {project.name}
              </div>
              <div className="mt-3 flex justify-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          {/* Backdrop + Neon Glow */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          />
          <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(99,102,241,0.6)] pointer-events-none"></div>

          <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl overflow-y-auto max-h-[90vh] animate-slide-in z-10">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-3xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-auto object-contain rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
            <p className="text-gray-700 mb-4">{selectedProject.brief}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-4">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
              >
                Live
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>

            <p className="text-gray-500 mb-2">
              <strong>Challenges:</strong> {selectedProject.challenges}
            </p>
            <p className="text-gray-500">
              <strong>Future Plans:</strong>{" "}
              {selectedProject.improvements || selectedProject.future}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          0% {opacity: 0;}
          100% {opacity: 1;}
        }
        @keyframes slide-in {
          0% {transform: translateY(-50px); opacity: 0;}
          100% {transform: translateY(0); opacity: 1;}
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;
