"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import  {axiosClient}  from "../../../../Utils/axiosClient";

// const projects = [
//   {
//     id: 1,
//     title: "E-commerce Store",
//     desc: "A modern full-stack e-commerce platform with payment gateway, product management, and admin panel.",
//     img: "https://source.unsplash.com/600x400/?ecommerce,shop",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Social Media App",
//     desc: "A feature-rich social media app with real-time chat, posts, likes, and comments built with MERN stack.",
//     img: "https://source.unsplash.com/600x400/?social,network",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Portfolio Website",
//     desc: "Personal portfolio website to showcase projects, skills, and achievements with a professional design.",
//     img: "https://source.unsplash.com/600x400/?portfolio,developer",
//     link: "#",
//   },
// ];

const Projects = () => {
  const [projects, setProjects] = useState([])
  console.log("PROJECTS LIST", projects);
  
   useEffect(() => {
        async function fetchProjects() {
            try {
                
                const response = await axiosClient.post("/projects/allprojects");
                setProjects(response?.data?.result?.projects || []);
            } catch (error) {
                console.log("ERROR IS PROJECTS", error);
                
            } finally {
                
            }
        }
        fetchProjects();
    }, []);
  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 mt-10">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-red-800">Projects</span>
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
