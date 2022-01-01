const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255
    },
    email: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 255,
    },
});
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, 'Test_jwtPrivateKey');
    return token;
}

const User = mongoose.model('users', userSchema);


module.exports = User;
