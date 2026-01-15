import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-[#0b0f1a]"
    >
      {/* Aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[-30%] left-[-30%] w-[900px] h-[900px]
                        bg-indigo-500/15 rounded-full blur-[240px]"
        />
        <div
          className="absolute bottom-[-40%] right-[-30%] w-[900px] h-[900px]
                        bg-cyan-500/10 rounded-full blur-[260px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white">
            Selected Projects
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            A curated selection of real products I’ve designed, built, and
            shipped.
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <div className="mt-20">
          <FeaturedProject
            project={featured}
            onOpen={() => setActiveProject(featured)}
          />
        </div>

        <div className="mt-16 mb-10 h-px bg-white/10 max-w-3xl mx-auto" />

        {/* SUPPORTING PROJECTS */}
        <div
          className={`mt-12 grid gap-8
    md:grid-cols-2
    ${rest.length === 2 ? "lg:grid-cols-2 lg:justify-center" : "lg:grid-cols-3"}
  `}
        >
          {rest.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

/* ---------------- FEATURED ---------------- */

function FeaturedProject({ project, onOpen }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden
                 bg-white/10 backdrop-blur-xl
                 border border-white/20
                 shadow-[0_0_100px_rgba(99,102,241,0.3)]
                 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover
                       transition-transform duration-700
                       hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r
                          from-black/50 to-transparent"
          />
        </div>

        {/* Content */}
        <div className="p-10">
          <span className="text-indigo-400 text-sm font-medium">
            Featured Project
          </span>

          <h3 className="mt-3 text-3xl font-semibold text-white">
            {project.name}
          </h3>

          <p className="mt-5 text-gray-300 text-lg leading-relaxed">
            {project.brief}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full
                           bg-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={onOpen}
            className="mt-8 inline-flex items-center
                       text-indigo-400 hover:text-indigo-300
                       text-sm transition"
          >
            View full case study →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SUPPORTING ---------------- */

function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden 
                 bg-white/5 backdrop-blur-xl
                 border border-white/10
                 hover:border-white/20
                 transition-transform duration-300 hover:-translate-y-1"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-44 object-cover
                   transition-transform duration-500
                   group-hover:scale-105"
      />

      <div className="p-5">
        <h3 className="text-lg font-medium text-white">{project.name}</h3>

        <p className="mt-2 text-sm text-gray-400 line-clamp-2">
          {project.brief}
        </p>

        <button
          onClick={onOpen}
          className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition"
        >
          View case study →
        </button>
      </div>
    </div>
  );
}

/* ---------------- MODAL ---------------- */

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-lg"
        onClick={onClose}
      />

      <div
        className="relative z-10 max-w-4xl w-full
                   bg-[#0e1424] border border-white/10
                   rounded-3xl shadow-2xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400
                     hover:text-white transition text-2xl"
        >
          ×
        </button>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          <img
            src={project.image}
            alt={project.name}
            className="rounded-xl object-cover w-full"
          />

          <div>
            <h3 className="text-2xl font-semibold text-white">
              {project.name}
            </h3>

            <p className="mt-4 text-gray-400">{project.brief}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full
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
