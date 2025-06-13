const express = require('express');
const router = express.Router();

const { createProduct,findProductById,findAllProducts } = require('../models/product.model');

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

module.exports = router;