require('dotenv').config()
const express = require("express")
const app = express()

app.get("/api/", (req,res) => {
    console.log("Hello World!!");
})

app.listen(process.env.PORT, (req,res) => {
    console.log("Sever started at ", process.env.PORT);
    
})