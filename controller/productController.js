const Product = require('../models/productModel');
const cloudinary = require('../lib/cloudinary');

const createProduct =  async (req , res) =>{
    let result;
    if (req.file) {
      result =  await cloudinary.uploader.upload(req.file.path);
    } else {
        return res.send('cloudinary path is undefined')
    }
    
    const newProduct = await Product.create({
                   title: req.body.title,
                   description: req.body.description,
                   author: req.body.author,
                   category: req.body.category,
                   cloudinary_id: result.secure_url,
    });
    return res.status(201).json({ newProduct });
}

const  getAllProducts = (req , res) =>{

}

const getProductById = (req , res) =>{

}

const deleteProduct = (req , res) =>{

}


module.exports = { createProduct, getAllProducts, getProductById, deleteProduct }
