import { StatusCodes } from "http-status-codes";
import ErrorWrapperHandler from "../utils/ErrorWrapperHandler";
import { NextFunction, Request, Response } from 'express'
import {postService, userService} from '../services'
import { CreatePostDTO } from "../dtos/post.dto";
import { CreateCommentDTO, UpdateCommentDTO } from "../dtos/comment.dto";

// [POST] /post
export const newPost = ErrorWrapperHandler(async (req: Request, res: Response, next:NextFunction) => {
    const data = req.body
    const authID = req.auth?.id
    const post = await postService.createPost(authID, data as CreatePostDTO)
    return res.status(StatusCodes.OK).json({
        message: `Create user successfully.`,
        data: post
    })
})

// [PATCH] /post/:id
export const updatePost = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedPost = await  postService.updatePost(id, req.body)
    return res.status(StatusCodes.OK).json({
        message: `Update user successfully.`,
        data: updatedPost
    });
})

// [DELETE] /post/:id
export const deletePost = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedPost = await postService.deletePost(id)
    return res.status(StatusCodes.OK).json({
        message: `Delete user successfully.`,
        data: deletedPost
    });
})

// [GET] /post
export const listPosts = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const q = req.query
    const d = await postService.list(q)
    return res.status(StatusCodes.OK).json({
        data: d
    });
}) 

// [GET] /post/:id/comments
export const getComments = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const postId = req.params.id
    const comments = await postService.getComments(postId)
    return res.status(StatusCodes.OK).json({
        data: comments
    });
}) 

// [POST] /post/:id/comments
export const comment = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const cmtDto = req.body
    const postId = req.params.id
    const authId = req.auth?.id
    const cmt = await postService.comment(authId, postId, cmtDto as CreateCommentDTO )
    return res.status(StatusCodes.OK).json({
        data: cmt
    });
}) 

// [DELETE] /post/comments/:id
export const deleteComment = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const commentId = req.params.id
    const cmt = await postService.deleteComment(commentId)
    return res.status(StatusCodes.OK).json({
        data: cmt
    });
}) 

// [PATCH] /post/comments/:id
export const updateComment = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const commentId = req.params.id
    const d = req.body
    const cmt = await postService.updateComment(commentId, d as UpdateCommentDTO)
    return res.status(StatusCodes.OK).json({
        data: cmt
    });
}) 