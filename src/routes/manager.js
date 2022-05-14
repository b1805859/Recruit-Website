const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth.js');
const managerControllers = require('../../Controllers/ManagerController');

router.get('/:id/approved', managerControllers.manager_post_approved);
router.get(
  '/:id/approve_delete',
  managerControllers.manager_post_approve_delete
);
router.get('/approve', managerControllers.manager_post_approve);
router.post('/search_jobs', managerControllers.search_jobs);
router.get('/:id/delete', managerControllers.manager_delete_post);
router.put('/:id/edit', managerControllers.manager_edit_post);
router.get('/:id/edit', managerControllers.manager_edit_post_page);
router.get('/:id/detail', managerControllers.manager_read_post);
router.post('/post', managerControllers.manager_post_job);
router.get('/post', managerControllers.manager_post_job_page);
router.get('/', managerControllers.manager_page);

module.exports = router;
