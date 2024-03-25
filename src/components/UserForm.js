import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Acknowledgement from "./steps/Acknowledgement";
import FirstName from "./steps/FirstName";
import LastName from "./steps/LastName";
import Industry from "./steps/Industry";
import Role from "./steps/Role";
import Goals from "./steps/Goals";
import Email from "./steps/Email";
import PhoneNumber from "./steps/PhoneNumber";
import Completion from "./steps/Completion";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: "1.4rem",
    margin: "1rem 0",
    color: "#fff",
  },
  paragraph: {
    fontSize: "1.2rem",
    margin: "2rem 0",
    color: "#ffffffb3",
  },
  button: {
    backgroundColor: "#0077ff",
    color: "#fff",
    fontSize: "1.2rem",
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
    fontSize: "1.2rem",
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
    fontSize: "1.2rem",
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

const UserForm = ({ nextStep, step }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    industry: "",
    role: "",
    goals: [],
    email: "",
    phoneNumber: "",
  });
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    console.log(formData);
  };

  const formSteps = [
    <Acknowledgement nextStep={nextStep} classes={classes} />,
    <FirstName
      nextStep={nextStep}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      step={step}
    />,
    <LastName
      nextStep={nextStep}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      step={step}
    />,
    <Industry
      nextStep={nextStep}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      setFormData={setFormData}
      step={step}
    />,
    <Role
      nextStep={nextStep}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      setFormData={setFormData}
      step={step}
    />,
    <Goals
      nextStep={nextStep}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      setFormData={setFormData}
      step={step}
    />,
    <Email
      nextStep={nextStep}
      formData={formData}
      handleChange={handleChange}
      classes={classes}
      step={step}
    />,
    <PhoneNumber
      nextStep={nextStep}
      formData={formData}
      classes={classes}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      step={step}
    />,
    <Completion classes={classes} />,
  ];

  return <form onSubmit={handleSubmit}>{formSteps[step]}</form>;
};

export default UserForm;
