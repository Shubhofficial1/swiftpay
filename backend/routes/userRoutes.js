import express from "express";
const router = express.Router();
import {
  signin,
  signup,
  updateProfile,
  searchUsers,
} from "../controllers/userControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.route("/").put(authMiddleware, updateProfile);
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/bulk").get(searchUsers);

export default router;
