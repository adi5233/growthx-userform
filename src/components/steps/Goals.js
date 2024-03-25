import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import roleOptions from "../../assets/roleOptions";
import WarningIcon from "@material-ui/icons/Warning";

const Goals = ({ nextStep, formData, classes, setFormData }) => {
  const [checked, setChecked] = useState([]);
  const [error, setError] = useState(null);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    if (newChecked.length > 2) return;
    setChecked(newChecked);
    setFormData({
      ...formData,
      goals: newChecked.map((goal) => {
        return goals.find((g) => g.code === goal).name;
      }),
    });
  };

  const handleSubmit = () => {
    const { goals } = formData;
    if (goals.length === 0) {
      setError("Oops! Please make a selection");
      return;
    } else {
      setError(null);
      nextStep();
    }
  };

  const goals = roleOptions.find(
    (role) => (role.name = formData.industry)
  ).goals;

  return (
    <div className={classes.container}>
      <p className={classes.heading}>
        5. what's your professional goal for the next 12 months?
      </p>
      <div>
        <List className={classes.root} style={{ backgroundColor: "white" }}>
          {goals.map((goal) => {
            const labelId = `checkbox-list-label-${goal.code}`;
            return (
              <ListItem
                key={goal.code}
                role={undefined}
                dense
                button
                onClick={handleToggle(goal.code)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(goal.code) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${goal.name}`} />
              </ListItem>
            );
          })}
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

export default Goals;
