import dotenv from "dotenv";
dotenv.config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { Annotation, MessagesAnnotation, StateGraph } from "@langchain/langgraph"
import { ToolNode } from "@langchain/langgraph/prebuilt";
import {TavilySearch} from "@langchain/tavily"


import express from "express";

const app = express();
app.use(express.json());

const tool=new TavilySearch({
  maxResults:5,
  topic:"general"
})

const tools=[tool]
const toolNode=new ToolNode(tools)

const googleLLM = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash-lite",
  temperature: 0.2,
  maxRetries: 0,
}).bindTools(tools)




const State=Annotation.Root({
  prompt:Annotation,
  aiMsg:Annotation
})



const callLLM=async(state)=>{

  console.log("state:- ",state);

  const response=await googleLLM.invoke([
    ["system", "Your name is Lodu bhagat"],
    ...state.messages
  ])

  return {messages:[response]}
}



const shouldContinue=async(state)=>{
  const lastMessage=state.messages[state.messages.length-1]
  if(lastMessage.tool_calls.length > 0){
    return "tools"
  }else{
    return "__end__"
  }
}

const graph=new StateGraph(MessagesAnnotation)
.addNode("agent",callLLM)
.addNode("tools",toolNode)
.addEdge("__start__","agent")
.addEdge("tools","agent")
.addConditionalEdges("agent",shouldContinue)
.addEdge("agent","__end__")
.compile()



app.post("/", async (req, res) => {
  const { text } = req.body;

  const response=await graph.invoke({
    messages:[
      {
        role:"user",
        content:text
      }
    ]
  })

  console.log("Response:--",response);
  
 
  return res.status(200).json({
    message: "Ai Response send",
    ai: response.messages[response.messages.length-1].content,
  });
});

app.get("/", () => {
  return res.status(200).json({
    message: "Hello From Ai",
  });
});

export default app;
