import express from "express"

const app=express()


app.get("/",(req,res)=>{
    return res.send("Hello from app")
})


app.get("/health",(req,res)=>{
    return res.send("Hello from health")
})




const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
