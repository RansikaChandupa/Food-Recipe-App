const express = require("express")
const app = express()
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 5000;

app.get("/",(req, res)=>{
    // console.log("suceess or fail")
    res.json({message:"Hello"})
})
app.listen(PORT, (err)=>{
    console.log(`App is listening on ${PORT}`);
})