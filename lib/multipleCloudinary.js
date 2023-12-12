const cloudinary = require("cloudinary");
const { cloud_name, api_key, api_secret } = require("../config/key");

cloudinary.config({ 
    cloud_name: cloud_name, 
    api_key: api_key, 
    api_secret: api_secret,
    secure: true
  });

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
}); 

const uploads = (file, folder) =>{
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) =>{
            resolve({
                url: result.url, 
                id: result.public_id
            }, {
                resource_type: "auto", 
                folder: folder,
            }
            )
        })
    })
}

module.exports = { uploads }

