import React, { useState } from "react";
import WarningIcon from "@material-ui/icons/Warning";
import { motion } from "framer-motion";

const LastName = ({ nextStep, formData, handleChange, classes, step }) => {
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const { lastName } = formData;
    if (lastName === "") {
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
      transition={{ delay: 0.1, duration: 0.5 }}
      className={classes.container}
    >
      <p className={classes.heading}>
        {step}. and your last name, {formData.firstName}?
      </p>
      <div>
        <input
          type="text"
          name="lastName"
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

export default LastName;
