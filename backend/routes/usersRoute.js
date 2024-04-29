const express = require('express');
const fs = require("fs")

//================ USERS =================
const getAllUsers = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const createUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const getSingleUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}


const updateUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const deleteUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const usersRouter = express.Router();

//Router users
usersRouter.route('/').get(getAllUsers).post(createUser);

usersRouter.route('/:id').get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = usersRouter;