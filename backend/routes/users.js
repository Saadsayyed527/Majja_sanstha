import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("Test");
})

// ==== New User Signing Up ====
router.get("/signup",(req,res)=>{
    res.send("Hi")
})

export default router;