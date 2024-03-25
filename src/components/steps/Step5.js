import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import roleOptions from "../../assets/roleOptions";
import WarningIcon from "@material-ui/icons/Warning";

const Step5 = ({ handleStepChange, formData, classes, setFormData }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [error, setError] = useState(null);

  const handleListItemClick = (event, code) => {
    setSelectedIndex(code);
    setFormData({
      ...formData,
      role: roleOptions.find((role) => role.code === code).name,
    });
    handleStepChange();
  };

  const handleSubmit = () => {
    const { role } = formData;
    if (role === "") {
      setError("Oops! Please make a selection");
      return;
    } else {
      setError(null);
      handleStepChange();
    }
  };

  return (
    <div className={classes.container}>
      <p className={classes.heading}>4. Your role in your company?</p>
      <p className={classes.paragraph}>
        We want to understand how you spend your time right now.
      </p>
      <p className={classes.paragraph}>
        [ 🔴DEVELOPER NOTICE: Options in the questions ahead depend on this
        question's response/s. ]
      </p>
      <div className={classes.root}>
        <List
          component="nav"
          aria-label="role"
          style={{ backgroundColor: "white" }}
        >
          {roleOptions.map((role, index) => (
            <ListItem
              key={role.code}
              button
              selected={selectedIndex === role.code}
              onClick={(event) => handleListItemClick(event, role.code)}
            >
              <ListItemText primary={index + 1 + " - " + role.name} />
            </ListItem>
          ))}
        </List>
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

export default Step5;
