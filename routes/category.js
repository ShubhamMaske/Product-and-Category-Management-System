const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category')

// Get all categories
router.get('/', categoryController.getCategory);

// Create a new category
router.post('/', categoryController.addCategory);

// Delete a category
router.post('/delete/:id', categoryController.deleteCategory);

// Edit a category
router.post('/edit/:id', categoryController.editCategory);

module.exports = router;
