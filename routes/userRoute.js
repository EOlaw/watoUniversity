const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/userModel');
const userControllers = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../controllers/authController');


router.route('/register')
    .get(userControllers.renderRegister)
    .post(userControllers.registerUser);

router.route('/login')
   .get(userControllers.renderLogin)
   .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/user/login' }), userControllers.loginUser)
   
router.route('/logout')
    .get(userControllers.logout)

router.route('/')
    .get(isAuthenticated, isAdmin, userControllers.getAllUsers)

router.route('/:id')
    .get(userControllers.getUser)
    .put(userControllers.updateUser)
    .put(userControllers.unblockUser)
    .delete(userControllers.deleteUser)
    
module.exports = router;