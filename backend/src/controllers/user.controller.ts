import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";
import ErrorWrapperHandler from "../utils/ErrorWrapperHandler";
import { postService, userService } from '../services';
import * as notifyService from '../services/notify.service';

// [GET] /user/:id/profile
export const profile = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.params.id
    const data = await userService.profile(userId)
    return res.status(StatusCodes.OK).json({
        data: data
    });
}) 

// [GET] /user/:id/posts
export const allPosts = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.params.id
    const q = req.query
    const posts = await postService.getPostsByUser(userId, q)
    return res.status(StatusCodes.OK).json({
        data: posts
    });
})

// [GET] /user/:id/notify
export const allNotify = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id
    const notifications = await notifyService.getNotify(userId)
    return res.status(StatusCodes.OK).json({
        data: notifications
    });
}

