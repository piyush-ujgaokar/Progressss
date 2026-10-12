import {checkGroqApiKeyExists,saveGroqApiKeyToSettingsFile} from "./utils/key.utils.js"
import readline from "readline/promises"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




export async function main(args){
    
    if(!await checkGroqApiKeyExists()){

        console.log("GROQ API Key not found in settings.json. Please enter your GROQ API Key.")
        
        const apiKey= await rl.question("Please enter your GROQ API Key: ")

        await saveGroqApiKeyToSettingsFile(apiKey)
        
    
}

}