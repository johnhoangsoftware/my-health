import { NextFunction, Request, Response } from 'express'

import ErrorWrapperHandler from "../utils/ErrorWrapperHandler"
import { StatusCodes } from 'http-status-codes'
import * as hospitalService from '../services/hospital.service'

// [GET] /home
export const home = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    return res.status(StatusCodes.OK).json({
        message: `Create user successfully.`,
        data: []
    })
})