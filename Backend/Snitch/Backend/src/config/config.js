import dotenv from "dotenv";
dotenv.config()


function requireVariable(name){
    if(!name){
        throw new Error(`Environment variable ${name} is required`)
    }

    return process.env[name]
}

const config={
    MONGO_URI:requireVariable('MONGO_URI'),
    JWT_SECRET:requireVariable('JWT_SECRET'),
    IMAGEKIT_PRIVATE_KEY:requireVariable('IMAGEIT_PRIVATE_KEY'),
    IMAGEIT_PUBLIC_KEY:requireVariable('IMAGEIT_PUBLIC_KEY')
}

export default config