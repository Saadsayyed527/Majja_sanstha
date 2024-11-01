const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const registerController = async (req,res)=>{
    const {username, password, role} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new User({
            username,
            password: hashedPassword,
            role
        })
        
        await newUser.save();
        return res.status(200).json({ success: true,"message":"User successfully registered."})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,"message":"Database failed to create user"})
    }
}

const loginController = async (req,res)=>{
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});

        if(!user){
            return res.status(404).json({success: false,"message":"User does not exist"})
        }

        const role = user.role;

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ success: true,"message":"Invalid password for the given user."})
        }

        const token = jwt.sign({
            id:user._id, 
            role:user.role}, // Role is used in Role Auth Middleware (req.user.role)
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ success: true,"message":"User Successfully verified with correct username and password.", token})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,"message":"server error"})
    }

}

const userDisplayController = async(req,res)=>{
    try {
        const users = await User.find({});

        if(users.length==0){
            return res.status(404).json({success: false,"message":"No users"})
        }

        return res.status(200).json({ success: true,"data":users});
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({success: false,"message":"server error"})
    }
}

module.exports = {registerController,loginController,userDisplayController};