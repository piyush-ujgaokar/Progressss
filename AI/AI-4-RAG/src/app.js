import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { ChatGroq } from "@langchain/groq";
import fs from "fs";
import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { QdrantVectorStore } from "@langchain/qdrant";

const app = express();
app.use(express.json());

const groqLLM = new ChatGroq({
  model: "openai/gpt-oss-120b",
  temperature: 0.4,
  maxRetries: 2,
});

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "gemini-embedding-001",
  taskType: TaskType.RETRIEVAL_DOCUMENT,
  title: "Document Title",
});

const vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
  url: process.env.QDRANT_URL,
  collectionName: "embeddings-test-1",
});

const upload = async () => {
  const pdfPath = "./Knowledge_For_RAG.pdf";
  const buffer = fs.readFileSync(pdfPath);

  const pdfResult = new PDFParse({ data: buffer });
  const result = await pdfResult.getText();
  const text = result.text;

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 0,
  });
  const docs = await splitter.createDocuments([text]);

  await vectorStore.addDocuments(docs);

  // console.log("Vectore embeddings:- ",vectorEmbeddings);

  // console.log("text data:-",text);
  // console.log("Docs data:-",docs);
};
// upload()

app.post("/", async (req, res) => {
  const { text } = req.body;

  const docs = await vectorStore.similaritySearch(text, 3);

  const context = docs.map((d) => d.pageContent).join("\n");

  console.log(context);

  const response = await groqLLM.invoke([
    [
      "system",
      `You are a RAG Ai Assistent whoes name is Lwda Pav 
                            STRICT RULES:- 
                                -Answer only from context
                                -do not use outside Knowledge
                                -If you Dont Find Answer say:"This Que Is not present In Uploaded PDF"
                            Context:${context}`,
    ],
    ["human", text],
  ]);

  return res.status(200).json({
    message: "Graoq Send message Successfully",
    AiMsg: response.content,
  });
});

app.get("/health", (req, res) => {
  return res.status(200).json({
    message: "Server is healthy",
  });
});

export default app;
