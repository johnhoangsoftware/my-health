import { Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import { CreateUserDTO } from '../dtos/user.dto';
import { userService } from '../services';
import ErrorWrapperHandler from '../utils/ErrorWrapperHandler';
import { validateCreateUser } from '../validator/user';


// [POST] /auth/login
export const login = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body
    console.log(email, password)
    const user =  await userService.login(email, password)
    // tokens
    const token = jwt.sign({userId : user.userId, email: user.email, role: user.role}, process.env.SECRET_KEY||"tokentest", {expiresIn: "1h"})
    //const token = "" //await jwtService.signToken(user)
    return res.status(StatusCodes.OK).header("auth-token", token).json({
        message: `Login successfully.`,
        data: {
            user,
            //token
        }
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

// [POST] /auth/register
export const register = ErrorWrapperHandler(async (req: Request, res: Response) => {
    let data = req.body
    console.log(data)
    const userDTO = validateCreateUser(data as CreateUserDTO)
    const user = await userService.createUser(userDTO)
    return res.status(StatusCodes.OK).json({
        message: `Register successfully.`,
        data: user
    })
})
