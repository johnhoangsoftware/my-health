import { Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import { CreateUserDTO } from '../dtos/user.dto';
import { authService } from '../services';
import ErrorWrapperHandler from '../utils/ErrorWrapperHandler';
import { validateCreateUser } from '../validator/user';


// [POST] /auth/login
export const login = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body
    const data =  await authService.login(email, password)
    return res.status(StatusCodes.OK).json({
        message: `Login successfully.`,
        data: data
    });
})
// {
//     "email":"johnhoang.study@gmail.com" ,
//     "password":"hoang",
//     "firstName": "hoang",
//     "lastName": "nguyen",
//     "birthDay": "2000/10/10",
//     "avatar": "",
//     "phone": "0865161655",
//     "address":"hanoi",
//     "role": "PATIENT"
//     }

// [POST] /auth/signup
export const register = ErrorWrapperHandler(async (req: Request, res: Response) => {
    let data = req.body
    console.log(data)
    const userDTO = validateCreateUser(data as CreateUserDTO)
    await authService.signup(userDTO)
    return res.status(StatusCodes.OK).json({
        message: `Register successfully.`,
    })
})
