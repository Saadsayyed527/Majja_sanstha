const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin","judge","participant_individual","participant_group_manager"] //4 Types of Users
    }
})

module.exports = mongoose.model("User",userSchema);