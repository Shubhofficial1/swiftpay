import express from "express";
const router = express.Router();
import { getUsersTestRoute } from "../controllers/userControllers.js";

router.route("/").get(getUsersTestRoute);

export default router;
