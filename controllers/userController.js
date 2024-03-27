const User = require('../models/userModel')
const Course = require('../models/courseModel')

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
                res.redirect('/');
                console.log(user)
                //res.json({ message: 'User registered successfully', user });
            })
        } catch (err) {
            req.flash('error', err.message);
            console.log(err);
            res.redirect('/user/register')
        }
    },
    // Login Page
    renderLogin: (req, res) => {
        //res.json('Login Page')
        res.render('users/login')
    },
    // Login
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne( { username });
            if (!user || !(await user.isPasswordSame(password))) {
                req.flash('error', 'Invalid username or password');
                return res.redirect('/user/login')
            }
            req.login(user, (err) => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                // Redirect based on user's role
                if (user.role === 'student' || user.role === 'parent') {
                    return res.redirect('/student/portal');
                } else if (user.role == 'instructor' || user.role === 'center') {
                    return res.redirect('/teacher/portal')
                } else {
                    return res.redirect('/');
                }
            })
        } catch (err) {
            console.log(err);
            req.flash('error', 'An error occurred. Please try again later.');
            res.redirect('/user/login');
        }
        /*
        req.flash('success', 'Welcome back!');
        const redirectUrl = req.session.returnTo || '/';
        delete req.session.returnTo; // Delete after redirection
        res.redirect(redirectUrl);
        */
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
            //res.json('User logged out successfully');
            res.redirect('/')
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
            // Also handle removal of enrolled courses when deleting a user
            await Course.updateMany(
                { _id: { $in: deletedUser.enrolledCourses } },
                { $pull: { students: deletedUser._id } }
            );
            res.status(200).json(deletedUser)
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    },
    viewEnrolledCourse: async (req, res, next) => {
        try {
            const userId = req.params.userId;
            const user = await User.findById(userId).populate('enrolledCourses');
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.render('courses/viewEnrolledCourses', { enrolledCourses: user.enrolledCourses })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },
    enrolledUserInCourse: async (req, res, next) => {
        try {
            // Fetch user and course
            const userId = req.params.userId;
            const courseId = req.params.courseId;
            const user = await User.findById(userId);
            const course = await Course.findById(courseId);

            // Check if user and course exist
            if (!user || !course) {
            return res.status(404).json({ error: 'User or course not found' });
            }

            // Check if the course is active and has available slots
            if (course.enrollmentLimit && course.students.length >= course.enrollmentLimit) {
                return res.status(400).json({ error: 'The course has reached its enrollment limit' })
            }

            // Proceed with enrollment
            user.enrolledCourses.push(courseId);
            course.students.push(userId);
            await Promise.all([user.save(), course.save()]);

            // Update enrollment limit
            if (course.enrollmentLimit) {
                course.enrollmentLimit--;
                await course.save();
            }
  
            res.redirect(`/user/enrolled-courses/${userId}`);
            //res.status(200).json({ message: 'Enrollment Successful', user, course })
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    },
    // Mark a course as completed for a User
    completeCourse: async (req, res, next) => {
        try {
            const userId = req.params.userId;
            const courseId = req.params.courseId;
    
            // Fetch the user
            const user = await User.findById(userId).populate('enrolledCourses');
            const course = await Course.findById(courseId);
    
            if (!user) {
                return res.status(404).json({ message: 'User Not Found' });
            }
    
            // Remove the course from the user's enrolled courses
            user.enrolledCourses = user.enrolledCourses.filter(id => id.toString() !== courseId.toString());
    
            // Also update the course to remove the student
            course.students = course.students.filter(id => id.toString() !== userId.toString());
    
            await Promise.all([user.save(), course.save()]);
    
            // Update enrollment limit
            if (course.enrollmentLimit) {
                course.enrollmentLimit++;
                await course.save();
            }
    
            res.status(200).json({ message: 'Course marked as completed', user, course });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    // Route to remove a student from a course
    removeStudentFromCourse: async (req, res, next) => {
        try {
        const courseId = req.params.courseId;
        const userId = req.params.userId;
    
        // Fetch the course
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
    
        // Fetch the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
    
        // Remove the user from the course's students array
        course.students.pull(userId);
        await course.save();
    
        // Remove the course from the user's enrolledCourses array
        user.enrolledCourses.pull(courseId);
        await user.save();
    
        // Update the enrollment limit by incrementing it by 1
        if (course.enrollmentLimit) {
            course.enrollmentLimit++;
            await course.save();
        }
    
        res.redirect(`/admin/course/${courseId}`)
        } catch (err) {
        res.status(400).json({ error: err.message });
        }
    }
  
}
module.exports = userControllers