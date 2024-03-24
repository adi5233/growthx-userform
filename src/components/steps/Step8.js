import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Step8 = ({ handleStepChange, formData, handleChange, classes }) => {
  const [value, setValue] = useState();
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
          defaultCountry="RU"
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
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={() => handleStepChange()}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Step8;
