import express from "express";
const router = express.Router();
import {
  signin,
  signup,
  updateProfile,
} from "../controllers/userControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.route("/").put(authMiddleware, updateProfile);
router.route("/signup").post(signup);
router.route("/signin").post(signin);

export default router;
