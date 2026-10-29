import {Redis} from "ioredis";
import config from "./config.js";

const redis=new Redis(config.redisUrl);

redis.on("connect",()=>{
    console.log("Redis connected successfully");
})

export default redis;