const express = require("express");
const mongoose = require("mongoose");
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

// connection of db
mongoose.connect(process.env.MONGO_URI).then(() => {
  // listen app
  app.listen(process.env.PORT, () => {
    console.log("Running after db connected:" + process.env.PORT);
  });
}).catch((e) => console.error(e));

