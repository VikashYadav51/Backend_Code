import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

import express from "express";
const app = express();

const connectDB = async () => {
    try{
       const connectionIstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
       console.log(`\n, MongoDB is connected at host ${connectionIstance.connection.host}`);

    } catch(error){
        console.log("MongoDb connection Error : ", error);
        process.exit(1);
    }
}


export default connectDB;


