const express = require('express');
const router = express.Router();

const {createUser} = require('../models/product.model');

router.post('/register', async (req, res) => {
    try{
        const {username,password} = req.body;
    }
}