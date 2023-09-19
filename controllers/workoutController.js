const Workout = require("../model/Workout");
const mongoose = require("mongoose");

// get all workouts

const getWorkouts = async (req, res) => {
  try {
    const user_id = req.user._id;
    const workouts = await Workout.find({ user_id });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(404).json("No workouts to display");
  }
};
// get a single workout

const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findOne({ id });
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json("Workout does not exist");
  }
};
// post a workout

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({ title, load, reps, user_id });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findOneAndDelete({ id });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json("No such workout to delete");
  }
};
// update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findOneAndUpdate({ id }, { ...req.body });
    res.status(200).json(workout);
  } catch (error) {
    res
      .status(400)
      .json({ error: error.message, err: "no such workout to update" });
  }
};
module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
