import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ChatGroq } from "@langchain/groq";
import { HumanMessage, AIMessage } from "langchain"
import { createInterface } from "readline/promises";
import { stdout } from "process";

const app = express();

const messages = [];

const growLLM = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "qwen/qwen3.8-27b",
});

const readLine = new createInterface({
  input: process.stdin,
  output: stdout,
});

const groqLLM = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "qwen/qwen3.8-27b",
});

while (true) {
    // –––––––––––––––– take user input –––––––––––––––––––
    const prompt = await readLine.question("Enter your prompt: ")


    messages.push(new HumanMessage(prompt))

    // –––––––––––––––– send user input to model and get stream –––––––––––––––––––
    const stream = await groqLLM.stream(messages)

    let aiMessage = ""
    // –––––––––––––––– read and display the stream –––––––––––––––––––
    for await (const chunk of stream) {
        process.stdout.write(chunk.text)
        aiMessage += chunk.text
    }
    process.stdout.write("\n")

    messages.push(new AIMessage(aiMessage))
}

// const stream=await growLLM.stream([
//     {
//         role:"user",
//         content:"Write essay on js"
//     }
// ])

// for await(const chunk of stream){
//     process.stdout.write(chunk.text)
// }

export default app;
