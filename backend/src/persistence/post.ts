import { StatusCodes } from "http-status-codes";
import CustomError from "../error/CustomError";
import { Post } from "../models";
import { validateCreatePost } from "../validator/post";
import { UpdatePostDTO } from "../dtos/post.dto";

export const findByID =async (id: string): Promise<Post|null> => {
  const post = await Post.findByPk(id)
  if (!post) {
    return Promise.resolve(null)
  }
  return Promise.resolve(post)
}

export const create = async (post: Post): Promise<Post> => {
  const newPost = await Post.create({...post})
  return Promise.resolve(newPost)
};


export const update = async (id: string, post: UpdatePostDTO): Promise<Post> => {
  await Post.update({ ...post}, {
    where: {
      post_id : id
    }
  })
  const updatedPost = await findByID(id)
  if (!updatedPost) {
    throw new CustomError(StatusCodes.BAD_REQUEST, "Cannot specify after updating")
  }
  return Promise.resolve(updatedPost)
}

export const deleteByID = async (id: string): Promise<Post | null> => {
  const existingPost = await Post.findByPk(id)
  if (!existingPost) {
    throw new CustomError(StatusCodes.NOT_FOUND, `Post with ID: '${id}' not found.`)
  }
  await existingPost.destroy()
  return Promise.resolve(existingPost);
}
