import { CreatePostDTO, UpdatePostDTO } from "../dtos/post.dto";
import { Post } from "../models";

export const toPost = (postDTO : CreatePostDTO|UpdatePostDTO) => {
    return new Post({
        topic: postDTO.topic,
        content: postDTO.content,
        media: postDTO.media,
        auth_id: postDTO.auth_id,
    })
}

