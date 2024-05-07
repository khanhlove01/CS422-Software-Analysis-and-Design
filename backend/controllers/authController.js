const User = require('../models/userModel');
const catchAsync = require('../Utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../Utils/appError');

//Sign token
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SCERET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}
//Signup
const signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        photo: req.body.photo,
        password: req.body.password,
        passwordConfirmed: req.body.passwordConfirmed
    });

    // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SCERET, {
    //     expiresIn: process.env.JWT_EXPIRES_IN
    // })

    const token = signToken(newUser._id);

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
});

//Login
const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    //1) Check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    //2) Check if user exists && password is correct
    const user = await User.findOne({email}).select('+password');
    console.log(user);

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    //3) If everything is ok, send token to client
    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        token
    });
})

module.exports = {
    signup,
    login
}