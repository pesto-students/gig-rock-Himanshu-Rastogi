import { Button, Card, Typography } from "@mui/material";
import React from "react";
import JobSummaryCard from "./JobSummaryCard";

const RecommendedJobsCard = () => {
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
            Recommended jobs
          </Typography>
          <Button
            sx={{ color: "#633B48", textTransform: "none", padding: 0 }}
            size="small"
            variant="text"
          >
            View all
          </Button>
        </div>

        <JobSummaryCard width="100%" />
      </div>
    </Card>
  );
};

export default RecommendedJobsCard;
