import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";
import { departmentService } from "../services";
import ErrorWrapperHandler from "../utils/ErrorWrapperHandler";

// [GET] /department
export const allDepartment = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const d = await departmentService.allDepartments()
    return res.status(StatusCodes.OK).json({
        data: d
    });
})