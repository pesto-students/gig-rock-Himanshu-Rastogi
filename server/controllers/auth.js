import AuthUser from "../models/authUser.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import passport from "passport";

export const getAuth = async (req, res) => {
  try {
    const getRegisteredUser = await AuthUser.find();

    res.status(200).json(getRegisteredUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const {
    userId,
    accountType,
    fullName,
    email,
    password,
    mobNumber,
    companyName,
    designation,
  } = req.body;

  try {
    const existingUser = await AuthUser.findOne({ email });
    // console.log("existingUser:", existingUser);

    if (existingUser)
      return res.status(404).json({ message: "user exist already." });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);
    // console.log("hashPassword:", hashPassword);

    const result = await AuthUser.create({
      userId,
      accountType,
      fullName,
      email,
      password: hashPassword,
      mobNumber,
      companyName,
      designation,
    });

    // console.log("result:", result);

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};

export const signInUser = async (req, res) => {
  const { email, password, accountType } = req.body;
  console.log("called signIn");
  try {
    const existingUser = await AuthUser.findOne({ email });
    // console.log("existingUser", existingUser);

    if (!existingUser)
      return res.status(404).json({ message: "user doesn't exist." });

    if (accountType !== existingUser?.accountType)
      return res.status(404).json({ message: "Invalid credentials." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};

export const googleSignIn = async (req, res) => {
  console.log("called googleSignIn");
  const { email, password } = req.body;

  try {
    const passportRes = await passport.authenticate("google", {
      scope: ["profile"],
    });
    console.log("passportRes:", passportRes);

    res.status(200).json({ result: passportRes });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};

export const googleSignInCallback = async (req, res) => {
  console.log("called googleSignInCallback");
  const { email, password } = req.body;

  try {
    const passportRes = await passport.authenticate("google", {
      successRedirect: "http://localhost:3000/dashboard",
    });
    console.log("passportRes:", passportRes);

    res.status(200).json({ result: passportRes });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};
