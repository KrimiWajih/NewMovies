const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
exports.config = async () => {
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log("Connected to Database Movies_DB")
    } catch (error) {
        console.log("Failed to Connect to Database")
    } 
}