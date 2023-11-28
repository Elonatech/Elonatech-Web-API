require('dotenv').config();


const config = {
    PORT: process.env.PORT,
    mongourl:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
}

module.exports = config;