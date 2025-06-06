const User = require('../models/userModel');
const catchAsync = require('../Utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../Utils/appError');
const { promisify } = require('util');
const sendEmail = require('../Utils/email');
const crypto = require('crypto');
//Sign token
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SCERET, {
        expiresIn: '50d'
    });
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    res.cookie('jwt', token, {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true,
        // secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });

    user.password = undefined;

    //if(process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });

}

//Signup
const signup = catchAsync(async (req, res, next) => {
    // const newUser = await User.create({
    //     name: req.body.name,
    //     email: req.body.email,
    //     photo: req.body.photo,
    //     password: req.body.password,
    //     passwordConfirmed: req.body.passwordConfirmed
    // });
    const newUser = await User.create(req.body);

    // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SCERET, {
    //     expiresIn: process.env.JWT_EXPIRES_IN
    // })
    createSendToken(newUser, 201, res);
    // const token = signToken(newUser._id);

    // res.status(201).json({
    //     status: 'success',
    //     token,
    //     data: {
    //         user: newUser
    //     }
    // });
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
    createSendToken(user, 200, res);
    // const token = signToken(user._id);

    // res.status(200).json({
    //     status: 'success',
    //     token
    // });
})

//Protecting data
const protect = catchAsync(async (req, res, next) => {
    let token;
    //1) Getting token and check if it's there
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    // console.log(token);
    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access', 401));
    }

    //2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SCERET);
    //console.log(decoded);
    //3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
         return next(new AppError('The user belonging to this token does no longer exist', 401));
    }

    //4) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(new AppError('User recently changed password! Please log in again', 401));
    }

    //GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
});

const restrictTo = (...roles) => {
    return (req, res, next) => {
        //roles ['admin', 'guide']. role='user'
        if (!roles.includes(req.user.role)) {
            return next(new AppError('You do not have permission to perform this action', 403));
        }
        next();
    }

}

//FORGOT PASSWORD
const forgotPassword = catchAsync(async (req, res, next) => {
    //1) Get user based on POSTed email
    const user = await User.findOne({ email: req.body.email });
    if(!user) {
        return next(new AppError('There is no user with email address', 404));
    }
    // console.log(user);
    //2) Generate the random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
    //3. Send it to user's email
    const tmpURL = "http://localhost:5173/resetPassword/" + resetToken;
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${tmpURL}.\nIf you didn't forget your password, please ignore this email!`;
    
    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10 min)',
            message
        })
    
        res.status(200).json({
            status: 'success',
            message: 'Token sent to email!',
            data: {
                resetURL: resetURL,
                resetToken: resetToken
            }
        })
    } catch (error) {
        console.log(error);
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });

        return next(new AppError('There was an error sending the email. Try again later!', 500));
    }

})

//RESET PASSWORD
const resetPassword = catchAsync(async (req, res, next) => {
    //1) Get user based on the token
    // console.log(req.params.token);
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');
    // console.log(hashedToken);
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });
    // console.log(user);
    //2) If token has not expired, and there is user, set the new password
    if (!user) {
        return next(new AppError('Token is invalid or has expired', 400));
    }

    user.password = req.body.password;
    user.passwordConfirmed = req.body.passwordConfirmed;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    //3) Update changedPasswordAt property for the user
    //user.passwordChangedAt = Date.now();

    //4) Log the user in, send JWT
    createSendToken(user, 200, res);
    // const token = signToken(user._id);
    // res.status(200).json({
    //     status: 'success',
    //     token
    // });
})

//Updating password
const updatePassword = catchAsync(async (req, res, next) => {
    //1) Get user from collection
    const user = await User.findById(req.user.id).select('+password');

    //2) Check if POSTed current password is correct
    if(!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError('Your current password is wrong', 401));
    }
    //3) If so, update password
    user.password = req.body.password;
    user.passwordConfirmed = req.body.passwordConfirmed;
    await user.save();
    //4) Log user in, send JWT
    createSendToken(user, 200, res);
})
module.exports = {
    signup,
    login,
    protect,
    restrictTo,
    forgotPassword,
    resetPassword,
    updatePassword
}