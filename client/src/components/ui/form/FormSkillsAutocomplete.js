import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

const top100Films = [
  { title: "React" },
  { title: "Node" },
  { title: "Javascript" },
  { title: "C++" },
  { title: "Java" },
  { title: "Mongo Db" },
  { title: "Mysql" },
];

const FormSkillsAutocomplete = (props) => {
  // console.log(props);

  const {
    name,
    control,
    formState,
    getFieldState,
    getValues,
    setValue,
    type,
    setFocus,
    multiline,
    autoCorrect,
    disabled,
    placeholder,
    fullWidth,
    label,
    readOnly,
    multiple,
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
          <Autocomplete
            multiple={multiple}
            name={name}
            onChange={(e, values) => setValue(name, values)}
            id="tags-outlined"
            size="small"
            ref={ref}
            sx={{ width: !fullWidth ? 320 : fullWidth }}
            fullWidth={fullWidth}
            options={top100Films}
            getOptionLabel={(option) => option.title}
            // defaultValue={[top100Films[13]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                placeholder={placeholder ? placeholder : "Select skills"}
              />
            )}
          />
        )}
      />
    </div>
  );
};

export default FormSkillsAutocomplete;
