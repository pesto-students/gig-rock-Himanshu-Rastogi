import JobUser from "../models/jobsUser.js";

export const getJobs = async (req, res) => {
  console.log("req?.body:", req);
  //   const {} = req.body
  try {
    const result = await JobUser.find(req?.body || { isAccepted: false });

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postAJob = async (req, res) => {
  const {
    userId,
    accountType,
    isAccepted,
    acceptedUserId,
    jobTitle,
    companyName,
    description,
    experience,
    salary,
    location,
    skills,
  } = req.body;

  try {
    const result = await JobUser.create({
      userId,
      accountType,
      isAccepted,
      acceptedUserId,
      jobTitle,
      companyName,
      description,
      experience,
      salary,
      location,
      skills,
    });

    // console.log("result:", result);

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};
