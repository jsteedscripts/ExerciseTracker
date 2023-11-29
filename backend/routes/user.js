const express = require('express')
const { loginUser, signupUser } = require('../controllers/userController')
const router = express.Router()

// login
router.post('/login', loginUser)

// sign up
router.post('/signup', signupUser)

module.exports = router