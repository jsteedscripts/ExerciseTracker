require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const express = require('express')
const mongoose = require('mongoose')

// create express app
const app = express()

// middleware
// allows us to access request elements
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch(() => {
        console.log(error)
    })