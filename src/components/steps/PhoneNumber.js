import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import WarningIcon from "@material-ui/icons/Warning";
import { motion } from "framer-motion";

const PhoneNumber = ({ nextStep, formData, classes, handleSubmit, step }) => {
  const [value, setValue] = useState();
  const [error, setError] = useState(null);

  const handleProceed = (e) => {
    if (!value) {
      setError("Please fill this in");
      return;
    } else {
      setError(null);
      nextStep();
      handleSubmit(e, { ...formData, phoneNumber: value });
    }
  };

  const handlePhoneInputChange = (value) => {
    setValue(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className={classes.container}
    >
      <p className={classes.heading}>{step}. Your phone number</p>
      <p className={classes.paragraph}>
        We won't call you unless it is absolutely required to process your
        application.
      </p>
      <div style={{ backgroundColor: "white", padding: "0.5rem" }}>
        <PhoneInput
          international
          defaultCountry="IN"
          value={value}
          onChange={handlePhoneInputChange}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
          inputStyle={{
            width: "100%",
          }}
          containerStyle={{
            width: "100%",
          }}
        />
      </div>
      {error && (
        <div className={classes.errorMessage}>
          <WarningIcon size="small" className={classes.errorIcon} />
          <span>{error}</span>
        </div>
      )}
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={handleProceed}>
          Submit
        </button>
      </div>
    </motion.div>
  );
};

export default PhoneNumber;
