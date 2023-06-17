import { Button, Divider, IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../actions/jobs";

const SearchBar = () => {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    if (jobs) {
      console.log("jobs:", jobs);
      // setJobList(jobs);
    }
  }, [jobs]);

  // useEffect(() => {
  //   if (inputs) {
  //     dispatch(
  //       getJobs({
  //         skills: { title: inputs?.skill },
  //         experience: inputs?.experience,
  //         location: inputs?.location,
  //       })
  //     );
  //   }
  // }, [dispatch, inputs]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (inputs) {
      console.log("search value:", inputs);
      dispatch(
        getJobs({
          // skills: { title: inputs?.skill },
          // experience: inputs?.experience,
          location: inputs?.location,
        })
      );
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: "90%",
        borderRadius: 40,
        color: "white",
        backgroundColor: "#B4B1B1",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search skills"
        name="skill"
        value={inputs.skill || ""}
        onChange={handleChange}
        // inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Select experience"
        name="experience"
        value={inputs.experience || ""}
        onChange={handleChange}
        // inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Select location"
        name="location"
        value={inputs.location || ""}
        onChange={handleChange}
        // inputProps={{ "aria-label": "search google maps" }}
      />
      <Button
        color="inherit"
        variant="contained"
        size="medium"
        style={{
          borderRadius: 50,
          textTransform: "none",
          backgroundColor: "#633B48",
          color: "#FFFFFF",
          maxWidth: 400,
          marginLeft: 20,
        }}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </Paper>
  );
};
export default SearchBar;
