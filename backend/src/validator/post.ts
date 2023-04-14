import { StatusCodes } from "http-status-codes";
import { CreatePostDTO, UpdatePostDTO } from "../dtos/post.dto";
import CustomError from "../error/CustomError";
import { trimObject } from "../utils/object";
import { CreateCommentDTO, UpdateCommentDTO } from "../dtos/comment.dto";

export const validateCreatePost = (post: CreatePostDTO): CreatePostDTO => {
  post = trimObject(post) as CreatePostDTO;
  if (!post.topic) {
    throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Topic of post must not be empty");
  }
  if (!post.content) {
    throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Content of post must not be empty");
  }
  return post;
}

export const validateUpdatePost = (post: UpdatePostDTO): UpdatePostDTO => {
  post = trimObject(post) as UpdatePostDTO
  if ('topic' in post && !post.topic) {
    throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Topic of post must not be empty");
  }

  if ('content' in post && !post.content) {
    throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Content of post must not be empty");
  }
  return post;
}

export const validateCreateComment = (cmt: CreateCommentDTO): CreateCommentDTO => {
  cmt = trimObject(cmt) as CreateCommentDTO
  if (!cmt.content) {
    throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "comment must not be empty");
  }
  return cmt
}

export const validateUpdateComment = (cmt: UpdateCommentDTO): UpdateCommentDTO => {
  cmt = trimObject(cmt) as UpdateCommentDTO
  if ( !('content' in cmt) || !cmt.content) {
    throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "comment must not be empty");
  }
  return cmt
}