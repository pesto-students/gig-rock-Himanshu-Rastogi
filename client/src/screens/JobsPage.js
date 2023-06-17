import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import JobSummaryCard from "../components/JobSummaryCard";
import ApplyJobCard from "../components/ApplyJobCard";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../actions/jobs";
import "./JobsPage.css";
import { useNavigate } from "react-router";
import ApplyJobSummaryCard from "../components/ApplyJobSummaryCard";

const JobsPage = (props) => {
  const [jobList, setJobList] = useState([]);
  const [applyJobCard, setApplyJobCard] = useState({});
  const [applyJob, setApplyJob] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    if (jobs) {
      console.log("jobs:", jobs);
      setJobList(jobs);
    }
  }, [jobs]);

  // useEffect(() => {
  //   if (applyJob) {
  //     navigate("/apply", { state: applyJobCard });
  //   }
  // }, [applyJob]);

  useEffect(() => {
    setApplyJobCard(jobList[0]);
  }, [jobList]);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div className="jobspage">
      <SearchBar />
      <Grid
        container
        sx={{ marginTop: 2, justifyContent: "center" }}
        spacing={2}
      >
        {/* <Grid item sm={2} xs={8} style={{ height: "100%", width: "100%" }}>
          <ApplyJobCard  />
        </Grid> */}
        <Grid item sm={6} xs={11} style={{ height: "100%", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle2">Search results</Typography>
            <div>
              {jobList ? (
                jobList?.map((data) => {
                  return (
                    <div key={data?._id}>
                      <JobSummaryCard
                        onClick={(isClicked) => {
                          if (isClicked) {
                            setApplyJobCard(data);
                          }
                        }}
                        data={data}
                        width="100%"
                      />
                    </div>
                  );
                })
              ) : (
                <Typography>No searches found!</Typography>
              )}
            </div>
          </div>
        </Grid>
        <Grid
          item
          sm={5}
          xs={11}
          style={{
            height: "100%",
            width: "100%",
            position: "sticky",
            top: 50,
            bottom: 20,
          }}
        >
          <ApplyJobCard
            applyJobCard={applyJobCard}
            setApplyJob={setApplyJob}
            width="100%"
          />
        </Grid>
      </Grid>

      {applyJob && (
        <ApplyJobSummaryCard marginTop={-70} setApplyJob={setApplyJob} />
      )}
    </div>
  );
};

export default JobsPage;
