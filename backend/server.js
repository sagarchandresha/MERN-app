const express = require("express");
require("dotenv").config();
// express app config
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.method + " " + req.path);
  next();
});

// routes app
app.get("/", function (req, res) {
  res.json({
    Title: "This is home page route",
  });
});

// listen app
app.listen(process.env.PORT, () => {
  console.log("Running on " + process.env.PORT);
});
