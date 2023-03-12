import { StatusCodes } from 'http-status-codes';
import CustomError from '../error/CustomError';
import { trimObject } from '../utils/object';
import { CreateServiceDTO, UpdateServiceDTO } from './../dtos/service.dto';

export const validateCreateService = (service: CreateServiceDTO): CreateServiceDTO => {
    const createServiceDTO = trimObject(service) as CreateServiceDTO

    if (!('name' in createServiceDTO) || !('price' in createServiceDTO) || !('description' in createServiceDTO)) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Missing value. Must fill out all information")
    }

    if (!createServiceDTO.name.trim() || !createServiceDTO.description?.trim()) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid value. Value must not be empty")
    }

    if (createServiceDTO.price < 0) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid value. Price muse be positive")
    }

    return createServiceDTO
}

export const validateUpdateService = (service: UpdateServiceDTO): UpdateServiceDTO => {
    const updateServiceDTO = trimObject(service) as UpdateServiceDTO

    if ('name' in updateServiceDTO && !updateServiceDTO.name) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid name")
    }

    if ('price' in updateServiceDTO &&
        ((typeof (updateServiceDTO.price) != 'string' && typeof(updateServiceDTO.price) != 'number') || Number(updateServiceDTO.price) < 0)
    ) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid price")
    }

    if ('description' in updateServiceDTO && !updateServiceDTO.description) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid description")
    }

    return updateServiceDTO
}
