import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  hiddenRight: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Experience = () => {
  const [selectedDoc, setSelectedDoc] = React.useState(null);

  return (
    <section
      id="experience"
      className="relative py-24 px-6 sm:px-10 md:px-[8vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#f43f5e] to-[#0d9488] mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
          My professional background, internships, and work experience in web development and software engineering.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#f43f5e] via-[#0d9488] to-transparent" />

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={cardVariants}
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className={`relative mb-20 flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
          >
            {/* Timeline Dot */}
            <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-20">
              <div className="w-14 h-14 rounded-full bg-gray-900 border-4 border-[#0d9488] flex items-center justify-center shadow-[0_0_20px_rgba(13,148,136,0.4)]">
                {exp.img ? (
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#0d9488]/30 flex items-center justify-center text-[#0d9488] font-bold text-lg">
                    {exp.company ? exp.company.charAt(0) : "E"}
                  </div>
                )}
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[420px] bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_rgba(13,148,136,0.2)] hover:shadow-[0_0_45px_rgba(13,148,136,0.4)] transform transition-all duration-300 hover:-translate-y-2 ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                {exp.img ? (
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f43f5e] to-[#0d9488] rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    {exp.company ? exp.company.charAt(0) : "W"}
                  </div>
                )}

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[#0d9488] font-medium">
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {exp.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {exp.desc}
              </p>

              {/* Highlights Bullet List */}
              {exp.highlights && (
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-xs text-gray-400">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Location & Type */}
              {exp.location && (
                <div className="mt-4 text-xs text-gray-400 flex items-center justify-between border-t border-white/5 pt-3">
                  <span>📍 {exp.location}</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-medium">
                    {exp.type}
                  </span>
                </div>
              )}

              {/* Skills/Technologies Badges */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/30 text-[#0d9488]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate / Letter Modal Viewer */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative bg-gray-900 border border-white/20 rounded-2xl p-4 max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-white mb-4">{selectedDoc.title}</h3>
            <img
              src={selectedDoc.url}
              alt={selectedDoc.title}
              className="max-h-[75vh] w-auto object-contain rounded-lg border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
