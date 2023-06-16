import React, { useState } from "react";
import ProfileDetailCard from "../../components/profile/ProfileDetailCard";
import UploadResumeCard from "../../components/profile/UploadResumeCard";
import "./ProfilePage.css";
import { Grid } from "@mui/material";

const ProfilePage = (props) => {
  const {} = props;

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <div className="profile">
      {/* <ProfileDetailCard />
      <UploadResumeCard /> */}

      <Grid
        container
        sx={{ justifyContent: "center", width: "100%" }}
        spacing={2}
      >
        <Grid item xs={11}>
          <ProfileDetailCard user={user?.result} />
        </Grid>
        <Grid item xs={11}>
          <UploadResumeCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
