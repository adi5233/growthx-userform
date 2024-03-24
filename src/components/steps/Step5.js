import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Step5 = ({ handleStepChange, formData, handleChange, classes }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleStepChange();
    // handleChange()
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
        {/* <div> */}
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="A. Founder or CXO" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Product team" />
          </ListItem>

          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Maketing team" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Step5;
