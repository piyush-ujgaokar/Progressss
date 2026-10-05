import express from "express"
import proxy from "express-http-proxy"




const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Hello From Gateway Service"
    })
})

app.use("/auth",proxy("http://localhost:3001"))
app.use("/order",proxy("http://localhost:3002"))
app.use("/product",proxy("http://localhost:3003"))


export default app