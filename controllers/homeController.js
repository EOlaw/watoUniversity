const homeController = {
    homepage: (req, res) => {
        res.render('home/homepage')
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