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
        res.json('IT WORK')
        //res.render('users/login')
    },
    // Login
    loginUser: async (req, res) => {
        req.flash('success', 'welcome back!');
        const redirectUrl = req.session.returnTo || '/course';
        delete req.session.returnTo;
        res.json({ message: 'User logged in successfully', redirectUrl });
        //res.redirect(redirectUrl)
    },
    // Logout
    logout: (req, res) => {
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
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json({ users: users })
        } catch (err) {
            res.status(400).json({ error: error.message })
        }
    },
    // Get a single user
    getUser: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({ error: error.message })
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
        } catch (error) {
            res.status(400).json({ error: error.message })
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
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    },
    // Block a user
    blockUser: async (req, res, next) => {
        try {
            const blockedUser = await User.findByIdAndUpdate(req.params.id, { isBlocked: true }, { new: true });
            if (!blockedUser) {
                return res.status(404).json({ error: 'User not found' })
            }
            res.status(200).json(blockedUser)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    },
    // Unblock a user
    unblockUser: async (req, res, next) => {
        try {
            const unblockedUser = await User.findByIdAndUpdate(req.params.id, { isBlocked: false }, { new: true });
            if (!unblockedUser) {
                return res.status(404).json({ error: 'User not found' })
            }
            res.status(200).json(unblockedUser)
        } catch (error) {
                res.status(400).json({ error: error.message })
        }
    }
}
module.exports = userControllers