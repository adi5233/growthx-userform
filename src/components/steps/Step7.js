import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: "1.6rem",
    margin: "1rem 0",
    color: "#fff",
  },
  input: {
    padding: theme.spacing(2),
    backgroundColor: "transparent",
    fontSize: "1.3rem",
    outline: "none",
    borderBottom: "2px solid #fff",
    width: "100%",
    color: "#fff",
    border: "none",
    "&:focus": {
      borderColor: "#fff",
    },
  },
  paragraph: {
    fontSize: "1.3rem",
    margin: "2rem 0",
    color: "#ffffffb3",
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
  },
  button: {
    backgroundColor: "#2196f3",
    color: "#fff",
    fontSize: "1.3rem",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    outline: "none",
    cursor: "pointer",
  },
  span: {
    fontSize: "1rem",
    color: "#fff",
    marginLeft: theme.spacing(2),
  },
}));

const Step7 = ({ handleStepChange, formData, handleChange }) => {
  const classes = useStyles();

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
        <span className={classes.span}>Press Enter</span>
      </div>
    </div>
  );
};

export default Step7;
