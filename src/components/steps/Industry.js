import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import WarningIcon from "@material-ui/icons/Warning";
import industryList from "../../assets/industryList";
import { motion } from "framer-motion";

const Industry = ({ nextStep, formData, classes, setFormData, step }) => {
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const handleAutoCompleteChange = (newValue) => {
    setValue(newValue);
    setFormData({ ...formData, industry: newValue });
  };

  const handleSubmit = () => {
    const { industry } = formData;
    if (industry === "") {
      setError("Oops! Please make a selection");
      return;
    } else {
      setError(null);
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className={classes.container}
    >
      <p className={classes.heading}>
        {step}. What industry is your company in?
      </p>
      <p className={classes.paragraph}>
        We will personalize your learning experience accordingly
      </p>
      <div>
        <Autocomplete
          id="combo-box-demo"
          options={industryList}
          getOptionLabel={(option) => option}
          value={value}
          onChange={(event, newValue) => {
            handleAutoCompleteChange(newValue);
          }}
          style={{ color: "white" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Type or select an option"
              margin="normal"
              style={{ color: "white", backgroundColor: "white" }}
            />
          )}
        />
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
    </motion.div>
  );
};

export default Industry;
