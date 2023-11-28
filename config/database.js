const mongoose = require('mongoose');
const { mongourl } = require('./key')

// Connect Database
const connectDB = async () =>{
await mongoose.connect(mongourl); 
console.log(`MONGODB CONNECTED`)

}
module.exports = { connectDB }