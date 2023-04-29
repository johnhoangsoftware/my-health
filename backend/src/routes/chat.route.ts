import express from 'express';
import * as chatController  from '../controllers/chat.controller';

const router = express.Router();

router.route("/")
    .get(chatController.allChatPreview)

router.route("/:id")
    .get(chatController.inbox)

router.route("/:id/message")
    .post(chatController.sendMessage)

export default router;
