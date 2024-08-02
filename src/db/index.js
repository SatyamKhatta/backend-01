import mongoose from "mongoose";
import { DB } from "../constants.js";
import express from "express"

const app =express()
const connectDB = async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB}`)

       app.listen(process.env.PORT,()=>{
        console.log(`application is listening on port ${process.env.PORT}`)
     })

        console.log(`\n MONGODB connected !! DB host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongoDB connection error : ", error)

        // Exit code 1 usually indicates that the process has exited due to an error. It signals that something went wrong during the execution of the process.
 
        process.exit(1)

        
    }
}

export default connectDB