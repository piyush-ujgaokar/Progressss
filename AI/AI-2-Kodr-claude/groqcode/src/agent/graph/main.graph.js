import { StateGraph } from "@langchain/langgraph";
import { ChatGroq } from "@langchain/groq";
import * as z from "zod";



const readHtmlFile = tool(
  async ()=>{
    return "<html></html>"
  },
  {
    name:"readHtmlFile",
    description:"reads the html file",
    schema:z.object({})
  }
)

export const createGraph = (apiKey) => {
  const groqLLM = new ChatGroq({
    apiKey,
    model: "openai/gpt-oss-120b",
  });

  const modelWithTool=model.ChatGroq.bindTools([readHtmlFile])

  const llmNode = async (state) => {
    const messages = state.messages;
    const response = await groqLLM.invoke(messages);

    return { messages: [...messages, response] };
  }

  const toolNode = async (state) => {
    const lastMessage = state.messages[state.messages.length - 1];
    const toolCalls = lastMessage.tool_calls

    toolCalls.

  }


  return new StateGraph(
    z.object({
      messages: z.array(z.any()),
      count: z.number(),
    }),
  )
    .addNode("LLM", llmNode)
    .addEdge("__start__", "LLM")
    .addEdge("LLM", "__end__")
    .compile();
};
