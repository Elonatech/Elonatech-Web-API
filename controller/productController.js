const Product = require('../models/productModel');
const cloudinary = require('../lib/cloudinary');


// Create Product
const createProduct =  async (req , res) =>{
    let result;
    if (req.file) {
      result =  await cloudinary.uploader.upload(req.file.path);
    } else {
        return res.send('cloudinary path is undefined')
    }
    
    const newProduct = await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            cloudinary_id: result.secure_url,
    });
    return res.status(201).json({ newProduct });
}

// Get All Products
const  getAllProducts = async (req , res) =>{
    const getAllProducts = await Product.find()
    if(!getAllProducts){
       return res.status(400).send('Bad request')
    }
    return res.status(200).json({ getAllProducts })
}

const getProductById = async (req , res) =>{
     // Find Blog by Id
     const getId = await  Product.findById(req.params.id)
     if(!getId){
        return res.status(404).send({message:'Product Not Found'})
     } 
     const getProductById = await Product.findById(getId);
     return res.status(200).json({ getProductById })
}

const deleteProduct = async (req , res) =>{
    // Find Blog by Id
    const product  = await Product.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id);
   // Delete user from db
   await product.deleteOne();
   return res.status(200).json({message: "Blog Successfully Deleted" , product})
}


module.exports = { createProduct, getAllProducts, getProductById, deleteProduct }
