// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

/* Container stagger */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/* Skill animation */
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Skills = () => (
  <section
    id="skills"
    className="relative py-24 px-6 sm:px-10 md:px-[8vw] lg:px-[18vw]
    font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#f43f5e] to-[#0d9488] mx-auto mt-4 rounded-full" />
      <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
        A collection of my technical skills and expertise.
      </p>
    </motion.div>

    {/* Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          scale={1.02}
          className="w-full"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-xl
            rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 text-center mb-6">
              {category.title}
            </h3>

            {/* EQUAL SIZE GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-fr">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.06 }}
                  className="
                    flex items-center justify-center gap-2
                    w-full h-12 sm:h-14
                    px-3
                    rounded-full
                    border border-[#f43f5e]/30
                    bg-[#f43f5e]/5
                    hover:border-[#0d9488]/50
                    hover:bg-[#0d9488]/5
                    transition-all duration-200
                  "
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-xs sm:text-sm text-gray-200 whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
