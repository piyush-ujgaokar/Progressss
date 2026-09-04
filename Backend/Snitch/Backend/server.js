import app from './src/app.js'
import { connectToDb } from './src/config/db.js';


await connectToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})
