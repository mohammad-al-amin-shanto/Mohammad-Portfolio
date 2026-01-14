import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
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
            Selected Projects
          </h2>
          <p className="mt-4 text-gray-400">
            Real-world applications I’ve designed, built, and shipped.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

/* ---------------- Cards ---------------- */

function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden
                 bg-white/5 backdrop-blur-xl
                 border border-white/10
                 hover:border-white/20
                 transition"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-medium text-white">{project.name}</h3>

        <p className="mt-2 text-sm text-gray-400 line-clamp-2">
          {project.brief}
        </p>

        <button
          onClick={onOpen}
          className="mt-4 inline-flex items-center text-sm
                     text-indigo-400 hover:text-indigo-300 transition"
        >
          View case study →
        </button>
      </div>
    </div>
  );
}

/* ---------------- Modal ---------------- */

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 max-w-4xl w-full
                   bg-[#0e1424] border border-white/10
                   rounded-3xl overflow-hidden
                   shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400
                     hover:text-white transition text-2xl"
        >
          ×
        </button>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          {/* Image */}
          <img
            src={project.image}
            alt={project.name}
            className="rounded-xl object-cover w-full"
          />

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {project.name}
            </h3>

            <p className="mt-4 text-gray-400">{project.brief}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs
                             rounded-full
                             bg-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2
                           rounded-lg bg-indigo-600 text-white
                           hover:bg-indigo-500 transition"
              >
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2
                           rounded-lg border border-white/20
                           text-white hover:border-white/40 transition"
              >
                GitHub
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-400 space-y-2">
              <p>
                <span className="text-gray-300 font-medium">Challenge:</span>{" "}
                {project.challenges}
              </p>
              <p>
                <span className="text-gray-300 font-medium">Next:</span>{" "}
                {project.improvements}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
