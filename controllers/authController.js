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
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!')
        return res.redirect('/user/login')
    }
    next()
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
                    console.log('User is not admin. Access denied.');
                    res.status(403).send('Access denied. You are not allowed to access.');
                }
            })
            .catch((err) => {
                console.error('Error while checking admin status:', err);
                res.status(500).send('Internal Server Error');
            });
    } else {
        // If the user is not authenticated, redirect to the login page
        console.log('User is not authenticated. Redirecting to /user/login');
        res.redirect('/user/login');
    }
}

module.exports = { isAuthenticated, isAdmin }