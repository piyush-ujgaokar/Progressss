import mongoose from "mongoose";
import config from "./config";
import { cache } from "react";

let cached = global.mongoose;
const connectToDb = async () => {

       if (!cached) {
      cached = global.mongoose = { conn: null, promise: null };
    }

    return cached.conn;

  try {
 
    cached.conn = await cached.promise;
  } catch (err) {
    console.log("Error while connecting DB",err);
  }

  return cached.conn
};

export default connectToDb;
