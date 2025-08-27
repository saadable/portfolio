"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiStrapi,
  SiFramer,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Strapi", icon: <SiStrapi className="text-indigo-500" /> },

  // Database
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "SQL / Databases", icon: <FaDatabase className="text-gray-400" /> },

  // Tools
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 200, damping: 15 }
  },
};

const SkillsPage = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-white mt-10 font-jakarta">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-900 border border-red-800 rounded-2xl shadow-md"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
