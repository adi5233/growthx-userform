import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import roleOptions from "../../assets/roleOptions";

// const goals = [
//   {
//     value: "structuredApproachToGrowth",
//     label: "Structured approach to growth",
//   },
//   { value: "buildAGrowthTeam", label: "Build a growth team" },
//   {
//     value: "connectWithLikeMindedPeople",
//     label: "Connect with like-minded people",
//   },
// ];

const Step6 = ({ handleStepChange, formData, classes, setFormData }) => {
  const [checked, setChecked] = React.useState([]);

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
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => handleStepChange()}>
          Ok
        </button>
        {/* <span className={classes.span}>Press Enter</span> */}
      </div>
    </div>
  );
};

export default Step6;
