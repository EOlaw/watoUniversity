const express = require('express');
const router = express.Router()
const homeControllers = require('../controllers/homeController')

router.route('/')
    .get(homeControllers.homepage)
router.route('/services')
    .get(homeControllers.services)
router.route('/about')
    .get(homeControllers.about)
router.route('/contact')
    .get(homeControllers.contact)

module.exports = router