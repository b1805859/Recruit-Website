const express = require('express')
const router = express.Router()

const footerControllers = require('../../Controllers/FooterControllers')

router.get('/contact',footerControllers.contact)
router.get('/security',footerControllers.security)


module.exports = router