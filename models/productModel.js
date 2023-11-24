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

   file:{
    type:String,
    required:true
   },

   category:{
    type:String,
    required:true
   },

   createAt:{
    type: Date,
    default: Date.now()
   }
    
});

const Product = new mongoose.model('Auth', productSchema);

module.exports = Product;