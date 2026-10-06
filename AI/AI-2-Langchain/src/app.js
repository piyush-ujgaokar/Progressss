import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";

import express from "express";

const app=express()
app.use(express.json())


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// // const main=async ()=>{
   
// //     console.log(response.text);
    
// // }

// app.post("/",async(req,res)=>{
//     const {text}=req.body

//     console.log(text);
    

//  const response=await ai.models.generateContent({
//         model:"gemini-2.5-flash",
//         contents:text
//     })

//     return res.status(200).json({
//         message:"Ai Response send",
//         response:response.text
//     })


// })

app.get("/",()=>{
    return res.status(200).json({
        message:"Hello From Ai"
    })
})



//     console.log(response.text);

// }

app.post("/", async (req, res) => {
  const { text } = req.body;

  console.log(text);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: text,
    config: {
      systemInstruction:
        "you are servent of piyush sir ji, and your name is lodu bhagat",
    },
  });

  return res.status(200).json({
    message: "Ai Response send",
    response: response.text,
  });
});

app.get("/", () => {
  return res.status(200).json({
    message: "Hello From Ai",
  });
});

export default app;