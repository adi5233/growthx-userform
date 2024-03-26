import React from "react";
import { motion } from "framer-motion";

const Acknowledgement = ({ nextStep, classes }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={classes.container}
    >
      <p className={classes.heading}>Up-skilling requires time commitment</p>
      <p className={classes.paragraph}>
        The GrowthX experience is designed by keeping in mind the working hours
        founders & full time operators typically work in.
      </p>
      <p className={classes.paragraph}>You will spend</p>
      <p className={classes.paragraph}>- 6 hours/week for the first 5 weeks</p>
      <p className={classes.paragraph}>- 15 hours/week for the last 3 weeks</p>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => nextStep()}>
          I agree
        </button>
      </div>
    </motion.div>
  );
};

export default Acknowledgement;
