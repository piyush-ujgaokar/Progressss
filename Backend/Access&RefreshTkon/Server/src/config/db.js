import mongoose from "mongoose";
import config from './config.js'



export const connectToDb=async()=>{
    try {

        await mongoose.connect(config.MONGO_URI)
        console.log("DataBase connected Succesfully");
        

    } catch (error) {
        console.log("Error while connecting Db:-",error);
        
    }
}