import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiAward, FiFileText } from "react-icons/fi";

import certImg from "../../assets/certificates_and_experience/laymotion_certificate.png";
import expImg from "../../assets/certificates_and_experience/laymotion_experience_letter.png";

export const certificationsData = [
  {
    id: 1,
    title: "Certificate of Internship",
    category: "Certification",
    organization: "Laymotion",
    image: certImg,
  },
  {
    id: 2,
    title: "Experience & Relieving Letter",
    category: "Experience Letter",
    organization: "Laymotion",
    image: expImg,
  },
];

const Certifications = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData = certificationsData.filter((item) => {
    if (activeFilter === "All") return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="certifications"
      className="relative py-24 px-6 sm:px-10 md:px-[8vw] lg:px-[16vw] font-sans"
    >
      {/* Ambient Light Blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0d9488]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#f43f5e]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#0d9488] mb-4">
          <FiAward size={14} /> Credentials & Verification
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
          CERTIFICATIONS & EXPERIENCE LETTERS
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-[#f43f5e] via-[#0d9488] to-[#f43f5e] mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-base sm:text-lg">
          Official certificates and experience credentials.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mt-8">
          {["All", "Certification", "Experience Letter"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#f43f5e] to-[#0d9488] border-transparent text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                  : "bg-gray-900/60 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredData.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(13,148,136,0.15)] hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Document Image Preview Container */}
              <div className="relative aspect-[16/10] bg-black/50 overflow-hidden cursor-pointer" onClick={() => setSelectedDoc(doc)}>
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Quick View Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs font-semibold flex items-center gap-2 shadow-lg">
                    <FiEye size={16} /> Click to View Full Screen
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar with View Document Button Only */}
            <div className="p-6">
              <button
                onClick={() => setSelectedDoc(doc)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#f43f5e] to-[#0d9488] text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.3)] cursor-pointer"
              >
                <FiEye size={18} /> View Document
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-gray-900 border border-white/20 rounded-2xl p-6 max-w-4xl w-full max-h-[92vh] flex flex-col items-center shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0d9488]/20 text-[#0d9488]">
                    <FiFileText size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {selectedDoc.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors text-xl font-bold leading-none"
                >
                  ✕
                </button>
              </div>

              {/* Modal Image View */}
              <div className="w-full flex-1 overflow-auto flex items-center justify-center rounded-xl bg-black/40 border border-white/5 p-2">
                <img
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
