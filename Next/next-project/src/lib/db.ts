import {connect} from 'mongoose'
import dotenv from "dotenv"
dotenv.config()


const mongodbUrl=process.env.MONGO_URI

if(!mongodbUrl) throw new Error("Mongo uri Is Missing")

  let cached=global.mongoose

  if(!cached){
    cached=global.mongoose={conn:null,promise:null}
  }

export const connectToDb=async()=>{
    if(cached.conn){
        console.log("Cached DataBase connected Successfully");
        
        return cached.conn
    }

    if(!cached.promise){
       cached.promise=connect(mongodbUrl).then((c)=>c.connection)
    }

    try {
        
       cached.conn=await cached.promise
        console.log("DataBase connected Successfully");


    } catch (error) {
        throw error
    }

    return cached.conn
}