const User = require('../models/userModel')

const userControllers = {
    // Register Page
    renderRegister: (req, res) => {
        res.render('users/register')
    },
    // Create a new user
    registerUser: async (req, res, next) => {
        try {
            const user = new User(req.body);
            await user.setPassword(req.body.password); //Use setPassword method provided by passport-local-mongoose to set the password
            await user.save();
            req.login(user, err => {
                if (err) return next(err);
                req.flash('success', 'Welcome to Education Website!')
            })
        } catch (err) {
            req.flash('error', e.message);
            res.redirect('/user/register')
        }
    }
}