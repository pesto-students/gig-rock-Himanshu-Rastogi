import express from "express";
import {
  getAuth,
  createUser,
  signInUser,
  googleSignIn,
} from "../controllers/auth.js";

const router = express.Router();

router.get("/", getAuth);
router.post("/signup", createUser);
router.post("/signin", signInUser);
router.get("/google", googleSignIn);
router.get("/google/callback");

export default router;
