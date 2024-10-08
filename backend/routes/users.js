import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("huu");
})

// ==== New User Signing Up ====
router.get("/signup",(req,res)=>{
    res.send("Hi  okay")
})

export default router;