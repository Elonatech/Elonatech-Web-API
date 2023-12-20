const Product = require('../models/productModel');
const cloudinary = require('../lib/cloudinary')


const createProduct = async (req, res, next)=>{
    try {
        const {    
             name,
             description,
             price,
             brand,
             category,
             series,
             model,
             weight,
             dimension,
             item,
             color,
             hardware,
             os,
             processor,
             number,
             memory,
             ram,
             drive,
             display,
             resolution,
             graphics,
             voltage,
             battery,
             wireless
            
            } = req.body
        let images = [...req.body.images];
        let imagesBuffer = [];

        for (let i =0; i < images.length;  i++){
              const result = await cloudinary.uploader.upload(images[i], { folder: "products"});
          imagesBuffer.push({
            public_id: result.public_id,
            url: result.secure_url
          })

        }
       
        const data = {
            name,
            description,
            price,
            brand,
            category,
            computerProperty:{
            series,
            model,
            weight,
            dimension, 
            item,
            color,
            hardware,
            os,
            processor,
            number,
            memory,
            ram,
            drive,
            display,
            resolution,
            graphics,
            voltage,
            battery,
            wireless,
            },
            images:imagesBuffer
    
        }
        const product = await Product.create(data)
         
        res.status(201).json({
            success: true,
            product
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
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




module.exports = { createProduct, getAllProducts, getProductById, deleteProduct,  }
