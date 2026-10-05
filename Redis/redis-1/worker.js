import { Worker } from "bullmq";
import Redis from "ioredis";
import { sendEmail } from "./src/config/sendEmail.js";

const connection = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

const worker = new Worker(
  "emailQueue",
  async (job) => {
    console.log("Job Started");

    const email = job.data.email;
    await sendEmail(email);

    console.log("Job compeleted");
  },
  { connection }
);
