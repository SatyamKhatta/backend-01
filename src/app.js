import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true //This option allows the server to accept requests that include credentials such as cookies, authorization headers
}))

app.use(express.json({
    limit: "16kb"
})) 

// this will used 
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"  // If the request body exceeds this limit, the middleware will throw an error.
}))

app.use(express.static("public"))

app.use(cookieParser())
 
export {app}