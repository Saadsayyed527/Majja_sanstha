// import mongoose from "mongoose";
import User from "../../models/user.js";

const userExists = async (email) => {
    //Check if user exists in database

    const user = await User.findOne({email})

    console.log(user);

    if(user){
        return true
    } else {
        return false
    }
}

export { userExists }