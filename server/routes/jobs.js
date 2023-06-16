import express from "express";
import { postAJob, getJobs } from "../controllers/jobs.js";

const router = express.Router();

router.post("/postjob", postAJob);
router.get("/getjobs", getJobs);

export default router;
