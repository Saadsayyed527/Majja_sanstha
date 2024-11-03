const express = require('express');
const { register, login, getUserDetails } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
//router.get('/me', authMiddleware, getUserDetails);
router.get('/profile', authMiddleware, getUserDetails);

module.exports = router;