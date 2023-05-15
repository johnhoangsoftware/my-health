import { NextFunction, Request, Response } from 'express'

import ErrorWrapperHandler from "../utils/ErrorWrapperHandler"
import { StatusCodes } from 'http-status-codes'
import * as notifyService from '../services/notify.service'
import * as doctorService from '../services/doctor.service'
import { NotifyDTO } from '../dtos/notify.dto'

// [POST] /createNotify
export const createNotification = ErrorWrapperHandler(async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const notify = await notifyService.createNotify(data as NotifyDTO)

    return res.status(StatusCodes.OK).json({
        message: `Create notification successfully.`,
        data: notify
    })
})

export const getMedicalRecords = ErrorWrapperHandler(async (req: Request, res: Response) =>{
    const idDoctor = req.auth?.id
    const medicalRecords = await doctorService.getMedicalRecords(idDoctor)
    return res.status(StatusCodes.OK).json({
        message: `Get medical records of doctor ${idDoctor}.`,
        data: medicalRecords
    })
})

//TODO: table change medical_record n database
//[patch] doctor/medical_record/:id
export const medicalNotes = ErrorWrapperHandler(async (req:Request, res: Response) => {
    const idDoctor = req.auth?.id
    const idMedicalRecord = req.params.id
    const data = req.body // Content
    const medicalRecord = await doctorService.medicalNotes(idDoctor, idMedicalRecord, data)
    return res.status(StatusCodes.OK).json({
        message: `Doctor notes medical record for ${req.auth?.id}.`,
        data: medicalRecord
    })
})
