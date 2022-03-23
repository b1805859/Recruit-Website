const express = require('express')
const router = express.Router()

const homeControllers = require('../../Controllers/HomeControllers')



router.get('/', homeControllers.home)
router.get('/logout', homeControllers.logout)

module.exports = router