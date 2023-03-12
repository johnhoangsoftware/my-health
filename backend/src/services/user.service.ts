import { Op } from 'sequelize'
import { StatusCodes } from 'http-status-codes';
import {CreateUserDTO, UpdateUserDTO}  from "../dtos/user.dto";
import CustomError from "../error/CustomError";
import { User } from "../models";
import { encodedPassword } from '../utils/bcrypt'

export const findByID = async (id: string): Promise<User> => {
    const user = await User.findByPk(id)
    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${id} does not exist`)
    }
    return Promise.resolve(user)
}

export const create = async (createUserDTO: CreateUserDTO): Promise<User> => {
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
    await findByID(id)
    await User.update(updateUser, {
        where: {user_id: id}
    })
    return Promise.resolve(id)
}

export const deleteByID = async (id: string): Promise<string> => {
    await findByID(id)
    await User.destroy({
        where: { user_id: id },
    })
    return Promise.resolve(id)
}