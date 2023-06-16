import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FormInput = (props) => {
  // console.log(props);

  const {
    name,
    control,
    formState,
    getFieldState,
    getValues,
    setValue,
    variant,
    fullWidth,
    type,
    setFocus,
    multiline,
    autoCorrect,
    disabled,
    placeholder,
    label,
    readOnly,
  } = props;

  useEffect(() => {
    if (setFocus) {
      setFocus(name);
    }
  }, [setFocus, name]);

  return (
    <div style={{ marginBottom: 10 }}>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, ref, name },
          fieldState: { error },
        }) => (
          <TextField
            sx={{ width: !fullWidth ? 320 : fullWidth }}
            fullWidth={fullWidth}
            variant={variant}
            readOnly={readOnly || false}
            type={type}
            error={error?.message && true}
            helperText={error && error.message}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched/blur
            value={value} // input value
            name={name} // send down the input name
            ref={ref} // send input ref, so we can focus on input when error appear
            disabled={disabled}
            multiline={multiline ? multiline : false}
            autoCorrect={autoCorrect ? autoCorrect : false}
            size="small"
            autoCapitalize={"none"}
            placeholder={placeholder || ""}
            label={label}
          />
        )}
      />
    </div>
  );
};

export default FormInput;
