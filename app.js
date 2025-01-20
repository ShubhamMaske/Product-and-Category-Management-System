const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const sequelize = require('./config/db');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const expressLayouts = require('express-ejs-layouts')

const port = process.env.PORT

const app = express();


app.use(express.static('public'))


// app.use(expressLayouts)
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('categories', { categories: [] });
  });
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced!');
  app.listen(port, () => console.log(`Server running on port : ${port}`));
});
