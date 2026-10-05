import {Worker} from "bullmq"
import { sendEmail } from "./src/config/sendEmail.js"
import Redis from "ioredis";


const connection=new Redis("redis://localhost:6379",{
    maxRetriesPerRequest:null
})


const worker=new Worker("emailQueue",async(job)=>{

    console.log("Job Started");
    
    const email=job.data.email
    console.log( "job data->",job.data);
    
    await sendEmail(email)

    console.log("Job Completed");
    
},{connection})