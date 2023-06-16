import { Typography } from "@mui/material";
import logo from "./../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#B4B1B1",
        position: "absolute",
        width: "100%",
        overflow: "hidden",
        justifyContent: "end",
      }}
    >
      <div
        style={{
          // bottom: 0,
          display: "flex",
          flexDirection: "row",
          color: "#633B48",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <img style={{}} alt="logo" src={logo} height="120" width="120" />
        </div>
        <div className="footer-options">
          <Typography variant="body1">About us</Typography>
          <Typography variant="body1">Contact us</Typography>
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Jobs</Typography>
        </div>
      </div>
      <div
        style={{
          color: "white",
          alignSelf: "center",
        }}
      >
        <Typography variant="body2">GIGROCK | Copyright @ 2023</Typography>
      </div>
    </div>
  );
};

export default Footer;
