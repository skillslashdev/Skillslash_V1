import React from "react";
import { motion } from "framer-motion";

const ParaAnimation = ({ text }) => {
  const para = text.split(" ");
  return (
    <motion.p
      initial={{ scale: 2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ damping: 12, stiffness: 100, delay: 0.8 }}
      className="w-[90%] flex flex-wrap text-[19px] text-[#646464]"
    >
      {text}
    </motion.p>
  );
};

export default ParaAnimation;
