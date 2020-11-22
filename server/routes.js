const express = require('express')
const router = express.Router()

const trendsControllers = require('./controllers/trends')

router.post('/default', trendsControllers.getTrendsWithUserLocation)
// router.post('/preferred', trendsControllers.getTrendsWithPreferredLocation)

module.exports = router
