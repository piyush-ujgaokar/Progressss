import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { ChatGroq } from "@langchain/groq"
import {createInterface} from "readline/promises"
import { create } from "domain"



const app=express()

const growLLM=new ChatGroq({
    apiKey:process.env.GROQ_API_KEY,
    model:"qwen/qwen3.8-27b"
})


const readLine=createInterface({
    input:process.stdin,
    output:process.stdout
})

while(true){
    const prompt=await readLine.question("enter your prompt: ") //taking prompt from user from cli
    console.log(prompt);
    
}


// const stream=await growLLM.stream([
//     {
//         role:"user",
//         content:"Write essay on js"
//     }
// ])

// for await(const chunk of stream){
//     process.stdout.write(chunk.content)
// }


export default app