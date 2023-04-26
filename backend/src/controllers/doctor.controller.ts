import { NextFunction, Request, Response } from 'express'

import ErrorWrapperHandler from "../utils/ErrorWrapperHandler"
import { StatusCodes } from 'http-status-codes'
import * as notifyService from '../services/notify.service'
import { NotifyDTO } from '../dtos/notify.dto'

// [POST] /createNotify
export const createNotification = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const notify = await notifyService.createNotify(data as NotifyDTO)

    return res.status(StatusCodes.OK).json({
        message: `Create notification successfully.`,
        data: notify
    })
})
