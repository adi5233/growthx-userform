import React from "react";

const Step2 = ({ handleStepChange, formData, handleChange, classes }) => {
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
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => handleStepChange()}>
          Ok
        </button>
        {/* <span className={classes.span}>Press Enter</span> */}
      </div>
    </div>
  );
};

export default Step2;
