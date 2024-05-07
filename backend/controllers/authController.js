const User = require('../models/userModel');
const catchAsync = require('../Utils/catchAsync');
const jwt = require('jsonwebtoken');
//Signup
const signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        password: req.body.password,
        passwordConfirmed: req.body.passwordConfirmed
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SCERET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
});

module.exports = {
    signup
}