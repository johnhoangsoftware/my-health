import express from 'express'
import * as  userController  from '../controllers/user.controller'
const router = express.Router()

router.route("/posts")
    .get(userController.allPosts)

router.route("/profile/:id")
    .get(userController.profile)

router.route("/notification")
    .get(userController.allNotifications)

router.route("/notification/read/:id")
    .put(userController.readNotification)
export default router;