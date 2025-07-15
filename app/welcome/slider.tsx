import { motion } from "framer-motion";
import "./welcome.scss";

export function Slider() {
  const sliderVariants = {
    initial: {
      x: 0,
    },

    animate: {
      x: "-300%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror" as const,
        duration: 20,
      },
    },
  };

  return (
    <motion.div
      className="slidingTextContainer"
      variants={sliderVariants}
      initial="initial"
      animate="animate"
    >
      Your Trusted Body Repair Shop | Quality Service | Affordable Prices |
      Customer Satisfaction Guaranteed
    </motion.div>
  );
}
