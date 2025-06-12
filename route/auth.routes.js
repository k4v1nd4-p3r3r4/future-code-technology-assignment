const express = require('express');
const router = express.Router();
const {createUser, findUserByUsername} = require('../models/user.model')

router.post('/register', async (req, res) => {
    try{
        const {name,username,password} = req.body;

        if(!name || !username || !password){
            return res.status(400).json({error: 'Username and password are required'});
        }

        const userAlreadyexists = await findUserByUsername(username);
        if (userAlreadyexists) {
            return res.status(400).json({error: 'User already exists'});
        }

        const userId = await createUser(name,username, password);
        res.status(201).json({message: 'User created successfully', userId});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;