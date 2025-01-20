const Category = require('../models/category');


exports.getCategory = async (req, res) => {
    try {
        const categories = await Category.findAll();

        // console.log('Fetched categories:', categories);
        res.render('categories', { categories: categories });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching categories' });
      }
  }


exports.addCategory = async (req, res) => {
    try {
        const { categoryId, name, description } = req.body;
    
        const category = await Category.create({
          id: categoryId,
          name,
          description,
        });
    
        res.redirect('/categories');
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating category' });
      }
  }


exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await Category.destroy({ where: { id } });
        res.redirect('/categories');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting category' });
    }
  }


exports.editCategory = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      await Category.update({ name, description }, { where: { id } });
      res.redirect('/categories');
    } catch (error) {
      res.status(500).send('Error updating category');
    }
};