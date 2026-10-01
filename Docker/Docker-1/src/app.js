import express from "express"

const app=express()


app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Hello From Docker"
    })
})
app.get("/healthy",(req,res)=>{
    return res.status(200).json({
        message:"Server is healthy"
    })
})


export default app