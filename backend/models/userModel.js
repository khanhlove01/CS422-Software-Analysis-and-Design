const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

//name,email,photo,password,passwordConfirmed
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    passwordConfirmed: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate:{
            validator: function(el){
                return el === this.password;
            },
            message: 'Passwords are not the same'
        }
    }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    //HASh the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    //Delete the passwordConfirmed field
    this.passwordConfirmed = undefined;
    next();
});

userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model('User', userSchema);

module.exports = User;