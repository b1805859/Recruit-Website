const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth.js');
const managerControllers = require('../../Controllers/ManagerController')

router.post('/search_jobs',managerControllers.search_jobs)
router.get('/:id/delete',managerControllers.manager_delete_post)
router.put('/:id/edit',managerControllers.manager_edit_post)
router.get('/:id/edit',managerControllers.manager_edit_post_page)
router.get('/:id/detail',managerControllers.manager_read_post)
router.get('/',managerControllers.manager_page)



module.exports = router