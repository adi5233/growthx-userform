import React from "react";

const Step4 = ({ handleStepChange, formData, handleChange, classes }) => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>3. What industry is your company in?</p>
      <p className={classes.paragraph}>
        We will personalize your learning experience accordingly
      </p>
      <div>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className={classes.select}
        >
          <option value="">Type or select an option</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
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

export default Step4;
