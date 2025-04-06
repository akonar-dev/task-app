const mongoose = require("mongoose")



const dbConnect = async ()=>{
    try{
        const db = await mongoose.connect(process.env.DB_URI)
        console.log("Database connected",db.connect);
    }
    catch(err) {
        console.log(err,"error text")
    }
}

module.exports = dbConnect