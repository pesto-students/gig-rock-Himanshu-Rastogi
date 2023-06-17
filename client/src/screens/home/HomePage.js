import React from "react";
import CarouselView from "../../components/carousel/CarouselView";
import { Typography } from "@mui/material";
import SearchBar from "../../components/ui/SearchBar";
import CompanyList from "../../components/CompanyList";

const HomePage = () => {
  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   height: "100vh",
    //   marginBottom: "6%",
    // }}
    >
      <CarouselView />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4%",
          marginBottom: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Find job now
          </Typography>
          <Typography variant="body1" maxWidth="70%">
            In the era of GenZ where everyone is struggling to land a decent
            job, Gig Rock is here to land you the job that excites you the most
          </Typography>
        </div>

        <SearchBar />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            marginTop: "8%",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Top companies hiring now
          </Typography>
          <CompanyList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
