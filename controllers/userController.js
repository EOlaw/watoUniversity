const User = require('../models/userModel')

const userControllers = {
    // Register Page
    renderRegister: (req, res) => {
        res.json('Register Page')
        //res.render('users/register')
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
                //res.redirect('/');
                console.log(user)
                res.json({ message: 'User registered successfully', user });
            })
        } catch (err) {
            req.flash('error', err.message);
            console.log(err);
            res.redirect('/user/register')
        }
    },
    // Login Page
    renderLogin: (req, res) => {
        res.json('Login Page')
        //res.render('users/login')
    },
    // Login
    loginUser: async (req, res) => {
        req.flash('success', 'welcome back!');
        const redirectUrl = req.session.returnTo || '/';
        delete req.session.returnTo;
        res.json({ message: 'User logged in successfully', redirectUrl });
        //res.redirect(redirectUrl)
    },
    // Logout
    logout: (req, res) => {
        // Check if the user is authenticated
        if (!req.isAuthenticated()) {
            // If the user is not logged in, send a response indicating that the user must be logged in
            return res.status(401).json({ error: 'You must be logged in to perform this action' });
        }
        req.logout((err) => {
            if (err) {
                // Handle any errors that occur during the logout process
                console.log(err);
            }
            req.flash('success', 'Goodbye!');
            res.json('User logged out successfully');
            //res.redirect('/')
        });
    },
    
    // Get a single user
    getUser: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user)
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    },
    // Update a user
    updateUser: async (req, res, next) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' })
            }
            res.status(200).json(updatedUser)
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    },
    // Delete a user
    deleteUser: async (req, res, next) => {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' })
            }
            console.log(deletedUser)
            res.status(200).json(deletedUser)
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
}
module.exports = userControllers