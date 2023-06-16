import React, { useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import ProfileCard from "../components/ProfileCard";
import RecommendedJobsCard from "../components/RecommendedJobsCard";
import AppliedJobsCard from "../components/AppliedJobsCard";
import TopCompaniesCard from "../components/TopCompaniesCard";
import PostedJobsCard from "../components/PostedJobsCard";
import { AccountType } from "../constant/constant";
import PostAJobCard from "../components/PostAJobCard";
import { Grid, Typography } from "@mui/material";
import "./DashboardPage.css";

const DashboardPage = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [openPostAJob, setOpenPostAJob] = useState(false);

  console.log(user);

  return (
    <div className="dashboard">
      <SearchBar />

      {user ? (
        <div>
          {openPostAJob && (
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                marginTop: 100,
              }}
            >
              <PostAJobCard setOpenPostAJob={setOpenPostAJob} />
            </div>
          )}

          <Grid
            container
            sx={{ marginTop: 2, justifyContent: "center" }}
            spacing={2}
          >
            <Grid item sm={5} xs={8} style={{ height: "100%" }}>
              <ProfileCard user={user} width="100%" />
            </Grid>

            <Grid item sm={7} xs={11} style={{ width: "100%" }}>
              {user?.result?.accountType === AccountType.JobSeeker ? (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <RecommendedJobsCard />
                  <AppliedJobsCard />
                  <TopCompaniesCard />
                </div>
              ) : (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <PostedJobsCard setOpenPostAJob={setOpenPostAJob} />
                  <TopCompaniesCard />
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          <Typography sx={{margin: 5}} variant="h6">Please Login/Register</Typography>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
