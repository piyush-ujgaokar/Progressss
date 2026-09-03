import express from 'express'
import morgan from 'morgan'
import authRouter from './router/auth.routes.js'

const app=express()

app.use(express.json())
app.use(morgan("dev"))

app.use('/api/auth',authRouter)


app.get('/api/health',(req,res)=>{
    res.status(200).json({
        status:"OK",
        message:"Server is healthy"
    })
})


export default app