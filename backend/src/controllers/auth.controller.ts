import { Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";
import { CreateUserDTO } from '../dtos/user.dto';
import { userService } from '../services';
import ErrorWrapperHandler from '../utils/ErrorWrapperHandler';
import { validateCreateUser } from '../validator/user';


// [POST] /auth/login
export const login = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body
    const user =  await userService.login(email, password)
    const token = "" //await jwtService.signToken(user)
    return res.status(StatusCodes.OK).json({
        message: `Login successfully.`,
        data: {
            user,
            token
        }
    });
})


// [POST] /auth/register
export const register = ErrorWrapperHandler(async (req: Request, res: Response) => {
    let data = req.body
    const userDTO = validateCreateUser(data as CreateUserDTO)
    const user = await userService.createUser(userDTO)
    return res.status(StatusCodes.OK).json({
        message: `Register successfully.`,
        data: user.email
    })
})
