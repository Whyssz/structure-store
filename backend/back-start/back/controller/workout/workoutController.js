import asyncHandler from 'express-async-handler';
import Workout from '../../models/workout/workoutModel.js';

// @desc   Add new workout
// @route  POST /api/workouts
// @access Private
export const addNewWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseIds } = req.body;

  const workout = await Workout.create({
    name,
    exercises: exerciseIds,
  });

  res.json(workout);
});

// @desc   Get workout
// @route  GET /api/workouts/:id
// @access Private
export const getWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id)
    .populate('exercises')
    .lean();

  const minutes = Math.round(workout.exercises.length * 3.7);

  // res.json({ ...workout.toObject(), minutes });
  res.json({ ...workout, minutes });
});