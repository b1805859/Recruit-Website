const express = require('express')
const router = express.Router()

const homeControllers = require('../../Controllers/HomeControllers')



router.get('/', homeControllers.home)

module.exports = router