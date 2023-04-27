import { StatusCodes } from 'http-status-codes';
import CustomError from '../error/CustomError';
import { trimObject } from '../utils/object';
import { CreateTestPackageDTO, UpdateTestPackageDTO } from '../dtos/testPackage.dto';

export const validateCreateService = (service: CreateTestPackageDTO): CreateTestPackageDTO => {
    const CreateTestPackageDTO = trimObject(service) as CreateTestPackageDTO

    if (!('name' in CreateTestPackageDTO) || !('price' in CreateTestPackageDTO) || !('description' in CreateTestPackageDTO)) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Missing value. Must fill out all information")
    }

    if (!CreateTestPackageDTO.name.trim() || !CreateTestPackageDTO.description?.trim()) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid value. Value must not be empty")
    }

    if (CreateTestPackageDTO.price < 0) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid value. Price muse be positive")
    }

    return CreateTestPackageDTO
}

export const validateUpdateService = (service: UpdateTestPackageDTO): UpdateTestPackageDTO => {
    const UpdateTestPackageDTO = trimObject(service) as UpdateTestPackageDTO

    if ('name' in UpdateTestPackageDTO && !UpdateTestPackageDTO.name) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid name")
    }

    if ('price' in UpdateTestPackageDTO &&
        ((typeof (UpdateTestPackageDTO.price) != 'string' && typeof(UpdateTestPackageDTO.price) != 'number') || Number(UpdateTestPackageDTO.price) < 0)
    ) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid price")
    }

    if ('description' in UpdateTestPackageDTO && !UpdateTestPackageDTO.description) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid description")
    }

    return UpdateTestPackageDTO
}
