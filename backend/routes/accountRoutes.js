import express from "express";
import { getBalance, transferMoney } from "../controllers/accountController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/balance").get(authMiddleware, getBalance);
router.route("/transfer").get(authMiddleware, transferMoney);

export default router;
