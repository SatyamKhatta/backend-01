import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("mongo db error !!")
})


















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