import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Home Route");
});

const PORT = process.env.PORT || 5001;
const NODE_ENV = process.env.NODE_ENV || "developmen1t";

app.listen(5000, () => {
  console.log(
    `Server is running on port ${PORT} in ${NODE_ENV} mode`.cyan.underline
      .italic
  );
});
