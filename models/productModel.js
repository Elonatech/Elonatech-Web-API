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
      type: String,
      required:true
     },
     category:{
     type:String,
     required:true
     },
  
     cloudinary_id:{
      type:Array,
      required:true
     },
  
     createAt:{
      type: Date,
      default: Date.now()
     }

},{timestamps:true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product

