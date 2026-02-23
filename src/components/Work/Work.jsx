import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const pageVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: 50 },
};

const Work = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="work"
      className="relative py-20 px-4 sm:px-10 md:px-[8vw] lg:px-[18vw]"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-4">
        Projects
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#f43f5e] to-[#0d9488] mx-auto mb-14 rounded-full" />

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => setActiveProject(project)}
            className="
              cursor-pointer bg-gray-900/80
              border border-white/10 rounded-2xl
              shadow-lg hover:shadow-[0_0_30px_rgba(244,63,94,0.35)]
              hover:border-[#f43f5e]/30
              transition-all duration-300 overflow-hidden
            "
          >
            <div className="aspect-[16/9] bg-black/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SIMPLE PAGE VIEW */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            variants={pageVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="
              fixed inset-0 z-50 bg-[#030712]
              overflow-y-auto
            "
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#030712] border-b border-white/10 p-4 flex justify-between items-center">
              <h3 className="text-white text-xl font-semibold">
                {activeProject.title}
              </h3>
              <button
                onClick={() => setActiveProject(null)}
                className="text-3xl text-white hover:text-[#f43f5e] transition-colors"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto p-6">
              <div className="aspect-[16/9] bg-black/30 rounded-xl mb-6">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-gray-300 mb-6">
                {activeProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-[#f43f5e]/20 text-[#f43f5e]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-[#f43f5e]/80 text-white py-2 rounded-md transition-colors duration-300"
                >
                  View Code
                </a>
                <a
                  href={activeProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-[#f43f5e] to-[#0d9488] hover:opacity-90 text-white py-2 rounded-md transition-opacity duration-300"
                >
                  View Live
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
