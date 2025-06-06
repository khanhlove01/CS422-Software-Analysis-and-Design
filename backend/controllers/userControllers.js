const fs = require("fs")

//================ USERS =================
const User = require('../models/userModel');
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/appError");

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if(allowedFields.includes(el)) newObj[el] = obj[el];
    })
    return newObj;
}

const updateMe = catchAsync(async (req, res, next) => {
    //1) Create error if user POSTs password data
    if(req.body.password || req.body.passwordConfirmed){
        return next(new AppError('This route is not for password updates. Please use /updateMyPassword', 400))
    }

    //2) Filtered out unwanted fields names that are not allowed to be updated
    const filteredBody = filterObj(req.body, 'name', 'email');
    //if(req.file) filteredBody.photo = req.file.filename;

    //3) Update user document
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    })
})

const deleteMe = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, {active: false});

    res.status(204).json({
        status: 'success',
        data: null
    })
})

const getAllUsers = catchAsync (async(req,res) => {
    const users = await User.find();

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })
})

const createUser = catchAsync (async(req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
})

const getSingleUser = catchAsync (async(req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
})

const updateUser = catchAsync (async(req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
})

const deleteUser = catchAsync (async(req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
})

module.exports = {
    getAllUsers, 
    createUser, 
    getSingleUser, 
    updateUser, 
    deleteUser,
    updateMe, 
    deleteMe
}