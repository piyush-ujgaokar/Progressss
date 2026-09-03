import mongoose from 'mongoose'
import config from './config.js';


export async function connectToDb(){
    try {

        await mongoose.connect(config.MONGO_URI)
        console.log("Database connected successfully");
        

    } catch (error) {
        console.log("error in db",error);
        
    }
}