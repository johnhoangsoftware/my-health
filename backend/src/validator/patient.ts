import { StatusCodes } from "http-status-codes";
import { CreateMedicalRecordDTO, UpdateMedicalRecordDTO } from "../dtos/medicalRecord.dto";
import CustomError from "../error/CustomError";
import { trimObject } from "../utils/object";
import { isValidDate } from "./other";

export const validateCreateMedicalRecord = (medicalRecord: CreateMedicalRecordDTO): CreateMedicalRecordDTO => {
    medicalRecord = trimObject(medicalRecord) as CreateMedicalRecordDTO
    if (!medicalRecord.name || !medicalRecord.address || !medicalRecord.birthDay || !medicalRecord.gender || !medicalRecord.phone || !medicalRecord.relationship) {
        throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Missing fields. Must fill out all.")
    }
    if (!isValidDate(medicalRecord.birthDay)) {
        throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Birthday is invalid format.Must be YYYY-MM-DD")
    }
    return medicalRecord
}

export const validateUpdateMedicalRecord = (medicalRecord: UpdateMedicalRecordDTO): UpdateMedicalRecordDTO => {
    medicalRecord = trimObject(medicalRecord) as UpdateMedicalRecordDTO
    const isMissingValue =
        ("name" in medicalRecord && !medicalRecord.name) ||
        ("gender" in medicalRecord && !medicalRecord.gender) ||
        ("birthDay" in medicalRecord && !medicalRecord.birthDay) ||
        ("relationship" in medicalRecord && !medicalRecord.relationship) ||
        ("phone" in medicalRecord && !medicalRecord.phone) ||
        ("address" in medicalRecord && !medicalRecord.address);
    
    if (isMissingValue) {
        throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Missing fields. Must fill out all.")
    }

    if ("birthDay" in medicalRecord && !isValidDate(medicalRecord.birthDay)) {
        throw new CustomError(StatusCodes.UNPROCESSABLE_ENTITY, "Birthday is invalid format.Must be YYYY-MM-DD")
    }
        
    return medicalRecord
}