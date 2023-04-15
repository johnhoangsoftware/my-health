import { Op } from 'sequelize'
import { StatusCodes } from 'http-status-codes';
import {CreateUserDTO, UpdateUserDTO}  from "../dtos/user.dto";
import CustomError from "../error/CustomError";
import { User } from "../models";
import { encodedPassword } from '../utils/bcrypt'
import { user_db } from '../persistence';
import { CreatePostDTO } from '../dtos/post.dto';

export const createUser = async (createUserDTO: CreateUserDTO): Promise<User> => {
    const existingUser = await User.findOne({
        where: {
            [Op.or]: [
                { email: createUserDTO.email },
                { phone: createUserDTO.phone }
            ]
        }
    })

    if (existingUser) {
        throw new CustomError(StatusCodes.CONFLICT, "This email or phone is already used")
    }

    const hashedPassword = encodedPassword(createUserDTO.password)
    const user = await User.create({
        ...createUserDTO,
        password: hashedPassword
    })
    return Promise.resolve(user)
}

export const updateByID = async (id: string, updateUser: UpdateUserDTO): Promise<string> => {
    await user_db.findByID(id)
    await User.update(updateUser, {
        where: {userId: id}
    })
    return Promise.resolve(id)
}

export const login = async (username: string, password: string): Promise<User> => {
    const user = await User.findOne({
        where: {
            [Op.or]: [
                { email: username },
            ]
        }
    })

    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, "User not found")
    }

    const hashedPassword    = await encodedPassword(password);
    if (hashedPassword !==   user.password) {
        throw new CustomError(StatusCodes.UNAUTHORIZED, "Wrong password")
    }

    return Promise.resolve(user)
}
