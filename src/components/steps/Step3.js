import React from "react";

const Step3 = ({ handleStepChange, formData, handleChange, classes }) => {
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
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => handleStepChange()}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Step3;
