"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      key={project._id}
      className="bg-black border border-red-800 rounded-2xl overflow-hidden shadow-md"
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1, boxShadow: "0 0 20px #991b1b" }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <img
        src={project?.image?.url}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-red-800 mb-2">
          {project.title}
        </h2>
        <p className="text-sm text-gray-300 mb-4">{project.desc}</p>
        <a
          href={project.projectLink}
          target="_blank"
          className="inline-block px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition"
        >
          Visit Project
        </a>
      </div>
    </motion.div>
  );
}
