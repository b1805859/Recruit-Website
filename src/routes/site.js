const express = require('express')
const router = express.Router()

const siteControllers = require('../../Controllers/SiteControllers')

router.get('/login',siteControllers.login)
router.get('/register',siteControllers.register)
router.get('/',siteControllers.home)

module.exports = router