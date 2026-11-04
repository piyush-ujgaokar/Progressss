import express from "express"

const app=express()
app.use(express.json())

app.get("/health",(req,res)=>{
    res.status(200).json({
        message:"Server is Healthy"
    })
})


app.get("/api/v1",(req,res)=>{
    res.status(200).json({
        message:"This is an API ==>api/V1"
    })
})

export default app