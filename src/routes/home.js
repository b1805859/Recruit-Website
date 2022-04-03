const express = require('express')
const router = express.Router()
const checkRole = require('../../middlewares/checkRole.js')
const homeControllers = require('../../Controllers/HomeControllers')

router.put('/:id/edit_post',checkRole,homeControllers.edit_post)
router.get('/:id/edit_post_page',checkRole,homeControllers.edit_post_page)
router.get('/:id/delete_post',checkRole,homeControllers.delete_post)
router.get('/user_post',checkRole,homeControllers.manager_post)
router.get('/',checkRole, homeControllers.home)
router.get('/logout', homeControllers.logout)

module.exports = router