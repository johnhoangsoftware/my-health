import { StatusCodes } from "http-status-codes";
import { CreateAppointmentDTO } from "../dtos/Appointment.dto";
import CustomError from "../error/CustomError";
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