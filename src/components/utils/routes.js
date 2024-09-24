// package imports
import { motion } from "framer-motion";

// file imports
// styles
import "./style.scss";

const fadeDuration = 0.7;

export const Route1 = ({ title, content }) => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: fadeDuration } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: fadeDuration,
        delay: title && fadeDuration,
      },
    },
  };

  return (
    <div className="route route1">
      <motion.h2
        className="route-title route-title1"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      <motion.div
        className="route-content route-content1"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        {content}
      </motion.div>
    </div>
  );
};
