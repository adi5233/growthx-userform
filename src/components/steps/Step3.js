import React, { useState } from "react";
import WarningIcon from "@material-ui/icons/Warning";

const Step3 = ({ handleStepChange, formData, handleChange, classes }) => {
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const { lastName } = formData;
    if (lastName === "") {
      setError("Please fill this in");
      return;
    } else {
      setError(null);
      handleStepChange();
    }
  };

  return (
    <div className={classes.container}>
      <p className={classes.heading}>2. What's your last name?</p>
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
    </div>
  );
};

export default Step3;
