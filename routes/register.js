const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcrypt');



router.post('/', async (req,res) => {

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('email already exists');

    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email, 
        password: req.body.password
    });
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);

    user = await user.save();    
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(user);
});


module.exports = router;
