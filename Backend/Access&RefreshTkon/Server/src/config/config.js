import dotenv from 'dotenv'
dotenv.config()

const requiredValue=(key)=>{
    const value=process.env[key]

    if(!value){
        throw new Error(`Missing Required Environment Variable:-${key}`)
    }

    return value
}


const config={
    MONGO_URI:requiredValue("MONGO_URI"),
    PORT: requiredValue("PORT")
}


export default Object.freeze(config)