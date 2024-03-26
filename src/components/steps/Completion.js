import React from "react";
import { motion } from "framer-motion";

const Completion = ({ classes }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={classes.container}
    >
      <p className={classes.heading}>Thanks for completing this typeform.</p>
    </motion.div>
  );
};

export default Completion;
