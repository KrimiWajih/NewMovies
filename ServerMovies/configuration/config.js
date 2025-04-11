const mongoose = require("mongoose");

require('dotenv').config()
exports.config = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Database Movies_DB")
    } catch (error) {
        console.log("Failed to Connect to Database")
    } 
}