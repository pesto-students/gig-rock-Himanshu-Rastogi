import { Card, Divider, Typography } from "@mui/material";
import React from "react";

const JobSummaryCard = (props) => {
  const { width, data, onClick } = props;

  const {
    accountType,
    companyName,
    description,
    experience,
    jobTitle,
    location,
    salary,
    skills,
  } = data ? data : {};

  return (
    <Card sx={{ borderRadius: 2, marginBottom: 2 }} onClick={onClick}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#DED8E1",
          width: width ? width : 300,
          padding: 10,
        }}
      >
        <div style={{}}>
          <Typography variant="subtitle2">{jobTitle}</Typography>
          <Typography variant="caption">{companyName}</Typography>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <Typography variant="caption">{experience} Yrs</Typography>
          <Divider sx={{ marginInline: 1 }} flexItem orientation="vertical" />
          <Typography variant="caption">{salary} Lpa</Typography>
          <Divider sx={{ marginInline: 1 }} flexItem orientation="vertical" />
          <Typography variant="caption">{location}</Typography>
        </div>

        <Typography variant="caption">{description}</Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          {skills?.map((skill) => {
            return (
              <div
                key={skill._id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                }}
              >
                <Typography variant="caption">{skill?.title}</Typography>
                <Divider
                  sx={{ marginInline: 1 }}
                  flexItem
                  orientation="vertical"
                />
              </div>
            );
          })}
          {/* // <Typography variant="caption">Node js</Typography>
          //{" "}
          <Divider sx={{ marginInline: 1 }} flexItem orientation="vertical" />
          // <Typography variant="caption">React</Typography>
          //{" "}
          <Divider sx={{ marginInline: 1 }} flexItem orientation="vertical" />
          // <Typography variant="caption">Javascript</Typography> */}
        </div>

        <Typography sx={{ alignSelf: "end" }} variant="caption">
          1 day ago
        </Typography>
      </div>
    </Card>
  );
};

export default JobSummaryCard;
