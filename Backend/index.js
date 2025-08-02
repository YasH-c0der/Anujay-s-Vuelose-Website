import cookieParser from "cookie-parser"
import cors from "cors"


require('dotenv').config()
const express = require("express")
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.get("/api/", (req,res) => {
    console.log("Hello World!!");
})

app.listen(process.env.PORT, (req,res) => {
    console.log("Sever started at ", process.env.PORT);
    
})