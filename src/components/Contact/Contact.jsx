import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const container = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! 🚀", {
      theme: "dark",
      autoClose: 2500,
      position: "top-center",
    });
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 md:px-[8vw] lg:px-[18vw]
      flex items-center justify-center font-sans"
    >
      <ToastContainer />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        {/* Title */}
        <motion.div variants={item} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f43f5e] to-[#0d9488] mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-base sm:text-lg">
            Feel free to reach out. This is a demo contact form.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={item}
          className="mx-auto w-full max-w-md bg-gray-900/80 backdrop-blur-xl
          border border-white/10 rounded-2xl p-6 sm:p-8
          shadow-[0_0_35px_rgba(244,63,94,0.25)]"
        >
          <motion.h3
            variants={item}
            className="text-xl sm:text-2xl font-semibold text-white text-center mb-6"
          >
            Let's Connect
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {["Your Email", "Your Name", "Subject"].map((placeholder, i) => (
              <motion.input
                key={i}
                variants={item}
                type={placeholder === "Your Email" ? "email" : "text"}
                placeholder={placeholder}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 rounded-lg bg-[#0d0d1a]/80 text-white
                border border-gray-600 focus:border-[#f43f5e]
                focus:ring-2 focus:ring-[#f43f5e]/30 outline-none transition
                placeholder-gray-500"
              />
            ))}

            <motion.textarea
              variants={item}
              rows="4"
              placeholder="Your Message"
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full p-3 rounded-lg bg-[#0d0d1a]/80 text-white
              border border-gray-600 focus:border-[#f43f5e]
              focus:ring-2 focus:ring-[#f43f5e]/30 outline-none transition resize-none
              placeholder-gray-500"
            />

            {/* Button */}
            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-[#f43f5e] to-[#0d9488]
              hover:shadow-[0_0_25px_rgba(244,63,94,0.55)]
              transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
