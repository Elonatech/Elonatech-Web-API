const mongoose = require('mongoose');

// Connect Database
const connectDB = async () =>{
await mongoose.connect('mongodb://localhost:27017'); 
console.log(`MONGODB CONNECTED`)

}
module.exports = { connectDB }