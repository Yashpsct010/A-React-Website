const mongoose = require("mongoose")
require('dotenv').config();
const URI = process.env.MONGO_CONNECTION;

const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("mongodb connected successfully!")
    } catch (error) {
        console.error("mongodb failed to connect!")
        process.exit(0);
    }
}
module.exports = connectDb;