import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Fix logic jwt 
    req.auth = {
        id: 'cf6a7cac-5c4c-45fa-bb4a-b79dfbfadb22'
    }


    next()
}