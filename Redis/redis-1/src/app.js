import express from "express"
import userModel from "./models/user.model.js"



const app=express()
app.use(express.json())



app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Hello From redis"
    })
})


app.post("/create",async (req,res)=>{

    const {name,email,password}=req.body

    const user=await userModel.create({
        name,email,password
    })

    res.status(201).json({
        message:"User created Successfully",
        user:{
            name:name,
            email:email
        }
    })
})

app.get("/get",async(req,res)=>{
    const user=await userModel.find()

    return res.status(200).json({
        message:"All user fetched Successfully",
        user:user
    })
})



export default app