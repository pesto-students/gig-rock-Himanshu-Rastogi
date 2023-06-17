import React, { useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import ApplyJobCard from "../components/ApplyJobCard";
import ApplyJobSummaryCard from "../components/ApplyJobSummaryCard";
import "./ApplicationPage.css";
import { Grid } from "@mui/material";

const ApplicationPage = (props) => {
  const [openApplyCard, setOpenApplyCard] = useState(false);

  return (
    <div className="application">
      <SearchBar />

      <Grid
        container
        sx={{ marginTop: 1, justifyContent: "center" }}
        spacing={2}
      >
        <Grid item sm={10} xs={11}>
          <ApplyJobCard width="100%" setOpenApplyCard={setOpenApplyCard} />
        </Grid>
      </Grid>
      {openApplyCard && (
        <ApplyJobSummaryCard setOpenApplyCard={setOpenApplyCard} />
      )}
    </div>
  );
};

export default ApplicationPage;
