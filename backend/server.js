const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDb = require("./config/connectionDb")

const PORT = process.env.PORT || 5000
connectDb()

app.use(express.json());
app.use("/recipe", require("./routers/recipe"))
app.listen(PORT, (err)=>{
    if (err) console.error(err);
    console.log(`App is listening on ${PORT}`);
})