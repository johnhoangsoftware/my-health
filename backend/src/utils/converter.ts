import { StatusCodes } from "http-status-codes";
import { CreatePostDTO, UpdatePostDTO } from "../dtos/post.dto";
import CustomError from "../error/CustomError";
import { Post } from "../models";

export const toPost = (postDTO : CreatePostDTO|UpdatePostDTO) => {
    return new Post({
        topic: postDTO.topic,
        content: postDTO.content,
        media: postDTO.media,
        authId: postDTO.authId,
    })
}

export const convertDateTime = (date: string, time: string) => {
    const [d, m, y] = date.split("/")
    const [h, min] = time.split(":")
    let result;
    try {
        result = new Date(Number(y), Number(m) - 1, Number(d), Number(h), Number(min))
    } catch (error) {
        throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Invalid format. Date must be: DD/MM/YYYY and Time must be: HH:mm")
    }
    return result
}