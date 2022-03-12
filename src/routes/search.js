const express = require('express')
const router = express.Router()

const searchControllers = require('../../Controllers/JobControllers')

router.get('/:id/detail', searchControllers.detail);
router.get('/:id/apply', searchControllers.apply);
router.get('/jobs/:location/:keyword',searchControllers.locationkeyword);
router.get('/jobs/:location',searchControllers.location);
router.get('/jobs',searchControllers.home);

module.exports = router