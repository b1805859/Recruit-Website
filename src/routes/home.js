const express = require('express')
const router = express.Router()
const checkUser = require('../../middlewares/checkUser.js')
const homeControllers = require('../../Controllers/HomeControllers')


router.get('/:job/:id/delete_user_apply',checkUser,homeControllers.delete_user_apply)
router.put('/:id/edit_post',checkUser,homeControllers.edit_post)
router.get('/:id/user_apply_page',checkUser,homeControllers.manager_user_apply)
router.get('/:id/edit_post_page',checkUser,homeControllers.edit_post_page)
router.get('/:id/delete_post',checkUser,homeControllers.delete_post)
router.get('/user_post',checkUser,homeControllers.manager_post)
router.get('/',checkUser, homeControllers.home)
router.get('/logout', homeControllers.logout)

module.exports = router