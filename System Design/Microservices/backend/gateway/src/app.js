import express from "express"
import proxy from "express-http-proxy"




const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:`Hello From Gateway Server ${process.env.SERVER_NAME}`
    })
})

app.use("/auth",proxy("http://auth-service:3001"))
app.use("/order",proxy("http://order-service:3002"))
app.use("/product",proxy("http://product-service:3003"))


export default app