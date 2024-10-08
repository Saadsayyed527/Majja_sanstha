import express from "express";
import userRouter from "./routes/users.js";
import dotenv from "dotenv";
import connectDb from "./dbConnection.js";

dotenv.config(); //Need this for Environment Variables
const app = express();

app.use(express.json()); //Note: For some reason not working for simple JSON body.
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;

//Connecting to mongodb database
const dbUrl = 'mongodb://localhost:27017/majja_sanstha_mvp'; //Temporarily using local database.
connectDb(dbUrl);

app.use("/api/user",userRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})