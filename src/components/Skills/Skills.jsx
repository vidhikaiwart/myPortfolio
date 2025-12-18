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

/* Skill pill animation */
const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      mass: 0.6,
    },
  },
};

const Skills = () => (
  <section
    id="skills"
    className="relative py-24 px-6 sm:px-10 md:px-[8vw] lg:px-[18vw]
    font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full" />
      <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
        A collection of my technical skills and expertise gained through
        real-world projects and hands-on experience.
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          scale={1.02}
          transitionSpeed={900}
          glareEnable
          glareMaxOpacity={0.12}
          className="w-full"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-xl
            rounded-2xl p-6 sm:p-8 border border-white/10
            shadow-[0_0_30px_rgba(130,69,236,0.25)]
            hover:shadow-[0_0_50px_rgba(130,69,236,0.45)]
            transition-shadow duration-500"
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 text-center mb-6">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    boxShadow:
                      "0 0 20px rgba(130,69,236,0.6)",
                  }}
                  className="flex items-center justify-center gap-2
                  px-3 py-2 rounded-full
                  border border-[#8245ec]/30
                  bg-[#8245ec]/5
                  transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-xs sm:text-sm text-gray-200">
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
