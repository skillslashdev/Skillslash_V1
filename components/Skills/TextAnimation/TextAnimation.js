import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const TextAnimation = ({ text, text1 }) => {
  const [ref, inView] = useInView();
  const first = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * 1 },
    }),
  };
  const child = {
    visible: {
      opacity: [0.5, 1],
      x: 0,
      y: 0,
      transition: { type: "spring", damping: 8, stiffness: 50 },
    },
    hidden: {
      opacity: 0,
      x: 50,
      y: 60,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };
  return (
    <motion.h1
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="text-6xl font-bold w-[80%] flex flex-wrap"
    >
      {first.map((data, i) => {
        return (
          <motion.span variants={child} key={i} style={{ marginRight: "15px" }}>
            {data}
          </motion.span>
        );
      })}{" "}
    </motion.h1>
  );
};

export default TextAnimation;
