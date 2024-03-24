import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "3rem",
  },
  logo: {
    width: "150px",
  },
}));

const LogoContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src="logo.png" alt="logo" className={classes.logo} />
    </div>
  );
};

export default LogoContainer;
