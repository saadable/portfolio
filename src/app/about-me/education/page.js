"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const educationCards = [
    {
      title: "BS Chemistry",
      description:
        "Done my Bachelors of Science from University of Agriculture Faisalabad",
      institution: "University of Agriculture, Faisalabad",
      year: "2021-2025",
      grade: "3.32 / 4.00 CGPA",
      isleft: true,
    },
    {
      title: "Intermediate",
      description: "Pre-Medical from Government College",
      institution: "Muncipal Graduate College, Faisalabad",
      year: "2019-2021",
      grade: "A Grade",
    },
    {
      title: "Matriculation",
      description: "Completed my matriculation in Science",
      institution: "The Educators Fatmeed Campus 1",
      year: "2017-2019",
      grade: "A+ Grade",
      isleft: true,
    },
    {
      title: "Certifications",
      description: "Completed MERN Stack certifications",
      institution: "Online Platforms",
      year: "2022",
      grade: "Excellent",
    },
  ];

  return (
    <div className="relative bg-black text-white py-12 mt-15">
      <h2 className="text-[45px] font-bold text-center mb-5 md:mb-12 text-white font-jakarta">
        Education
      </h2>

      <div className="flex justify-center relative max-w-5xl mx-auto px-10 pt-10 md:px-0 overflow-x-hidden overflow-y-visible">
        {/* Center Line */}
        <div className="absolute left-1/2 md:block hidden top-0 h-full w-0.5 bg-red-800 transform -translate-x-1/2"></div>

        <div className="w-full">
          {educationCards.map((item, i) => {
            // inView hook for each card
            const { ref, inView } = useInView({
              triggerOnce: false, // appear & disappear repeatedly
              threshold: 0.2, // 20% visible
            });

            return (
              <motion.div
                key={i}
                ref={ref}
                className={`flex w-full mb-16 ${
                  item.isleft ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: item.isleft ? -100 : 100 }}
                animate={
                  inView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: item.isleft ? -100 : 100 }
                }
                transition={{ duration: 0.6 }}
              >
                <div className="w-full md:w-5/12 relative bg-black border border-red-800 rounded-xl p-5 shadow-md">
                  <h3 className="text-xl font-semibold text-red-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.institution}</p>
                  {/* Year Tag */}
                  <p className="text-white text-[20px] absolute bg-red-800 -top-10 rounded-[20px] w-[150px] h-[50px] flex items-center justify-center">
                    {item.year}
                  </p>
                  <p className="text-gray-400 text-sm">{item.grade}</p>
                  <p className="mt-2 text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
