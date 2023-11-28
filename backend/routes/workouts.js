const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()
const {
    getWorkouts,
    getWorkout,
    createWorkout,
} = require('../controllers/workoutController')

// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete a workout'})
})

// update a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'update a workout'})
})


module.exports = router