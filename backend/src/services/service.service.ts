import { StatusCodes } from 'http-status-codes';
import { CreateServiceDTO, UpdateServiceDTO } from '../dtos/service.dto';
import CustomError from '../error/CustomError';
import { Service } from '../models';

export const findByID = async(id: string): Promise<Service> => {
    const service = await Service.findByPk(id)
    if (!service) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Service with ID: ${id} does not exist.`)
    }
    return Promise.resolve(service)
}

export const create = async(createServiceDTO: CreateServiceDTO): Promise<Service> => {
    const service = await Service.create({ ...createServiceDTO })
    return Promise.resolve(service)
}

export const updateByID = async (id: string, updateServiceDTO: UpdateServiceDTO): Promise<string> => {
    await findByID(id)
    await Service.update(updateServiceDTO, {
        where: { serviceId: id }
    })
    return Promise.resolve(id)
}

export const deleteByID = async (id: string): Promise<string> => {
    await findByID(id)
    await Service.destroy({
        where: {serviceId: id}
    })
    return Promise.resolve(id)
}