import express from "express";
import User from "../models/userModel.js";
const userRouter = express.Router();
userRouter.get("/", (req, res)=>{
    res.send("User route");
})
userRouter.post("/register",async (req, res)=>{
    console.log('req.body', req.body)
    const user =new User({
        name:req.body.name,
        email:req.body.email,
    });
    await user.save();
    res.send("user registred");
})
export default userRouter;