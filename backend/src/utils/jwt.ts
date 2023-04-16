import * as jwt from 'jsonwebtoken'
import CustomError from '../error/CustomError'
import { StatusCodes } from 'http-status-codes'

const secret = process.env.JWT_SECRET as string

export const generateAccessToken = (data: { [key: string]: any }) => {
    if (!secret) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "JWT_SECRET not found")
    }
    return jwt.sign(data, secret, {
        expiresIn: '2 days',
    })
}

export const verifyToken = (token: string) => {
    try {
        const data = jwt.verify(token, secret)
        return data
    } catch (error) {
        throw new CustomError(StatusCodes.UNAUTHORIZED, "Please login again.")
    }
}
