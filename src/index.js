// require('dotenv').config({path : './env'})

//...........this is the first method to import  the dotenv file in our index.js file
//...dot env files basically provided the envirment variables from everywhere after loading the databse files...

/*......but this syntex we did not use....beacause here i am use ES6javascript files so that why we will use import syntex
 to load the dot env files....

*/

import dotenv from "dotenv"; 

import connectDB from "./db/db.js";  

dotenv.config({ path: './env'})

connectDB();




































/*
import express from "express";
const app = express();

( async() =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error", ()=>{
            console.log("Error", error);
            throw error;
        });

        app.listen(process.env.PORT, () =>{
            console.log(`App is listing on ${PORT}`);
        });

    } catch(error){
        console.log("Error: ", error);
        throw error;
    }

})();

*/

