const express = require("express");

const app = express();

// get all workouts
app.get("/", (req, res) => {
  console.log("GET workout");
  res.json({
    Title: "This is workout home page route",
  });
});

// create a new workout
app.post("/", (req, res) => {
  console.log("CREATE workout");
  res.json({
    Title: "CREATE workout route",
  });
});

// get single workout
app.get("/:id", (req, res) => {
  console.log("get single workout");
  res.json({
    Title: "get single workout route",
  });
});

// delete workout
app.delete("/", (req, res) => {
  console.log("Delete workout");
  res.json({
    Title: "Delete route",
  });
});

// delete workout
app.delete("/", (req, res) => {
  console.log("Delete workout");
  res.json({
    Title: "Delete route",
  });
});

module.exports = app;
