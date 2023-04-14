import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";
import ErrorWrapperHandler from "../utils/ErrorWrapperHandler";
import { postService } from '../services';

// [GET] /user/:id/posts
export const allPosts = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.params.id
    const q= req.query
    const posts = await postService.getPostsByUser(userId, q)
    return res.status(StatusCodes.OK).json({
        data: posts
    });
}) 