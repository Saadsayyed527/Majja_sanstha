import User from "../models/user.js";
import { userExists } from "../utils/db/checkUserExists.js";

async function createUser(req,res){
    // Expect correctly formated JSON with given fields from client.
    
    console.log("Got req");
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    console.log(name, email, password);
    
    // First, checking if user with given details already exists.

    if(await userExists(email))
    {
        console.log("User already exists");
        res.send("Already exists");
    } else {
        const user = new User({
            name,
            email,
            password
        });
    
        try {
            await user.save();
            console.log(user);
            res.status(201).json({ 'message': 'User created successfully' });
        } catch(err) {
            console.log(err);
            res.status(400).json({"error":"Database error"});
        }
    }
}

export {createUser}