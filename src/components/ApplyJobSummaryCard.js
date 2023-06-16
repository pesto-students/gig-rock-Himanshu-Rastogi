import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Card, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInput from "./ui/form/FormInput";
import FormSkillsAutocomplete from "./ui/form/FormSkillsAutocomplete";
import { CloseOutlined, FileUploadOutlined } from "@mui/icons-material";

const ApplyJobSummaryCard = (props) => {
  // console.log("modal display");
  const { showModal, handleClose, modalValue, setOpenApplyCard, setApplyJob } =
    props;
  const [open, setOpen] = useState(showModal);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedModalValue, setSelectedModalValue] = useState(modalValue);

  const {
    control,
    handleSubmit,
    getFieldState,
    getValues,
    reset,
    setValue,
    watch,
    formState,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(signInValidationSchema),
    defaultValues: {
      experience: "",
      skills: [],
      coverLetter: "",
    },
  });

  const handleCloseApplyCard = () => {
    setOpenApplyCard && setOpenApplyCard(false);
    setApplyJob && setApplyJob(false);
    reset();
  };

  const onSubmit = (event) => {
    // event.preventDefault();
    console.log(event);
  };

  return (
    <Card sx={{ borderRadius: 2, width: "90%", zIndex: 1, marginTop: -15 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F7F2FA",
          padding: 30,
          alignItems: "center",
          gap: 10,
        }}
      >
        <div style={{ alignSelf: "end", marginTop: -20, marginRight: -20 }}>
          <IconButton
            style={{ padding: 1 }}
            aria-label="edit"
            onClick={handleCloseApplyCard}
          >
            <CloseOutlined fontSize="small" />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "baseline",
            gap: 40,
            alignItems: "start",
          }}
        >
          <Typography variant="subtitle2">Upload resume:</Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "baseline",
              gap: 10,
            }}
          >
            <FileUploadOutlined />
            <Button
              style={{
                borderRadius: 50,
                textTransform: "none",
                backgroundColor: "#633B48",
                color: "#FFFFFF",
                paddingTop: 0,
                paddingBottom: 0,
              }}
              color="success"
              size="small"
              variant="contained"
            >
              Choose file
            </Button>
          </div>
        </div>

        <FormInput
          name="experience"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          type="number"
          placeholder="Experience in numbers"
          label="Total Experience"
          autoCapitalize="none"
          autoCorrect="false"
        />

        <FormSkillsAutocomplete
          name="skills"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          multiple="true"
          placeholder="Select skills"
          label="Key Skills"
        />

        <FormInput
          name="coverLetter"
          control={control}
          formState={formState}
          getFieldState={getFieldState}
          getValues={getValues}
          multiline="true"
          placeholder="Describe yourself in brief"
          label="Cover Letter"
          autoCapitalize="none"
          autoCorrect="false"
        />

        <Button
          sx={{
            borderRadius: 50,
            textTransform: "none",
            backgroundColor: "#633B48",
            color: "#FFFFFF",
            alignSelf: "center",
            width: "40%",
          }}
          color="success"
          size="small"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Apply
        </Button>
      </div>
    </Card>
  );
};

export default ApplyJobSummaryCard;
