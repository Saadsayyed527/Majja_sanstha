const express = require("express");
const router = express.Router();

const {registerController, loginController, userDisplayController} = require("../controllers/authController");

// Authentication routes - same for all types of users
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/", userDisplayController);

module.exports = router;