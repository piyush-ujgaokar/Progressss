import { Router } from "express";
import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import config from "../config/config.js";

const router=Router()

router.post('/register',async(req,res)=>{
    const {email,name,password}=req.body


    const user=await UserModel.create({
        email,name,password
    })

    const token=jwt.sign({id:user._id},config.JWT_SECRET)

    res.status(201).json({
        message:"User Registered Successfully",
        user:{
            name:user.name,
            email:user.email
        },
        token:token
    })

})

router.get('/me',async (req,res)=>{
    const token=req.headers.authorization

    const verifiedToken= jwt.verify(token,config.JWT_SECRET)
    console.log(verifiedToken);
    
    const user=await UserModel.findById(verifiedToken.id)

    res.status(200).json({
        message:"User fetched Successfully",
        data:{
            user:{
                email:user.email,
                name:user.name
            }
        }
    })


})


export default router