const express = require('express');
const router = express.Router();
const {createUser, findUserByUsername,findByCredentials} = require('../models/user.model')

// test auth running
router.get('/', (req, res) => {
  res.send('auth route running');
});

// register user route
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

// login user route
router.post('/login', async (req, res) => {
    try{
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({error: 'fill all fields'});
        }

        const user = await findByCredentials(username, password);
        if (!user) {
            return res.status(401).json({error: 'Invalid username or password'});
        }

        res.status(200).json({message: 'Login successful', userId: user.id});

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;