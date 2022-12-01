const express = require("express");
const workout_router = require("./routes/workouts");
require("dotenv").config();
// express app config
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method + " " + req.path);
  next();
});

// routes app
app.use("/api/workouts", workout_router);

// listen app
app.listen(process.env.PORT, () => {
  console.log("Running on " + process.env.PORT);
});
