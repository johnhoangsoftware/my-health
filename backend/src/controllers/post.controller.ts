import { Request, Response } from "express";
import { connect } from "../database";
import { Post } from "../interface/Post";

export async function getPosts(req: Request, res: Response): Promise<Response> {
  const connects = await connect();
  const posts = await connects.query("SELECT * FROM posts");
  return res.json(posts[0]);
}

export async function createPost(req: Request, res: Response) {
  const newPost: Post = req.body;
  console.log(newPost);
  const cn = await connect();
  await cn.query("INSERT INTO posts SET ?", [newPost]);
  return res.json({
    message: "Post created successfully",
  });
}

export async function getPost(req: Request, res: Response): Promise<Response> {
  const id = req.params.postId;
  const connects = await connect();
  const posts = await connects.query("SELECT * FROM posts where id = ?", id);
  return res.json(posts[0]);
}

export async function deletePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const connects = await connect();
    const posts = await connects.query("DELETE FROM posts where id = ?", id);
    return res.json('Delete post successfully');
  }

export async function updatePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const connects = await connect();
    const posts = await connects.query("UPDATE posts set ? where id = ?", [updatePost, id]);
    return res.json('Post updated successfully');
  }
