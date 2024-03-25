import React, { useState } from "react";
import WarningIcon from "@material-ui/icons/Warning";

const Email = ({ nextStep, formData, handleChange, classes }) => {
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    const { email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setError("Please fill this in");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Hmm... that email doesn't look right");
      return;
    } else {
      setError(null);
      nextStep();
    }
  };
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

export default Email;