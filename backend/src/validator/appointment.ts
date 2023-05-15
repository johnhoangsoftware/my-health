import { StatusCodes } from "http-status-codes";
import { CreateAppointmentDTO, UpdateAppointmentDTO } from "../dtos/appointment.dto";
import CustomError from "../error/CustomError";
import { Department } from "../models";
import { trimObject } from "../utils/object";

export const validateCreateAppointment = (appointment : CreateAppointmentDTO) => {
    appointment = trimObject(appointment) as CreateAppointmentDTO
    if (!appointment.date || !appointment.time || !appointment.medicalRecordId) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Missing value. Must fill out all information")
    }
    if (!appointment.departmentId && !appointment.testPackageId) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Missing value. Cannot specify an appointment which is AT-HOME or FACE-TO-FACE.")
    }
    return appointment
}

export const validateUpdateAppointment = (appointment : UpdateAppointmentDTO) => {
    appointment = trimObject(appointment) as UpdateAppointmentDTO
    if (!appointment.date && !appointment.time && !appointment.status && !appointment.medicalRecordId && !appointment.departmentId && !appointment.testPackageId) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Missing value. Must fill out at least one field to update")
    }
    return appointment
}