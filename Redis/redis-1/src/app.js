import express from "express"
import userModel from "./models/user.model.js"
import Redis from "ioredis"
import { rateLimiter } from "./middleware/rateLimit.js"
import { sendEmail } from "./config/sendEmail.js"
import { emailQueue } from "../queue.js"



const app=express()
app.use(express.json())

export const redis=new Redis(process.env.REDIS_URL)


app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Hello From redis"
    })
})


app.post("/create",async (req,res)=>{

    const {name,email,password}=req.body

    await redis.del("user:all")

    const user=await userModel.create({
        name,email,password
    })

    await emailQueue.add("send-email",{email})

    res.status(201).json({
        message:"User created Successfully",
        user:{
            name:name,
            email:email
        }
    })
})

app.get("/get",rateLimiter,async(req,res)=>{
    const user=await userModel.find()

    return res.status(200).json({
        message:"All user fetched Successfully",
        user:user
    })
})


app.get("/redis-get",async(req,res)=>{

    const cached=await redis.get("user:all")

    if(cached){
      return res.status(200).json({
      message:"All user fetched Successfully From Redisssss",
      user:JSON.parse(cached)
  })}

    const user=await userModel.find()


    await redis.set("user:all",JSON.stringify(user))


      return res.status(200).json({
        message:"All user fetched Successfully from MongoDbbbbbbbbb",
        user:user
    })
})

app.post("/send-otp",async(req,res)=>{
    const {email}=req.body

    const otp=Math.floor(100000+Math.random()*90000).toString()
    await redis.set(`otp:${email}`,otp,"EX",30)

    return res.status(201).json({
        message:"Otp Send Successfully",
        otp:otp
    })


})

app.get("/verify-otp",async(req,res)=>{

    const {email,otp}=req.body

    const cachedotp=await redis.get(`otp:${email}`)

      if(!cachedotp){
        return res.status(404).json({
            message:"Otp not found or Expire"
        })
    }

    if(cachedotp !== otp){
        return res.status(400).json({
            message:"Incorrect Otp"
        })
    }

    await redis.del(`otp:${email}`)

     return res.status(200).json({
        message:"Otp verified Successfully",
        otp:cachedotp
    })





})

export default app