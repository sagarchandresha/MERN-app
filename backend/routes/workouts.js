const express = require("express");
const Workout = require("../models/workoutModel")
const app = express();

// get all workouts
app.get("/", (req, res) => {
  console.log("GET workout");
  res.json({
    Title: "This is workout home page route",
  });
});

// get single workout
app.get("/:id", (req, res) => {
  console.log("get single workout");
  res.json({
    Title: "get single workout route",
  });
});

// create a new workout
app.post("/", async (req, res) => {
  const { title, loads, reps } = req.body;
  try {
    const workout = await Workout.create({ title, loads, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ "error": err.message });
  }
});


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
