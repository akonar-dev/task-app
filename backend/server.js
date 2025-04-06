const express = require("express");
const app = express();
require('dotenv').config();
const connectToDB = require("./dbConfig/dbConnect")
const taskRouters = require("./routes/taskRoutes")

app.use(express.json())
const PORT = process.env.PORT|| 8001

connectToDB();

app.get("/",(req,res)=>{
    res.json({message: "Home route"})
})

app.use("/api/task", taskRouters)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})