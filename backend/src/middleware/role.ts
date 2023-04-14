import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes";

export const roleCheck = (roles : string[]) => {
    return (req : Request, res:Response, next: NextFunction) => {
        const currentRole = req.auth?.role.trim()
        if (!currentRole || !roles.includes(currentRole)) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
              message: `You are not allowed to do this.`,
            });
        }
        next()
    }
}