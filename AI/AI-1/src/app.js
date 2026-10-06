import dotenv from "dotenv"
dotenv.config()
import { GoogleGenAI } from "@google/genai"

import express from "express"


const app=express()

const ai=new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})

const main=async ()=>{
    const response=await ai.models.generateContent({
    model:"gemini-2.5-flash",
    contents:"Explain 5 features of express js"
})
console.log(response.text);

}

main()

app.get("/",()=>{
    return res.status(200).json({
        message:"Hello From Ai"
    })
})





export default app