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
    alignItems: "center",
    width: "60vw",
    margin: "auto",
  },
  formWrapper: {
    // margin: "3rem 2rem",
    width: "90vw",
  },
  "@media (max-width: 768px)": {
    formContainer: {
      width: "90vw",
    },
  },
}));

const App = () => {
  const [step, setStep] = useState(0);
  const classes = useStyles();

  const nextStep = () => {
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
          <UserForm nextStep={nextStep} step={step} />
        </div>
      </div>
    </div>
  );
};

export default App;
