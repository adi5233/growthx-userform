import React, { useState } from "react";
import WarningIcon from "@material-ui/icons/Warning";

const FirstName = ({ nextStep, formData, handleChange, classes }) => {
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
    <div className={classes.container}>
      <p className={classes.heading}>1 What's your first name?</p>
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
    </div>
  );
};

export default FirstName;
