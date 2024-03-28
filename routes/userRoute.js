const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/userModel');
const userControllers = require('../controllers/userController');
const { isAuthenticated, isAdmin, isAuthorizedAsInstructor } = require('../controllers/authController');

router.route('/register')
    .get(userControllers.renderRegister)
    .post(userControllers.registerUser);

router.route('/login')
   .get(userControllers.renderLogin)
   .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/user/login' }), userControllers.loginUser)

router.route('/logout')
    .get(userControllers.logout)

//router.route('/')
    //.get(isAuthenticated, isAdmin, userControllers.getAllUsers)

router.route('/:id')
    .get(isAuthenticated, isAdmin, userControllers.getUser)
    .put(isAuthenticated, isAdmin, userControllers.updateUser)
    .delete(isAuthenticated, userControllers.deleteUser)

router.route('/enrolled-courses/:userId')
    .get(isAuthenticated, userControllers.viewEnrolledCourse)
router.route('/:userId/course/:courseId/enroll')
    .post(isAuthenticated, userControllers.enrolledUserInCourse)
router.route('/:userId/course/:courseId/complete')
    .post(isAuthenticated, userControllers.completeCourse)

router.route('/students/:userId/course/:courseId/remove')
    .post(isAuthenticated, userControllers.removeStudentFromCourse)



//////////////////////////////  INSTRUCTORS //////////////////////////////////
router.route('/:userId/instructor-dashboard')
    .get( isAuthorizedAsInstructor, userControllers.renderInstructorDashboard)

module.exports = router;