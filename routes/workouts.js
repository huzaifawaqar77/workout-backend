const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// middleware to check authentication of a user
router.use(requireAuth);
// get all workouts
router.get("/", getWorkouts);

// get a single workout
router.get("/:id", getWorkout);

// create a workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);
module.exports = router;
