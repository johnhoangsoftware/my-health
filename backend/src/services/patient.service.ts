
import { StatusCodes } from 'http-status-codes';
import CustomError from "../error/CustomError";
import { User, Patient, MedicalRecord, Appointment } from "../models";
import { CreateMedicalRecordDTO, UpdateMedicalRecordDTO } from '../dtos/medicalRecord.dto';
import { validateCreateMedicalRecord, validateUpdateMedicalRecord } from '../validator/patient';
import { CreateAppointmentDTO } from '../dtos/Appointment.dto';
import { convertDateTime } from '../utils/converter';

export const allMedicalRecords = async (userId: string) => {
    const user = await User.findByPk(userId, {
        include: [{
            model: Patient,
            include: [
                {
                    model: MedicalRecord
                }
            ]
        }]
    })
    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${userId} not found.`)
    }
    if (!user.GetPatient()) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${userId} is not a patient.`)
    }
    return user.GetPatient().GetMedicalRecords()
}

export const createMedicalRecord = async(userId: string, medicalRecordDTO: CreateMedicalRecordDTO) => {
    const user = await User.findByPk(userId, {
        attributes: ["userId"],
        include: {
            model: Patient,
            attributes: ["patientId"]
        }
    })
    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${userId} not found.`)
    }

    medicalRecordDTO = validateCreateMedicalRecord(medicalRecordDTO)
    medicalRecordDTO.patientId = user.GetPatient().patientId
    const medicalRecord  = await MedicalRecord.create({...medicalRecordDTO})
    return medicalRecord
}

export const updateMedicalRecord = async (id: string, medicalRecordDTO: UpdateMedicalRecordDTO) => {
    const medicalRecord = await MedicalRecord.findByPk(id)
    if (!medicalRecord) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Medical record with ID: ${id} not found.`)
    }
    medicalRecordDTO = validateUpdateMedicalRecord(medicalRecordDTO)
    await MedicalRecord.update(medicalRecordDTO, {
        where: {
            medicalRecordId: id
        }
    })
    return await MedicalRecord.findByPk(id)
}

export const deleteMedicalRecord = async (id: string) =>{
    const medicalRecord = await MedicalRecord.findByPk(id)
    if (!medicalRecord) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Medical record with ID: ${id} not found.`)
    }
    await MedicalRecord.destroy({
        where: {
            medicalRecordId: id
        }
    })
    return medicalRecord
}

export const makeAnAppointment = async (userId: string, apm: CreateAppointmentDTO) => {
    const user = await User.findByPk(userId)
    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${userId} not found.`)
    }
    const dateApm = convertDateTime(apm.date, apm.time)
    return await Appointment.create({
        status: 'PENDING',
        dateTime: dateApm
    })
}