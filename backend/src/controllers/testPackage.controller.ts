import { Request, Response, NextFunction } from 'express'

import { StatusCodes } from "http-status-codes"
import { testPackage } from "../services"
import ErrorWrapperHandler from "../utils/ErrorWrapperHandler"

// [GET] /test_package
export const all = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const testPackages = await testPackage.all()
    return res.status(StatusCodes.OK).json({
        data: testPackages
    })
})