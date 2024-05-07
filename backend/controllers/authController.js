const User = require('../models/userModel');
const catchAsync = require('../Utils/catchAsync');
//Signup
const signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        password: req.body.password,
        passwordConfirmed: req.body.passwordConfirmed
    });

    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    });
});

module.exports = {
    signup
}