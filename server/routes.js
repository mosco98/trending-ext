const express = require('express')
const router = express.Router()

const trendsControllers = require('./controllers/trends')

router.post('/', trendsControllers.getTrendsWithUserLocation)
router.post('/preferred', trendsControllers.preferredLocation)

module.exports = router
