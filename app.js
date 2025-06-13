const express = require('express');
require('dotenv').config();

const authRoutes = require('./route/auth.routes');
const productRoutes = require('./route/product.routes');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//auth routes
app.use('/api/auth', authRoutes);

//product routes
app.use('/api/products', productRoutes);

//test route is working
app.get('/', (req, res) => {
  res.send('api is running');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});