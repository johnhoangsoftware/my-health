import { NextFunction, Request, Response } from 'express'

import ErrorWrapperHandler from "../utils/ErrorWrapperHandler"
import { StatusCodes } from 'http-status-codes'
import * as homeService from '../services/home.service'

// [GET] /home
export const home = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    return res.status(StatusCodes.OK).json({
        data: []
    })
})

// [GET] /search-preview/:k
export const searchPreview = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const k = req.params.k.trim()
    const [doctors, hospitals, testPackages] = await homeService.searchPreview(k)
    return res.status(StatusCodes.OK).json({
        data: {
            keyword: k,
            doctors,
            hospitals,
            testPackages
        }
    })
})

// [GET] /search-doctor/:k?d
export const searchAllDoctors = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const k = req.params.k.trim()
    const d = req.query.d || ""
    const doctors = await homeService.searchDoctors(k, d as string)
    return res.status(StatusCodes.OK).json({
        data: {
            keyword: [k,d],
            doctors,
        }
    })
})

// [GET] /search-hospital/:k
export const searchAllHospitals = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const k = req.params.k.trim()
    const hospitals = await homeService.searchHospitals(k)
    return res.status(StatusCodes.OK).json({
        data: {
            keyword: k,
            hospitals,
        }
    })
})