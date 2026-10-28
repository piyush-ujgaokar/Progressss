import mongoose from "mongoose";
import config from "config";

const connecttoDb=async()=>{
    try {
        await mongoose.connect(config.get("dbConfig"));
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to database",error);
    }
}

export default connecttoDb;