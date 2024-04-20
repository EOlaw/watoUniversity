const User = require('../models/userModel');
const Department = require('../models/departmentModel');
const Course = require('../models/courseModel');
const Announcement  = require('../models/announcementModel');
const Resource = require('../models/resourceModel');
const Document = require('../models/documentModel');
//const Administrator = require('../models/adminModels');


const homeController = {
    homepage: async (req, res) => {
        try {
            const courses = await Course.find();
            const courseTags = await Course.distinct("tags"); // Get all unique tags
            res.render('home/homepage', { courses: courses, courseTags: courseTags })
            //res.status(200).json({ courses: courses });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
    services: (req, res, next) => {
        res.render('home/service')
    },
    about: (req, res, next) => {
        res.render('home/about')
    },
    contact: (req, res, next) => {
        res.render('home/contact')
    }
}

module.exports = homeController