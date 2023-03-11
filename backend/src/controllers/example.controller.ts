import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

import * as exampleService from '../services/example.service'
import ErrorWrapperHandler from '../utils/ErrorWrapperHandler'

export const doRequest = ErrorWrapperHandler(async (req: Request, res: Response) => {
         await exampleService.doSomething()
        return res.status(StatusCodes.OK).json({
                message: "OK"
        })
})