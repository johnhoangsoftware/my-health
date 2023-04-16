import { StatusCodes } from "http-status-codes";
import { CreateHospitalDTO, UpdateHospitalDTO } from "../dtos/hospital.dto";
import CustomError from "../error/CustomError";
import { trimObject } from "../utils/object";

export const validateCreateHospital = (createHospitalDTO: CreateHospitalDTO): CreateHospitalDTO => {
    const hospital = trimObject(createHospitalDTO) as CreateHospitalDTO
    
    if (!hospital.name || !hospital.address) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Missing value. Must fill out all information")
    }
    return hospital
}

export const validateUpdateHospital = (updateHospital: UpdateHospitalDTO): UpdateHospitalDTO => {
    const hospital = trimObject(updateHospital) as UpdateHospitalDTO
    if ('name' in hospital && !hospital.name) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid name")
    }
    if ('address' in hospital && !hospital.address) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid address")
    }
    return hospital 
}