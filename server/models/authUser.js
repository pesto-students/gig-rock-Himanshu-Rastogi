import mongoose from "mongoose";

const authSchema = mongoose.Schema({
  userId: String,
  accountType: String,
  fullName: String,
  email: String,
  password: String,
  mobNumber: Number,
  companyName: String,
  designation: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const AuthUser = mongoose.model("AuthUser", authSchema);

export default AuthUser;
