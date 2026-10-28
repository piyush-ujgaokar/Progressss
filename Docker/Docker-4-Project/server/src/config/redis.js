import {Redis} from "ioredis";

const redis=new Redis(config.redisUrl);

redis.on("connect",()=>{
    console.log("Redis connected successfully");
})

export default redis;