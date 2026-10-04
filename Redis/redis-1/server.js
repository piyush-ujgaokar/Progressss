import dotenv from "dotenv"
dotenv.config()

import app from "./src/app.js";
import { connectToDb } from "./src/config/db.js";


await connectToDb()

const PORT=process.env.PORT || 5000




app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
})