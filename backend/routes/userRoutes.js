import express from "express";
const router = express.Router();
import { signin, signup } from "../controllers/userControllers.js";

router.route("/signup").post(signup);
router.route("/signin").post(signin);

export default router;
