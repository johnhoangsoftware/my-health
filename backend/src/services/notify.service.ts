import { StatusCodes } from 'http-status-codes';
import CustomError from "../error/CustomError";
import { Notification } from "../models";

import { NotifyDTO } from '../dtos/notify.dto';

export const createNotify = async (notifyDTO: NotifyDTO): Promise<Notification> => {
    const notification = await Notification.create({ ...notifyDTO })
    return Promise.resolve(notification)
}

export const getNotify = async (id: string): Promise<Notification> => {
    const notify = await Notification.findByPk(id)
    if (!notify) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Notification with ID: ${id} does not exist.`)
    }
    return Promise.resolve(notify)
}