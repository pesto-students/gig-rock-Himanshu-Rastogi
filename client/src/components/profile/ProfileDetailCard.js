import { Button, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import {
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
  LocalPhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";

const ProfileDetailCard = (props) => {
  const { user } = props;
  const {
    userId,
    accountType,
    companyName,
    designation,
    email,
    fullName,
    mobNumber,
  } = user ? user : {};

  return (
    <Card sx={{ borderRadius: 2 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F7F2FA",
          alignItems: "center",
          padding: 20,
          gap: 10,
        }}
      >
        <img
          style={{
            backgroundColor: "black",
            borderRadius: 100,
            alignSelf: "start",
          }}
          alt="profile pic"
          src={logo}
          height="50"
          width="50"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Typography variant="body2">{fullName}</Typography>
            <IconButton style={{ padding: 1 }} aria-label="edit">
              <EditOutlined fontSize="small" />
            </IconButton>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <LocationOnOutlined fontSize="small" />
                <Typography variant="caption">Pune</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <WorkOutlineOutlined fontSize="small" />
                <Typography variant="caption">3 Yrs</Typography>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  flexWrap: "wrap",
                }}
              >
                <LocalPhoneOutlined fontSize="small" />
                <Typography variant="caption">{mobNumber}</Typography>
                <Button
                  color="inherit"
                  variant="contained"
                  size="small"
                  style={{
                    borderRadius: 50,
                    textTransform: "none",
                    backgroundColor: "#633B48",
                    color: "#FFFFFF",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  Verify
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  flexWrap: "wrap",
                }}
              >
                <EmailOutlined fontSize="small" />
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
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  Verify
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileDetailCard;
