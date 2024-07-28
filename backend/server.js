import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Route");
});

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`);
});
