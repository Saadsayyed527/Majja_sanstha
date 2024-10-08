import { Router } from "express";
import { createUser } from "../controllers/users.js";

const router = Router();

router.get("/",(req,res)=>{
    res.send("Test");
})

// ==== New User Signing Up ====

router.post("/signup", createUser);

export default router;