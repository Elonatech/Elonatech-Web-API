const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   name:{
      type:String,
      required:true
     },
  
     description:{
      type:String,
      required:true
     },
  
     price:{
      type: Number,
      required:true
     },
     category:{
     type:String,
     required:true
     },
  
     cloudinary_id:{
      type:String,
      required:true
     },
  
     createAt:{
      type: Date,
      default: Date.now()
     }

},{timestamps:true});

const Product = mongoose.model('Blog', productSchema);

module.exports = Product
