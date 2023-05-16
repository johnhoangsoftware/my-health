import { StatusCodes } from "http-status-codes";
import { NotificationDTO } from "../dtos/notification.dto";
import CustomError from "../error/CustomError";
import { trimObject } from "../utils/object";

export const validateNotification = (noti: NotificationDTO) => {
    noti = trimObject(noti) as NotificationDTO
    if (!noti.content) {
        throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Invalid notification")
    }
    return noti
}