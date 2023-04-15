import { NextFunction, Request, Response } from 'express'

import ErrorWrapperHandler from "../utils/ErrorWrapperHandler"
import { StatusCodes } from 'http-status-codes'
import * as hospitalService from '../services/hospital.service'

// [GET] /hospital/:id
export const hospitalInfo = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const h = await hospitalService.info(req.params.id)
    return res.status(StatusCodes.OK).json({
        message: `Create user successfully.`,
        data: h
    })
})