
import config from "./src/config/config.js"
import app from "./src/app.js"
import { connectToDb } from "./src/config/db.js";


await connectToDb()

app.listen(3000,()=>{
    console.log(`Server is running on port ${config.PORT}`);
})