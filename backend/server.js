const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectToDB = require("./dbConfig/dbConnect")
const taskRouters = require("./routes/taskRoutes")

app.use(express.json())
app.use(cors())
const PORT = process.env.PORT|| 8001

connectToDB();

app.get("/",(req,res)=>{
    res.json({message: "Home route"})
})

app.use("/api/task", taskRouters)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})