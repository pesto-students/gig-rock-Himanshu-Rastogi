import { Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";

const ApplyJobCard = (props) => {
  const { width, applyJobCard, setOpenApplyCard, setApplyJob } = props;

  const {
    accountType,
    companyName,
    description,
    experience,
    jobTitle,
    location,
    salary,
    skills,
  } = applyJobCard ? applyJobCard : {};

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleOpenApplyCard = () => {
    setOpenApplyCard && setOpenApplyCard(true);
    setApplyJob && setApplyJob(true);
  };

  console.log("applyJobCard:", applyJobCard);

  return (
    // applyJobCard && (
    <Card sx={{ borderRadius: 2, width: width ? width : 700 }}>
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
            gap: 20,
          }}
        >
          <Typography sx={{}} variant="body2">
            Job description
          </Typography>
          {user ? (
            <Button
              sx={{
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
              onClick={handleOpenApplyCard}
            >
              Apply now
            </Button>
          ) : (
            <Typography variant="caption">Login/Register to apply</Typography>
          )}
        </div>

        <Typography variant="subtitle2">{description}</Typography>

        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Typography variant="caption">Role:</Typography>
          <Typography variant="caption">{jobTitle}</Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Typography variant="caption">Job location:</Typography>
          <Typography variant="caption">{location}</Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Typography variant="caption">Experience:</Typography>
          <Typography variant="caption">{experience} years</Typography>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: 5,
          }}
        >
          <Typography variant="caption">Key skills:</Typography>
          {skills?.map((skill) => {
            return (
              <div key={skill?._id}>
                <Typography variant="caption">{skill?.title},</Typography>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Typography variant="caption">Salary:</Typography>
          <Typography variant="caption">{salary} per year</Typography>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Typography variant="caption">Company name:</Typography>
          <Typography variant="caption">{companyName}</Typography>
        </div>
      </div>
    </Card>
  );
  // );
};

export default ApplyJobCard;
