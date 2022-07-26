const express = require('express')
const userController = require('../controllers/userController')
const auth = require("../controllers/authentication/authentication")
 const router = express.Router()

 router.post("/register", userController.createUser)
 router.get("/login", userController.loginUser)
 router.post("/user/:userId/profile", userController.getUserById)
 router.put("/user/:userId/profile", userController.updateUserProfile)

 module.exports = router;