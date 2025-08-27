"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Toast = ({ type = "success", message, onClose }) => {
  // Auto close after 3s
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-5 right-5 flex items-center gap-3 px-4 py-3 rounded-xl border border-red-800 bg-black shadow-lg z-50`}
    >
      {type === "success" ? (
        <FaCheckCircle className="text-green-500 text-xl" />
      ) : (
        <FaTimesCircle className="text-red-500 text-xl" />
      )}
      <p className="text-white text-sm">{message}</p>
    </motion.div>
  );
};

export default Toast;
