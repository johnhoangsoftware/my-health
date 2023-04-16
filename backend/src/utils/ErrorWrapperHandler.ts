import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import CustomError from "../error/CustomError"

export default function ErrorWrapperHandler(controller : Function) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res, next)
        } catch (error) {
            console.error(error)
            if (error instanceof CustomError) {
                return res.status(error.statusCode).json({
                    message: error.message
                })
            }

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: 'Something went wrong'
            })
        }
    }
}