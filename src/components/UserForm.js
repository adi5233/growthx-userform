import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    // color: "white",
    // backgroundColor: "#2c496e",
    // "&:hover": {
    //   backgroundColor: "#102c50",
    // },
  },
  container: {
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: "1.6rem",
    margin: "1rem 0",
    color: "#fff",
  },
  paragraph: {
    fontSize: "1.3rem",
    margin: "2rem 0",
    color: "#ffffffb3",
  },
  button: {
    backgroundColor: "#0077ff",
    color: "#fff",
    fontSize: "1.3rem",
    borderRadius: theme.spacing(1),
    outline: "none",
    cursor: "pointer",
    border: "none",
    padding: "0.7rem 1.3rem",
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
  },
  span: {
    fontSize: "1rem",
    color: "#fff",
    marginLeft: theme.spacing(2),
  },
  input: {
    padding: theme.spacing(1),
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
  select: {
    padding: theme.spacing(1),
    backgroundColor: "transparent",
    fontSize: "1.3rem",
    outline: "none",
    border: "none",
    borderBottom: "2px solid #ccc",
    width: "100%",
    color: "#fff",
    "&:focus": {
      borderColor: "#fff",
    },
  },
  errorMessage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "red",
    backgroundColor: "white",
    padding: "10px",
    marginTop: "10px",
  },
  errorIcon: {
    marginRight: "5px",
    width: "1.2rem",
  },
}));

const UserForm = ({ handleStepChange, step }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    industry: "",
    role: "",
    goals: [],
    email: "",
  });
  const classes = useStyles();

  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const formSteps = [
    <Step1 handleStepChange={handleStepChange} classes={classes} />,
    <Step2
      handleStepChange={handleStepChange}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
    />,
    <Step3
      handleStepChange={handleStepChange}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
    />,
    <Step4
      handleStepChange={handleStepChange}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      setFormData={setFormData}
    />,
    <Step5
      handleStepChange={handleStepChange}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      setFormData={setFormData}
    />,
    <Step6
      handleStepChange={handleStepChange}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      setFormData={setFormData}
    />,
    <Step7
      handleStepChange={handleStepChange}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
    />,
    <Step8
      handleStepChange={handleStepChange}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      setFormData={setFormData}
    />,
  ];

  return <form onSubmit={handleSubmit}>{formSteps[step]}</form>;
};

export default UserForm;
