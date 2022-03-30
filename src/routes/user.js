const express = require('express')
const router = express.Router()

const userControllers = require('../../Controllers/UserControllers')


router.get('/',userControllers.login)
router.post('/',userControllers.logined)
router.post('/register',userControllers.registered)
router.get('/register',userControllers.register)


module.exports = router