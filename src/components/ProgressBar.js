import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  progressBar: {
    height: "5px",
    backgroundColor: "#0077FF",
    width: "100%",
    transition: "width 0.3s ease-in-out",
  },
}));

const ProgressBar = ({ step }) => {
  const classes = useStyles();

  const width = step === 0 ? "0%" : `${(step / 7) * 100}%`;

  return (
    <div>
      <div className={classes.progressBar} style={{ width }} />
    </div>
  );
};

export default ProgressBar;
