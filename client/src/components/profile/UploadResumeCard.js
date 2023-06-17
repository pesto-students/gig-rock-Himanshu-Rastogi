import { Button, Card, IconButton, Typography } from "@mui/material";
import React from "react";

const UploadResumeCard = (props) => {
  const { width } = props;

  return (
    <Card sx={{ borderRadius: 2, width: width }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F7F2FA",
          alignItems: "center",
          padding: 20,
          gap: 10,
        }}
      >
        <Typography style={{ alignSelf: "start" }} variant="subtitle2">
          Resume
        </Typography>
        <Typography variant="caption">
          Resume is the most important document recruiters look for. Recruiters
          generally do not look at profiles without resumes.
        </Typography>
      </div>
    </Card>
  );
};

export default UploadResumeCard;
