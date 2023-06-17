import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import StyledModal from "../ui/StyledModal";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import ProfileMenuCard from "../ProfileMenuCard";
import { logOutUser } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import SwipeableTemporaryDrawer from "./SwipeableDrawer";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalValue, setModalValue] = useState({});
  const [showProfileMenuCard, setShowProfileMenuCard] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = useCallback(() => {
    dispatch(logOutUser(navigate));
    setUser(null);
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = user?.token;
    // console.log("localStorage token:", token);

    if (token) {
      const decodedToken = decode(token);
      // console.log("decodedToken:", decodedToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, handleLogout, user?.token]);

  useEffect(() => {
    if (!user) {
      handleCloseMenuCard();
    }
  }, [user]);

  const handleOpenModal = (value) => {
    setShowModal(true);
    setModalValue(value);
  };
  const handleCloseModal = () => setShowModal(false);

  const handleShowMenuCard = () => {
    setShowProfileMenuCard(true);
  };

  const handleCloseMenuCard = () => {
    setShowProfileMenuCard(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          display: "flex",
          height: 50,
          backgroundColor: "#B4B1B1",
          justifyContent: "center",
        }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10%",
            }}
          >
            <img
              className="img"
              style={{ marginLeft: -20 }}
              alt="logo"
              src={logo}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 15,
                alignItems: "center",
              }}
            >
              <NavLink
                style={(navData) => ({
                  color: navData.isActive ? "white" : "#633B48",
                  textDecoration: "none",
                })}
                to="/jobspage"
              >
                <Typography className="text" variant="body1">
                  Jobs
                </Typography>
              </NavLink>
              <NavLink
                style={(navData) => ({
                  color: navData.isActive ? "#633B48" : "white",
                  textDecoration: "none",
                })}
              >
                <Typography variant="body1">Companies</Typography>
              </NavLink>
            </div>
          </div>
          <div>
            {user ? (
              <Button
                color="inherit"
                variant="contained"
                size="small"
                style={{
                  borderRadius: 50,
                  textTransform: "none",
                  backgroundColor: "#FFFFFF",
                  color: "black",
                  alignContent: "center",
                }}
                onClick={handleShowMenuCard}
              >
                <MenuIcon />
              </Button>
            ) : (
              <div className="auth-btn">
                <Button
                  color="inherit"
                  variant="contained"
                  size="small"
                  style={{
                    borderRadius: 50,
                    textTransform: "none",
                    backgroundColor: "#FFFFFF",
                    color: "#633B48",
                    fontSize: 12,
                    marginRight: 5,
                  }}
                  onClick={() => handleOpenModal({ loginModal: true })}
                >
                  Login
                </Button>

                <Button
                  color="inherit"
                  variant="contained"
                  size="small"
                  style={{
                    borderRadius: 50,
                    textTransform: "none",
                    backgroundColor: "#633B48",
                    color: "#FFFFFF",
                    fontSize: 12,
                  }}
                  onClick={() => handleOpenModal({ registerModal: true })}
                >
                  Register
                </Button>
              </div>
            )}

            <StyledModal
              showModal={showModal}
              modalValue={modalValue}
              handleClose={handleCloseModal}
            />

            <ProfileMenuCard
              showProfileMenuCard={showProfileMenuCard}
              handleClose={handleCloseMenuCard}
              logout={handleLogout}
              user={user}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default NavBar;
