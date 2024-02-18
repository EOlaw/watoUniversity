// Import the necessary modules.
const User = require('../models/userModel');
const passport = require('passport');
/*
function checkContractorRole(req, res, next) {
    if (req.user.role === 'contractor') {
        return next(); // Allow access to the route
    } else {
        res.status(403).send('Access denied. You are not allowed to access.');
    }
}
*/

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/user/login')
}

// Middleware to check if user is admin
function isAdmin(req, res, next) {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        // Retrieve the user from the database
        User.findById(req.user._id)
            .then((user) => {
                if (user && user.isAdmin) {
                    // If the user is admin, allow access to the route
                    next();
                } else {
                    // If the user is not admin, deny access with status 403
                    //res.status(403).render('home/auth')
                    res.status(403).send('Access denied. You are not allowed to access.');
                }
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Internal Server Error');
            });
    } else {
        // If the user is not authenticated, redirect to the login page
        res.redirect('/user/login');
    }
}

module.exports = { isAuthenticated, isAdmin }