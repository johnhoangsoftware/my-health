import express from 'express'
import * as  postController  from '../controllers/post.controller'
const router = express.Router()

router.route("/")
    .post(postController.newPost)
    .get(postController.listPosts)
    
router.route("/:id")
    .patch(postController.updatePost)
    .delete(postController.deletePost)
    
router.route("/:id/comments")
    .get(postController.getComments)
    .post(postController.comment)

router.route("/comments/:id")
    .delete(postController.deleteComment)
    .patch(postController.updateComment)

export default router;