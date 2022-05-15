const express = require('express');
const router = express.Router();

const searchControllers = require('../../Controllers/JobControllers');

router.get('/:id/detail', searchControllers.detail);
router.get('/:id/apply', searchControllers.apply);
router.put('/:id/applied', searchControllers.applied);
router.get('/post', searchControllers.post);
router.post('/post', searchControllers.stored);
router.post('/jobs', searchControllers.home);
router.get('/contact', searchControllers.contact);
router.get('/security', searchControllers.security);
router.get('/jobs', searchControllers.homeheader);

module.exports = router;
