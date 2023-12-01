const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const storage = require('../lib/multer');


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/create', storage.array('cloudinary_id'), productController.createProduct);
router.delete('/:id', productController.deleteProduct);



module.exports = router;