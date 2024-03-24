import React from "react";

const Step7 = ({ handleStepChange, formData, handleChange, classes }) => {
  return (
    <div className={classes.container}>
      <p className={classes.heading}>6. Email you'd like to register with?</p>
      <p className={classes.paragraph}>
        We will keep all our communications with you through this email. Do
        check your spam inbox if you can't find our application received email.
      </p>
      <p className={classes.paragraph}>
        [ 🔴DEVELOPER NOTICE: Responses submitted to this form will be forwarded
        to the email you input here, for you to test data submissions. ]
      </p>
      <div>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={classes.input}
          placeholder="Type your answer here..."
        />
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => handleStepChange()}>
          Ok
        </button>
        <span className={classes.span}>Press Enter</span>
      </div>
    </div>
  );
};

export default Step7;
