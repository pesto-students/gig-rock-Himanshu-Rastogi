import { Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import JobIcon from "@mui/icons-material/WorkOutline";
import CompanyIcon from "@mui/icons-material/BusinessOutlined";
import { useNavigate } from "react-router";

const ProfileCard = (props) => {
  const { width, user } = props;
  const {
    userId,
    accountType,
    companyName,
    designation,
    email,
    fullName,
    mobNumber,
  } = user?.result ? user?.result : {};

  const navigate = useNavigate();

  return (
    <Card sx={{ borderRadius: 2, height: "100%", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: width ? width : 220,
          backgroundColor: "#F7F2FA",
          padding: 5,
        }}
      >
        <img
          style={{ backgroundColor: "black", borderRadius: 100 }}
          alt="profile pic"
          src={logo}
          height="80"
          width="80"
        />

        <Typography variant="body2">{fullName}</Typography>
        <Typography variant="caption">{email}</Typography>

        <Button
          color="inherit"
          variant="contained"
          size="small"
          style={{
            borderRadius: 50,
            textTransform: "none",
            backgroundColor: "#633B48",
            color: "#FFFFFF",
          }}
          onClick={() => navigate("/profile")}
        >
          View profile
        </Button>

        <Divider
          sx={{ marginTop: 2, marginBottom: 1 }}
          variant="middle"
          flexItem
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <Button
            sx={{
              textTransform: "none",
              color: "black",
            }}
            variant="text"
            size="small"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>

          <Button
            sx={{
              textTransform: "none",
              color: "black",
            }}
            variant="text"
            size="small"
            startIcon={<JobIcon />}
          >
            Jobs
          </Button>

          <Button
            sx={{
              textTransform: "none",
              color: "black",
            }}
            variant="text"
            size="small"
            startIcon={<CompanyIcon />}
          >
            Companies
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
