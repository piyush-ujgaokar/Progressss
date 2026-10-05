import dotenv from "dotenv";
dotenv.config()
import app from "./src/app.js";


const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Gateway Server is running on port ${PORT}`);
})