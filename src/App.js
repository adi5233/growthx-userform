import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";
import UserForm from "./components/UserForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#000000",
  },
  headerContainer: {
    // height: "20vh",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
  formWrapper: {
    margin: "40px 20px", // Adjust spacing as needed
    width: "90vw",
    [theme.breakpoints.up("md")]: {
      width: "50vw",
      margin: "20px 10px", // Adjust spacing as needed
    },
  },
}));

const App = () => {
  const [step, setStep] = useState(0);
  const classes = useStyles();

  const handleStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <ProgressBar step={step} />
        <Header />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.formWrapper}>
          <UserForm handleStepChange={handleStepChange} step={step} />
        </div>
      </div>
    </div>
  );
};

export default App;
