import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB(); 


















/*
;(async()=>{
    try {
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB}`)

         app.listen(process.env.PORT,()=>{
            console.lof(`application is listening on port ${process.env.PORT}`)
         })
    } catch (error) {
        console.log("ERROR : ", error)
        throw error;
    }
})()
    */