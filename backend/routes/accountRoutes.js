import express from "express";
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Accounts Route");
});

export default router;
