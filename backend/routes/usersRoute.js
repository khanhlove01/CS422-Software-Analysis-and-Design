const express = require('express');
const userControllers = require('../controllers/userControllers');
const authController = require('../controllers/authController')
const usersRouter = express.Router();

//Router for signup
usersRouter.post('/signup', authController.signup);

//Router users
usersRouter.route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.createUser);

usersRouter.route('/:id')
    .get(userControllers.getSingleUser)
    .patch(userControllers.updateUser)
    .delete(userControllers.deleteUser);

module.exports = usersRouter;