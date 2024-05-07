const fs = require("fs")

//================ USERS =================
const User = require('../models/userModel');
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/appError");
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

module.exports = {getAllUsers, createUser, getSingleUser, updateUser, deleteUser}