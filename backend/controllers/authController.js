const User = require('../models/userModel');
const catchAsync = require('../Utils/catchAsync');
//Signup
const signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);

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