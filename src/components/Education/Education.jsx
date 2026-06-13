import React from "react";
import { education } from "../../constants";
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

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-6 sm:px-10 md:px-[8vw] lg:px-[16vw]
      font-sans bg-skills-gradient clip-path-custom-3"
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
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#f43f5e] to-[#0d9488] mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
          My academic journey showcasing consistent learning, growth, and
          development over the years.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px]
        bg-gradient-to-b from-[#f43f5e] via-[#0d9488] to-transparent" />

        {/* Education Cards */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className={`relative mb-20 flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
          >
            {/* Timeline Dot */}
            <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-20">
              <div className="w-14 h-14 rounded-full bg-gray-900 border-4 border-[#f43f5e]
              flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.4)]">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[420px] bg-gray-900/80 backdrop-blur-xl
              border border-white/10 rounded-2xl p-6 sm:p-8
              shadow-[0_0_30px_rgba(244,63,94,0.2)]
              hover:shadow-[0_0_45px_rgba(244,63,94,0.4)]
              transform transition-all duration-300 hover:-translate-y-2
              ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {edu.school}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Details */}
              <p className="mt-4 text-sm text-[#0d9488] font-medium">
                Grade: {edu.grade}
              </p>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
