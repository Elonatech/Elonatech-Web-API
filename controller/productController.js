const Product = require('../models/productModel');
const cloudinary = require('../lib/multipleCloudinary');
const fs = require('fs');

// series, model, weight, dimension, item, color, hardware, os, processor, number, memory, ram, drive, display, resolution, graphics, voltage, battery, wireless

// Create Product
const createProduct =  async (req , res) =>{ 
        const { name, description, price, brand, category } = req.body

        const uploader = async (path) => await cloudinary.uploads(path, "Images")
        try {
                const urls = []
                if (req.files) {
                    const files = req.files;
                    for (const file of files) {
                        const { path } = file;
                        const newPath = await uploader(path)
                        urls.push(newPath)
                        fs.unlinkSync(path)
                    }
                }
                
                //creating the product
                const product = await Product.create({
                    name: name,
                    description: description,
                    price: price,
                    brand:brand,
                    category: category,
                    // computerProperty:{
                    //  series: series,
                    //  model: model,
                    //  weight: weight,
                    //  dimension: dimension,
                    //  item: item,
                    //  color: color,
                    //  hardware: hardware,
                    //  os: os,
                    //  processor:processor,
                    //  number: number,
                    //  memory: memory,
                    //  ram: ram,
                    //  drive: drive,
                    //  display: display,
                    //  resolution: resolution,
                    //  graphics: graphics,
                    //  voltage: voltage,
                    //  battery: battery,
                    //  wireless: wireless
                    // },
                
                    cloudinary_id: urls
                })
                return res.status(201).json({
                    success: true,
                    message: "product created sucessfully",
                    data: product
                })
    
        } catch (error) {
          console.log(error)
        }
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
    try {
    const product  = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).send('Id not found')
    }
     await Product.findByIdAndDelete(product)
   return res.status(200).json({message: "Blog Successfully Deleted"})  
    } catch (error) {
        console.log(error)
    }
 
}




module.exports = { createProduct, getAllProducts, getProductById, deleteProduct }
