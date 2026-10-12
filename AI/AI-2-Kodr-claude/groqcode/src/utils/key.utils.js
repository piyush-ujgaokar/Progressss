
import fs from "fs/promises"
import axios from "axios"
import {CONFIG_DIR} from "./constant.js"


//check the settings.json file exists in the root directory
export const checkSettingsFileExists = async () => {
    const configPath=`${CONFIG_DIR}/settings.json`
    console.log(CONFIG_DIR)
    try {
        await fs.access(configPath);
        return true;
    }

    catch (err) {
        return false;
    }
}



//check if the groq API_KEY exists in settings.json

export const checkGroqApiKeyExists = async () => {
    if(!(await checkSettingsFileExists())){
        return false
    }
    const settingFilePath=`${CONFIG_DIR}/settings.json`
    const settingsContent=await fs.readFile(settingFilePath,"utf-8")
    try{
        const settings=JSON.parse(settingsContent)
        const apiKey=settings.GROQ_API_KEY
        if(!apiKey)
            return false

        const response=await axios.get("https://api.groq.com/openai/v1/models",{
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        })

        if(response.status===200){
            return true
        }
        
    }catch(err){
        return false;
    }
}

//save the GROQ API key to setting.json

export const saveGroqApiKeyToSettingsFile = async (apiKey) => {

    //check the congig directory exists

    try{
        await fs.access(CONFIG_DIR)
    }catch(err){
        await fs.mkdir(CONFIG_DIR,{recursive:true})
    }


    const settingFilePath=`${CONFIG_DIR}/settings.json`
    let settings={}
    if(await checkSettingsFileExists()){
        const settingsContent=await fs.readFile(settingFilePath,"utf-8")
        settings=JSON.parse(settingsContent)
    }

    settings.GROQ_API_KEY=apiKey
    await fs.writeFile(settingFilePath,JSON.stringify(settings,null,2),"utf-8")

}


//get the GROQ API key from settings.json

export const getGroqApiKeyFromSettingsFile = async () => {
    if(!(await checkSettingsFileExists())){
        throw new Error("settings.json file does not exist")
    }

    if(!(await checkGroqApiKeyExists())){
        throw new Error("GROQ API Key does not exist in settings.json")
    }

    const settingFilePath=`${CONFIG_DIR}/settings.json`
    const settingsContent=await fs.readFile(settingFilePath,"utf-8")
    const settings=JSON.parse(settingsContent)
    return settings.GROQ_API_KEY

}