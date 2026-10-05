// import dotenv from "dotenv"
// dotenv.config()
// import {Worker} from "bullmq"
// import { sendEmail } from "./src/config/sendEmail.js"
// import Redis from "ioredis";


// const connection=new Redis(process.env.REDIS_URL,{
//     maxRetriesPerRequest:null
// })


// const worker=new Worker("emailQueue",async(job)=>{

//     console.log("Job Started");
    
//     const email=job.data.email
//     console.log( "job data->",job.data);
    
//     await sendEmail(email)

//     console.log("Job Completed");
    
// },{connection})