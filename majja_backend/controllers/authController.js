const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      name,
      email,
      phone,
      password,
    });

    await user.save();
    res.status(200).json({ message: 'Registration successful' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
   
    res.status(200).json({token, user: {id: user._id, name: user.name, email: user.email, phone: user.phone}});
  } catch (error) {
    console.error("Server error in register:", error); 
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email, phone: user.phone } });;
  } catch (error) {
    console.error("Login error:", error); // Added error logging for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error("Fetch user details error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login, getUserDetails };