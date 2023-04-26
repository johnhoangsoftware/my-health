import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authMiddleware = (req: Request, res:Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET ||"tokentest");
        //req.auth = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
}


