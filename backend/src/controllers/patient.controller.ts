import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";
import ErrorWrapperHandler from "../utils/ErrorWrapperHandler";
import { patientService } from '../services';
import { CreateMedicalRecordDTO, UpdateMedicalRecordDTO } from '../dtos/medicalRecord.dto';
import { CreateAppointmentDTO, UpdateAppointmentDTO } from '../dtos/appointment.dto';


// [GET] /patient/medical_record
export const getMedicalRecords = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.auth?.id
    const medicalRecords = await patientService.allMedicalRecords(userId)
    return res.status(StatusCodes.OK).json({
        data: medicalRecords
    });
})

// [POST] /patient/medical_record
export const createMedicalRecord = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.auth?.id
    const medicalRecordDTO = req.body as CreateMedicalRecordDTO
    const medicalRecord = await patientService.createMedicalRecord(userId, medicalRecordDTO)
    return res.status(StatusCodes.OK).json({
        data: medicalRecord
    });
})

// [PATCH] /patient/medical_record/:id
export const updateMedicalRecord = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const medicalRecordId = req.params.id
    const medicalRecordDTO = req.body as UpdateMedicalRecordDTO
    const medicalRecord = await patientService.updateMedicalRecord(medicalRecordId, medicalRecordDTO)
    return res.status(StatusCodes.OK).json({
        data: medicalRecord
    });
})

// [DELETE] /patient/medical_record/:id
export const deleteMedicalRecord = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const medicalRecordId = req.params.id
    const deletedMedicalRecord = await patientService.deleteMedicalRecord(medicalRecordId)
    return res.status(StatusCodes.OK).json({
        data: deletedMedicalRecord
    });
})

// [POST] /patient/appointment
export const makeAnAppointment = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.auth?.id
    const apm = req.body as CreateAppointmentDTO
    const appointment = await patientService.makeAnAppointment(userId, apm)
    return res.status(StatusCodes.OK).json({
        data: appointment
    });
})

// [GET] /patient/appointment
export const getAllAppointments = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.auth?.id
    const appointment = await patientService.getAllAppointments(userId)
    return res.status(StatusCodes.OK).json({
        data: appointment
    });
})
// [UPDATE] /patient/appointment/:id
export const updateAppointment = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const appointmentId = req.params.id
    const apm = req.body as UpdateAppointmentDTO
    const appointment = await patientService.updateAppointment(appointmentId, apm)
    return res.status(StatusCodes.OK).json({
        message: "Update appointment successfully",
        data: appointment
    });
})

// [DELETE] /patient/appointment/:id
export const deleteAppointment = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const appointmentId = req.params.id
    const deletedAppointment = await patientService.deleteAppointment(appointmentId)
    return res.status(StatusCodes.OK).json({
        message: "Delete appointment successfully",
        data: deletedAppointment
    });
})

// // [UPDATE] /patient/schedule_appointment/:id
// export const updateScheduleAppointment = ErrorWrapperHandler(async (req: Request, res: Response) => {
//     const appointmentId = req.params.id
//     const apm = req.body as UpdateAppointmentDTO
//     const appointment = await patientService.updateScheduleAppointment(appointmentId, apm)
//     return res.status(StatusCodes.OK).json({
//         message: "Update appointment successfully",
//         data: appointment
//     });
// })

// [POST] /patient/schedule_appointment
export const scheduleAnAppointment = ErrorWrapperHandler(async (req: Request, res: Response) => {
    const userId = req.auth?.id
    const apm = req.body as CreateAppointmentDTO
    const appointment = await patientService.scheduleAppointment(userId, apm)
    return res.status(StatusCodes.OK).json({
        data: appointment
    });
})


