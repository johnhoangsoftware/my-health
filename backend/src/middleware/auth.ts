import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {verifyToken} from '../utils/jwt'
import { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'You are not allowed'
        })
    }
    req.auth = verifyToken(token) as JwtPayload
    next()
}