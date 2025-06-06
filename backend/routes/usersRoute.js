const express = require('express');
const userControllers = require('../controllers/userControllers');
const authController = require('../controllers/authController')
const usersRouter = express.Router();

//Router for signup
usersRouter.post('/signup', authController.signup);
usersRouter.post('/login', authController.login);

usersRouter.post('/forgotPassword', authController.forgotPassword);
usersRouter.patch('/resetPassword/:token', authController.resetPassword);
usersRouter.patch('/updateMyPassword', authController.protect, authController.updatePassword);
usersRouter.patch('/updateMe', authController.protect, userControllers.updateMe);
usersRouter.delete('/deleteMe', authController.protect, userControllers.deleteMe);
//Router users
usersRouter.route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.createUser);

usersRouter.route('/:id')
    .get(userControllers.getSingleUser)
    .patch(userControllers.updateUser)
    .delete(userControllers.deleteUser);

module.exports = usersRouter;