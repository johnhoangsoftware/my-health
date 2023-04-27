import { Op } from 'sequelize'
import { StatusCodes } from 'http-status-codes';
import {CreateUserDTO, UpdateUserDTO}  from "../dtos/user.dto";
import CustomError from "../error/CustomError";
import { User, Doctor, Department, Hospital, Patient } from "../models";
import { encodedPassword } from '../utils/bcrypt'
import { user_db } from '../persistence';

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

export const profile = async (id: string) => {
    const user = await User.findByPk(id, {
        include: [
            {
                model: Doctor,
                attributes: ["doctorId", "rank"],
                include: [
                    {
                        model: Department,
                        attributes: ["departmentId","name"],
                        include: [
                            {
                                model: Hospital,
                                attributes: ["hospitalId", "name"]
                            }
                        ]
                    }
                ]
            },
            {
                model: Patient,
                attributes: ["patientId"]
            }
        ]
    })
    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${id} not found.`)
    }
    return user
}
