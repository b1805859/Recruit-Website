const express = require('express')
const router = express.Router()

const homeControllers = require('../../Controllers/HomeControllers')

router.put('/:id/edit_post',homeControllers.edit_post)
router.get('/:id/edit_post_page',homeControllers.edit_post_page)
router.get('/:id/delete_post',homeControllers.delete_post)
router.get('/user_post',homeControllers.manager)
router.get('/', homeControllers.home)
router.get('/logout', homeControllers.logout)

module.exports = router