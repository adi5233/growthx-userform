import React from "react";

const Step1 = ({ handleStepChange, classes }) => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>Up-skilling requires time commitment</p>
      <p className={classes.paragraph}>
        The GrowthX experience is designed by keeping in mind the working hours
        founders & full time operators typically work in.
      </p>
      <p className={classes.paragraph}>You will spend</p>
      <p className={classes.paragraph}>- 6 hours/week for the first 5 weeks</p>
      <p className={classes.paragraph}>- 15 hours/week for the last 3 weeks</p>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => handleStepChange()}>
          I agree
        </button>
      </div>
    </div>
  );
};

export default Step1;
