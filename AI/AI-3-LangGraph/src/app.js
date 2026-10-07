import dotenv from "dotenv";
dotenv.config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import express from "express";

const app = express();
app.use(express.json());

const googleLLM = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash-lite",
  temperature: 2,
  maxRetries: 0,
});

app.post("/", async (req, res) => {
  const { text } = req.body;

  console.log(text);

  const response = await googleLLM.invoke([
    ["system", "your name is jarvis lodu"],
    ["human", text]
  ]);

  return res.status(200).json({
    message: "Ai Response send",
    ai: response.content,
  });
});

app.get("/", () => {
  return res.status(200).json({
    message: "Hello From Ai",
  });
});

export default app;
