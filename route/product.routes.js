const express = require('express');
const router = express.Router();

const { createProduct,findProductById,findAllProducts,updateProduct } = require('../models/product.model');

//test product route work
router.get('/', (req, res) => {
  res.send('product route running');
});

//create product route 
router.post('/', async (req,res)=>{
    
    
    try{
        const {name,price,quantity} = req.body;

        if(!name || !price || !quantity){
            return res.status(400).json({error: 'fill all fields'});
        }

        const productId = await createProduct(name, price, quantity);
        const product = await findProductById(productId);
        res.status(201).json({message: 'Product created successfully', product});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

//get all product
router.get('/all', async (req, res) => {
    try {
        const products = await findAllProducts();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//get product by id
router.get('/:id', async (req, res) => {
    try{
        const productId = req.params.id;
        const product = await findProductById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

//update product route
router.put('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, price, quantity } = req.body;

        const product = await findProductById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await updateProduct(productId, name || product.name, price || product.price , quantity || product.quantity);
        const updatedProduct = await findProductById(productId);
        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
      
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;