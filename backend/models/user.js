import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the user's Full Name"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Please provide the user's email"]
    },
    password: {
        type: String,
        required: [true, "Please provide the password"]
    },
});

const User = mongoose.model('User', UserSchema);

export default User;