import mongoose from "mongoose";

export default async function connectDb(mongoUrl){
    try {
        const connection = await mongoose.connect(mongoUrl);
        console.log("Mongodb database connected successfully.");
        return connection;
    } catch (error) {
        console.error(error);
        return error;
    }
}
