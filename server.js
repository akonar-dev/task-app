const express = require("express");
const app = express();
require('dotenv').config();
const connectToDB = require("./dbConfig/dbConnect")

app.use(express.json())
const PORT = process.env.PORT|| 5001

connectToDB();

app.get("/",(req,res)=>{
    res.json({message: "Home route"})
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})