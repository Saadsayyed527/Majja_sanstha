const mongoose = require('mongoose');
require('dotenv').config();  // To load environment variables

const connectDB = async () => {
  try {
   // await mongoose.connect("mongodb+srv://saad123:saad123@cluster0.98a5fer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    await mongoose.connect("mongodb+srv://siddhii:Siddhi%4015@siddhii.yclk8.mongodb.net/?retryWrites=true&w=majority&appName=Siddhii");
   console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;