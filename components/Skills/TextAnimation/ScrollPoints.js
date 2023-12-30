import { motion, useAnimation, useScroll } from "framer-motion";

import { useInView } from "react-intersection-observer";

const ScrollPoints = ({ current }) => {
  const points = [
    "Live interactive classes",
    "Real Work Experience2",
    "Best Advance courses",
    "AI based syllabus",
  ];

  console.log(current);
  return (
    <div>
      {points.map((point, index) => (
        <motion.div
          key={index}
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: current }}
          //   transition={{ duration: 0.5, delay: index * 0.5 }}
        >
          <p>{point}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollPoints;
