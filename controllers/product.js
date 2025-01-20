const Product = require('../models/product');
const Category = require('../models/category');


exports.getProducts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
  
    const categories = await Category.findAll({
        attributes: ['id', 'name'],
    });

    const products = await Product.findAndCountAll({
        include: {
            model: Category,
            attributes: ['id', 'name'],
          },
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
  
    console.log(products)
    res.render('products', {
      categories: categories ? categories : [],
      products: products.rows,
      totalPages: Math.ceil(products.count / limit),
      currentPage: parseInt(page),
    });
  }


exports.addProduct = async (req, res) => {
    const { name, categoryId, price } = req.body;
    await Product.create({ name, categoryId, price });
    res.redirect('/products');
  }


exports.editProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, categoryId } = req.body;
    try {
      await Product.update({ name, price, categoryId }, { where: { id } });
      res.redirect('/products');
    } catch (error) {
      res.status(500).send('Error updating product');
    }
  };

  exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      await Product.destroy({ where: { id } });
      res.redirect('/products');
    } catch (error) {
      res.status(500).send('Error deleting product');
    }
  };