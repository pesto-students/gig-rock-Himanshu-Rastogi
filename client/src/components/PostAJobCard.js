import { Button, Card, Divider, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./ui/form/FormInput";
import { CloseOutlined } from "@mui/icons-material";
import FormSkillsAutocomplete from "./ui/form/FormSkillsAutocomplete";
import { AccountType } from "../constant/constant";
import { useDispatch, useSelector } from "react-redux";
import { postAJob } from "../actions/jobs";

const PostAJobCard = (props) => {
  const { setOpenPostAJob } = props;

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  const {
    control,
    handleSubmit,
    getFieldState,
    getValues,
    setValue,
    reset,
    watch,
    formState,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(signInValidationSchema),
    defaultValues: {
      jobTitle: "",
      companyName: "",
      description: "",
      experience: "",
      salary: "",
      location: "",
      skills: [],
    },
  });

  useEffect(() => {
    if (jobs) {
      console.log("jobs:", jobs);
    }
  }, [jobs]);

  const handleClosePostJob = () => {
    setOpenPostAJob(false);
  };

  const onSubmitPost = (data) => {
    console.log(data);
    const {
      jobTitle,
      companyName,
      description,
      experience,
      salary,
      location,
      skills,
    } = data;

    // console.log(data);

    if (user && user.result?.accountType === AccountType.Recruiter) {
      dispatch(
        postAJob({
          userId: user.result?.userId,
          accountType: user.result?.accountType,
          isAccepted: false,
          acceptedUserId: "",
          jobTitle,
          companyName,
          description,
          experience,
          salary,
          location,
          skills,
        })
      );
      handleClosePostJob();
    }
  };

  return (
    <Card sx={{ borderRadius: 2 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F7F2FA",
          padding: 15,
        }}
      >
        <div style={{ alignSelf: "end", marginTop: -5 }}>
          <IconButton
            style={{ padding: 1 }}
            aria-label="edit"
            onClick={handleClosePostJob}
          >
            <CloseOutlined fontSize="small" />
          </IconButton>
        </div>
        <Typography sx={{ alignSelf: "center" }}>Post a job now</Typography>
        <Divider
          sx={{
            marginTop: 1,
            marginBottom: 2,
          }}
          variant="middle"
          flexItem
        />
        {/* <form onSubmit={handleSubmit(onSubmit.bind(this))}> */}

        <FormInput
          name="jobTitle"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          placeholder="Give a job title"
          label="Job Title"
          autoCapitalize="none"
          autoCorrect="false"
        />

        <FormInput
          name="companyName"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          placeholder="Your cpmpany name"
          label="Company Name"
          autoCapitalize="none"
          autoCorrect="false"
        />

        <FormInput
          name="description"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          placeholder="Job summary"
          label="Description"
          autoCapitalize="none"
          autoCorrect="false"
        />

        <FormInput
          name="experience"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          placeholder="Needed experience"
          label="Experience"
          autoCapitalize="none"
          autoCorrect="false"
        />

        <FormInput
          name="salary"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          placeholder="Give salary "
          label="Salary"
          autoCapitalize="none"
          autoCorrect="false"
        />

        <FormInput
          name="location"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          placeholder="Job location"
          label="Location"
          autoCapitalize="none"
          autoCorrect="false"
        />

        <FormSkillsAutocomplete
          name="skills"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          setValue={setValue}
          getValues={getValues}
          multiple={true}
          placeholder="Needed skills"
          label="Skills"
        />

        <Button
          color="inherit"
          variant="contained"
          size="small"
          style={{
            borderRadius: 50,
            textTransform: "none",
            backgroundColor: "#633B48",
            color: "#FFFFFF",
            minWidth: 320,
          }}
          onClick={handleSubmit(onSubmitPost)}
        >
          Post
        </Button>
      </div>
    </Card>
  );
};

export default PostAJobCard;
