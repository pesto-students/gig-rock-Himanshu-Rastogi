import { Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import JobSummaryCard from "./JobSummaryCard";

const PostedJobsCard = (props) => {
  const { setOpenPostAJob } = props;

  const handleOpenPostJob = () => {
    setOpenPostAJob(true);
  };

  return (
    <Card sx={{ borderRadius: 2 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F7F2FA",
          padding: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 5,
          }}
        >
          <Typography sx={{}} variant="body2">
            Posted jobs
          </Typography>
          <Button
            sx={{ color: "#633B48", textTransform: "none", padding: 0 }}
            size="small"
            variant="text"
          >
            View all
          </Button>
        </div>

        <Button
          color="inherit"
          variant="contained"
          size="small"
          style={{
            borderRadius: 50,
            textTransform: "none",
            backgroundColor: "#633B48",
            color: "#FFFFFF",
            marginTop: 5,
            marginBottom: 20,
          }}
          onClick={handleOpenPostJob}
        >
          Post a job
        </Button>

        <JobSummaryCard width="100%" />
      </div>
    </Card>
  );
};

export default PostedJobsCard;
