import express from "express"
import userModel from "./models/user.model.js"
import Redis from "ioredis"



const app=express()
app.use(express.json())

const redis=new Redis(process.env.REDIS_URL)


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


export default app