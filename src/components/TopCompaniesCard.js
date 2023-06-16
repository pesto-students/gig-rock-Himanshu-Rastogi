import { Button, Card, Typography } from "@mui/material";
import React from "react";
import CompanyList from "./CompanyList";

const TopCompaniesCard = () => {
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
            Top companies
          </Typography>
          <Button
            sx={{ color: "#633B48", textTransform: "none", padding: 0 }}
            size="small"
            variant="text"
          >
            View all
          </Button>
        </div>

        <CompanyList height="40" weight="40" />
      </div>
    </Card>
  );
};

export default TopCompaniesCard;
