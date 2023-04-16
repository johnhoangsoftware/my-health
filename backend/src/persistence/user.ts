import { StatusCodes } from "http-status-codes";
import CustomError from "../error/CustomError";
import { User } from "../models";

export const findByID = async (id: string): Promise<User | null> => {
    const user = await User.findByPk(id)
    if (!user) {
        return Promise.resolve(null)
    }
    return Promise.resolve(user)
}

export const deleteByID = async (id: string): Promise<User> => {
    const user  = await findByID(id)
    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User not found`)
    }
    await User.destroy({
        where: { userId: id },
    })
    return Promise.resolve(user)
}
