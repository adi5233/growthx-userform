import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: "1.6rem",
    margin: "1rem 0",
    color: "#fff",
  },
  input: {
    padding: theme.spacing(2),
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
  paragraph: {
    fontSize: "1.3rem",
    margin: "2rem 0",
    color: "#ffffffb3",
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
  },
  button: {
    backgroundColor: "#2196f3",
    color: "#fff",
    fontSize: "1.3rem",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    outline: "none",
    cursor: "pointer",
  },
  span: {
    fontSize: "1rem",
    color: "#fff",
    marginLeft: theme.spacing(2),
  },
  select: {
    padding: theme.spacing(2.5),
    backgroundColor: "transparent",
    fontSize: "1.5rem",
    outline: "none",
    border: "none",
    borderBottom: "2px solid #ccc",
    width: "100%",
    color: "#fff",
    "&:focus": {
      borderColor: "#fff",
    },
  },
}));

const Step6 = ({ handleStepChange, formData, handleChange, classes }) => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className={classes.container}>
      <p className={classes.heading}>
        5. what's your professional goal for the next 12 months?
      </p>
      <div>
        <List className={classes.root}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                {/* <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                          <CommentIcon />
                        </IconButton>
                      </ListItemSecondaryAction> */}
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
