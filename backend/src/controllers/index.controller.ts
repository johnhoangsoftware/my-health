import { Request, Response } from "express";

export function indexWellcome (req: Request, res: Response) : Response {
    return res.json('Welcome my_health');
}