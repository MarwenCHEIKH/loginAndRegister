const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const users = require('./routes/register');
const auth = require('./routes/auth');



mongoose.connect('mongodb://localhost/Test')
.then(() => console.log('connected to mongodb...'))
.catch((err) => console.log('could not connect to mongodb...'));


app.use('/api/register', users);
app.use('/api/login', auth);




app.listen(3000,() => console.log('listening on port: 3000'));