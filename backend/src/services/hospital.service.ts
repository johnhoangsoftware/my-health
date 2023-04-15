import { StatusCodes } from 'http-status-codes';
import CustomError from "../error/CustomError";
import { Hospital } from "../models";
import { CreateHospitalDTO, UpdateHospitalDTO } from '../dtos/hospital.dto';

export const findByID = async (id: string): Promise<Hospital> => {
    const hospital = await Hospital.findByPk(id)
    if (!hospital) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Hospital not found`)
    }
    return Promise.resolve(hospital)
}

export const create = async (createHospitalDTO: CreateHospitalDTO): Promise<Hospital> => {
    const hospital = await Hospital.create({...createHospitalDTO})
    return Promise.resolve(hospital)
}

export const updateByID = async (id: string, updateHospitalDTO: UpdateHospitalDTO): Promise<string> => {
    await findByID(id)   
    await Hospital.update(updateHospitalDTO, {
        where: {hospitalId: id}
    })
    return Promise.resolve(id)
}

export const deleteByID = async (id: string): Promise<string> => {
    await findByID(id)
    await Hospital.destroy({
        where: {hospitalId: id}
    })
    return Promise.resolve(id)
}

export const info = async(id: string) => {
    const h = await Hospital.findByPk(id, {
        attributes: {
            exclude: ["createdAt", 'updatedAt']
        }
    })
    return h
}