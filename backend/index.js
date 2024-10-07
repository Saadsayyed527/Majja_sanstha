import express from "express";
import userRouter from "./routes/users.js";
import dotenv from "dotenv";

dotenv.config();

// require('dotenv').config(); //Need this for Environment Variables


const app = express();
const PORT = process.env.PORT | 3000;

app.use("/api/user",userRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})