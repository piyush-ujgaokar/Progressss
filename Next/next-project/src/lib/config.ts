import dotenv from "dotenv"
dotenv.config()


const requiredKey=async (key:string)=>{
    const value=process.env[key]

    if(!value){
        throw new Error("Environment key missing")
    }
  
    return value
}

 const config={
    MONGO_URI:await requiredKey("MONGO_URI"),
    JWT_SECRET:await requiredKey("JWT_SECRET")
}

export default Object.freeze(config)