import React, { useState } from "react";
import WarningIcon from "@material-ui/icons/Warning";
import { motion } from "framer-motion";

const FirstName = ({ nextStep, formData, handleChange, classes, step }) => {
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const { firstName } = formData;
    if (firstName === "") {
      setError("Please fill this in");
      return;
    } else {
      setError(null);
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className={classes.container}
    >
      <p className={classes.heading}>{step}. What's your first name?</p>
      <div>
        <input
          type="text"
          name="firstName"
          value={formData.name}
          onChange={handleChange}
          className={classes.input}
          placeholder="Type your answer here..."
        />
      </div>
      {error && (
        <div className={classes.errorMessage}>
          <WarningIcon size="small" className={classes.errorIcon} />
          <span>{error}</span>
        </div>
      )}
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => handleSubmit()}>
          Ok
        </button>
      </div>
    </motion.div>
  );
};

export default FirstName;
