import dotenv from "dotenv"
dotenv.config()
import app from "./src/app.js";
import { connectToDb } from "./src/config/db.js";


await connectToDb()

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is runnign on port ${PORT}`);
    
})