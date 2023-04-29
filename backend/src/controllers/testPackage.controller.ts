import { Request, Response, NextFunction } from 'express'

import { StatusCodes } from "http-status-codes"
import { CreateTestPackageDTO } from '../dtos/testPackage.dto'
import { testPackage } from "../services"
import ErrorWrapperHandler from "../utils/ErrorWrapperHandler"

// [GET] /test_package
export const all = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const testPackages = await testPackage.all()
    return res.status(StatusCodes.OK).json({
        data: testPackages
    })
})

// [GET] /test_package/:id
export const detail = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const testPackages = await testPackage.detail(req.params.id)
    return res.status(StatusCodes.OK).json({
        data: testPackages
    })
})

// [POST] /test_package/:id
export const create = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const data = req.body
    const testPackages = await testPackage.create(data as CreateTestPackageDTO)
    return res.status(StatusCodes.OK).json({
        data: testPackages
    })
})