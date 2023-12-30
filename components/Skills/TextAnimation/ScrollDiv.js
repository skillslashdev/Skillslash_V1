import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const points = [
  "Live interactive classes",
  "Real Work Experience2",
  "Best Advance courses",
  "AI based syllabus",
];

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section className="flex items-center justify-center h-screen">
      <div>
        {points.map((point, index) => (
          <motion.div
            ref={ref}
            key={index}
            className="flex opacity-0 h-[20px]"
            style={{ opacity: scrollYProgress }}
            //   initial={{ opacity: 0 }}
            //   animate={{ opacity: current }}
            //   transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <p>{point}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const ScrollDiv = () => {
  return (
    <>
      <Item />
    </>
  );
};
export default ScrollDiv;
