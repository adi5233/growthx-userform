import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import WarningIcon from "@material-ui/icons/Warning";

const PhoneNumber = ({ nextStep, formData, classes, handleSubmit }) => {
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
    <div className={classes.container}>
      <p className={classes.heading}>7. Your phone number</p>
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
    </div>
  );
};

export default PhoneNumber;
