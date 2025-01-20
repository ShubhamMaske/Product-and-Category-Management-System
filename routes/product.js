const express = require('express');
const router = express.Router();
const productController = require('../controllers/product')

// Get all products with pagination
router.get('/', productController.getProducts);

// Create a new product
router.post('/', productController.addProduct);

// Delete a category
router.post('/delete/:id', productController.deleteProduct);

// Edit a category
router.post('/edit/:id', productController.editProduct);

module.exports = router;
