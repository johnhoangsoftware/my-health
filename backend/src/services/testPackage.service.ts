import { StatusCodes } from 'http-status-codes';
import CustomError from '../error/CustomError';
import { Hospital, TestPackage } from '../models';
import { CreateTestPackageDTO, UpdateTestPackageDTO } from '../dtos/testPackage.dto';

export const findByID = async(id: string): Promise<TestPackage> => {
    const service = await TestPackage.findByPk(id)
    if (!service) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Test package with ID: ${id} does not exist.`)
    }
    return Promise.resolve(service)
}

export const create = async(createTestPackageDTO: CreateTestPackageDTO): Promise<TestPackage> => {
    const service = await TestPackage.create({ ...createTestPackageDTO })
    return Promise.resolve(service)
}

export const updateByID = async (id: string, updateTestPackageDTO: UpdateTestPackageDTO): Promise<string> => {
    await findByID(id)
    await TestPackage.update(updateTestPackageDTO, {
        where: { serviceId: id }
    })
    return Promise.resolve(id)
}

export const deleteByID = async (id: string): Promise<string> => {
    await findByID(id)
    await TestPackage.destroy({
        where: {serviceId: id}
    })
    return Promise.resolve(id)
}

export const all = async() => {
    return await TestPackage.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        include: {
            model: Hospital,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }
    })
}

export const detail = async(id: string) => {
    return await TestPackage.findByPk(id, {
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        },
        include: {
            model: Hospital,
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }, 
        }
    })
}