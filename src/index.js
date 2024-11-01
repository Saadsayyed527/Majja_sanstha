const express = require("express")
const dotenv = require("dotenv").config()
const authRoutes = require("./routes/authRoutes.js")
const userRoutes = require("./routes/userRoutes.js")

const dbConnect = require("./config/dbConnect");

dbConnect();

const app = express()

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//Port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
