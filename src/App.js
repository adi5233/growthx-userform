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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    height: "auto",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
  },
  formContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    width: "50vw",
  },
  "@media (max-width: 768px)": {
    formWrapper: {
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
