import React, { useEffect, useState } from "react";
import { Button, Divider, Popover, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { SettingsOutlined, LogoutOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";

const ProfileMenuCard = (props) => {
  const { showProfileMenuCard, handleClose, logout, user } = props;
  const {
    userId,
    accountType,
    companyName,
    designation,
    email,
    fullName,
    mobNumber,
  } = user?.result ? user?.result : {};

  const [open, setOpen] = useState(showProfileMenuCard);
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    showProfileMenuCard && handleOpen();
  }, [showProfileMenuCard]);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY === 0) {
        setScrollAtTop(true);
      } else if (window.scrollY !== 0) {
        setScrollAtTop(false);
      }
    };
    // console.log("scrollAtTop:", scrollAtTop);
    return () => (window.onscroll = null);
  }, [scrollAtTop]);

  const handleOpen = (event) => {
    setAnchorEl(event?.currentTarget);
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
    handleClose(true);
    setAnchorEl(null);
  };

  const openValue = Boolean(open);
  const id = openValue ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={openValue}
      // anchorEl={anchorEl}
      onClose={handleCloseModal}
      anchorOrigin={{
        vertical: "left",
        horizontal: "right",
      }}
      sx={{ marginTop: scrollAtTop ? "0%" : "3%" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          backgroundColor: "#F7F2FA",
          padding: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignContent: "baseline",
          }}
        >
          <img
            style={{ backgroundColor: "black", borderRadius: 100 }}
            alt=""
            src={logo}
            height="40"
            width="40"
          />

          <div style={{ textAlign: "center" }}>
            <Typography variant="body2">{fullName}</Typography>
            <Typography variant="caption">{email}</Typography>
          </div>
        </div>

        <Button
          color="inherit"
          variant="contained"
          size="small"
          fullWidth
          style={{
            borderRadius: 50,
            textTransform: "none",
            backgroundColor: "#633B48",
            color: "#FFFFFF",
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 5,
          }}
          onClick={() => {
            navigate("/profile");
            handleCloseModal();
          }}
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
          }}
        >
          <Button
            sx={{
              textTransform: "none",
              padding: 0,
              color: "black",
            }}
            variant="text"
            size="small"
            startIcon={<SettingsOutlined />}
          >
            Settings
          </Button>

          <Button
            sx={{
              textTransform: "none",
              padding: 0,
              color: "black",
            }}
            variant="text"
            size="small"
            startIcon={<LogoutOutlined />}
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </div>
    </Popover>
  );
};

export default ProfileMenuCard;
