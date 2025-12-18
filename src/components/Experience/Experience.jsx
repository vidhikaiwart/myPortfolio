import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -80,
    scale: 0.96,
  },
  hiddenRight: {
    opacity: 0,
    x: 80,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
      mass: 0.6,
    },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 sm:px-12 lg:px-[16vw]
      font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
          A collection of my professional experience and roles across different
          organizations.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px]
        bg-gradient-to-b from-purple-500 to-transparent" />

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={cardVariants}
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="show"
            viewport={{ once: true }}
            className={`relative mb-20 flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-20">
              <div className="w-14 h-14 rounded-full bg-gray-900 border-4 border-[#8245ec]
              flex items-center justify-center shadow-lg">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[420px] bg-gray-900/80 backdrop-blur-xl
              border border-white/10 rounded-2xl p-6 sm:p-8
              shadow-[0_0_30px_rgba(130,69,236,0.25)]
              hover:shadow-[0_0_45px_rgba(130,69,236,0.45)]
              transform transition-all duration-300 hover:-translate-y-2
              ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}
            >
              {/* Header */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white rounded-lg overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {exp.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-gray-400 text-sm leading-relaxed">
                {exp.desc}
              </p>

              {/* Skills */}
              <div className="mt-5">
                <h4 className="text-sm font-medium text-white mb-2">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                      bg-[#8245ec]/20 text-purple-300
                      border border-[#8245ec]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
