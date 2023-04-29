import { StatusCodes } from "http-status-codes";
import { CreateMessageDTO } from "../dtos/message.dto";
import CustomError from "../error/CustomError";
import { trimObject } from "../utils/object";

export const validateCreateMessage = (msg: CreateMessageDTO) => {
    msg = trimObject(msg) as CreateMessageDTO
    if (!msg.content) {
        throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Message must be not empty.")
    }
    return msg
}