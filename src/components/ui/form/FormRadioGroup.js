import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { Radio, Typography } from "@mui/material";

const FormRadioGroup = (props) => {
  const {
    name,
    control,
    accountArray,
    formState,
    getFieldState,
    getValues,
    setValue,
    modalValue,
    title,
    style,
    showTitleToolTip,
    disabled,
    placeholder,
    caption,
    label,
    status,
  } = props;

  const [selectedValue, setSelectedValue] = useState(accountArray[0]);

  //   const { isTouched, invalid, error } = getFieldState(name, formState);

  useEffect(() => {
    if (selectedValue) {
      setValue(name, selectedValue);
    }
  }, [selectedValue]);

  const handleChange = (event) => {
    const isChecked = event.target.value;
    setSelectedValue(isChecked);
    setValue(name, isChecked);
  };

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref, name } }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <Typography variant="body2">
              {modalValue?.registerModal ? "Register as:" : "Login as:"}
            </Typography>
            <div style={{ marginLeft: 10 }}>
              <Typography variant="caption">As job seeker</Typography>
              <Radio
                checked={selectedValue === accountArray[0]}
                onChange={handleChange}
                size="small"
                value={accountArray[0]}
                name={name}
                inputProps={{ "aria-label": "jobSeeker" }}
              />
              <Typography variant="caption">As recruiter </Typography>
              <Radio
                checked={selectedValue === accountArray[1]}
                onChange={handleChange}
                size="small"
                value={accountArray[1]}
                name={name}
                inputProps={{ "aria-label": "recruiter" }}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default FormRadioGroup;
