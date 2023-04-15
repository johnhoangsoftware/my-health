import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Fix logic jwt 
    req.auth = {
        id: '2764319f-7d99-43e7-a4d5-850380b1fd77'
    }


    next()
}