import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  userId: String,
  accountType: String,
  isAccepted: Boolean,
  acceptedUserId: String,
  jobTitle: String,
  companyName: String,
  description: String,
  experience: Number,
  salary: Number,
  location: String,
  skills: [
    {
      title: String,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const JobUser = mongoose.model("JobUser", jobSchema);

export default JobUser;
