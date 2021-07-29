const router = require('express').Router()
const dashboardRoute = require('./dashboard-routes')
const apiRoute = require('./api/')
const homeRoute = require('./home-routes')


router.use('/dashboard', dashboardRoute)
router.use('/', homeRoute)
router.use('/api', apiRoute)

module.exports = router