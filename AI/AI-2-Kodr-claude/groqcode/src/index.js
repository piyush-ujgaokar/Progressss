import {
  checkGroqApiKeyExists,
  getGroqApiKeyFromSettingsFile,
  saveGroqApiKeyToSettingsFile,
} from "./utils/key.utils.js";
import readline from "readline/promises";
import { createGraph } from "./agent/graph/main.graph.js";
import { HumanMessage } from "langchain";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function main(args) {
  if (!(await checkGroqApiKeyExists())) {
    console.log(
      "GROQ API Key not found in settings.json. Please enter your GROQ API Key.",
    );

    const apiKey = await rl.question("Please enter your GROQ API Key: ");

    await saveGroqApiKeyToSettingsFile(apiKey);
  }

  const apiKey = await getGroqApiKeyFromSettingsFile();
  const graph = createGraph(apiKey);
  const prompt = await rl.question("Please enter your prompt: ");
  const response = await graph.invoke({
    messages: [new HumanMessage(prompt)],
    count: 1,
  });

  console.log(response);
}
