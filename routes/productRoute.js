const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const upload = require('../lib/multer');


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/create', upload.array('cloudinary_id', 10), productController.createProduct);
router.delete('/:id', productController.deleteProduct);



module.exports = router;