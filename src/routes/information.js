const express = require('express')
const router = express.Router()

const informationControllers = require('../../Controllers/InformationControllers')

router.get('/contact',informationControllers.contact)
router.get('/security',informationControllers.security)


module.exports = router