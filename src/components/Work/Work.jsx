import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

/* Card animation */
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* Modal animation */
const modalVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9 },
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative py-24 px-6 sm:px-10 md:px-[8vw] lg:px-[18vw] font-sans"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          PROJECTS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
          A showcase of projects highlighting my experience with modern web
          technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-gray-900/80 backdrop-blur-xl
            border border-white/10 rounded-lg
            shadow-[0_0_25px_rgba(130,69,236,0.25)]
            hover:shadow-[0_0_40px_rgba(130,69,236,0.45)]
            transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md
                    bg-[#8245ec]/20 text-purple-300
                    border border-[#8245ec]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center
            bg-black/90 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              className="bg-gray-900 rounded-lg max-w-3xl w-full
              shadow-[0_0_40px_rgba(130,69,236,0.6)] overflow-hidden"
            >
              {/* Close */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white text-3xl hover:text-purple-500"
                >
                  &times;
                </button>
              </div>

              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-contain px-6"
              />

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-md
                      bg-[#8245ec]/20 text-purple-300
                      border border-[#8245ec]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center bg-gray-800 hover:bg-purple-800
                    text-white py-2 rounded-md font-semibold transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center bg-purple-600 hover:bg-purple-800
                    text-white py-2 rounded-md font-semibold transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
