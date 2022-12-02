const express = require("express");

const app = express();
const {
  getWorkouts,
  getWorkout,
  createWorkout,
} = require("../controllers/workoutController");

// get all workouts
app.get("/", getWorkouts);

// get single workout
app.get("/:id", getWorkout);

// create a new workout
app.post("/", createWorkout);

// delete workout
app.delete("/", (req, res) => {
  console.log("Delete workout");
  res.json({
    Title: "Delete route",
  });
});

// Update workout
app.patch("/:id", (req, res) => {
  console.log("Update workout");
  res.json({
    Title: "Update route",
  });
});

module.exports = app;
