
import { StatusCodes } from 'http-status-codes';
import CustomError from "../error/CustomError";
import { User, Patient, MedicalRecord, Appointment } from "../models";
import { CreateMedicalRecordDTO, UpdateMedicalRecordDTO } from '../dtos/medicalRecord.dto';
import { validateCreateMedicalRecord, validateUpdateMedicalRecord } from '../validator/patient';
import { CreateAppointmentDTO, UpdateAppointmentDTO } from '../dtos/Appointment.dto';
import { convertDateTime } from '../utils/converter';
import { validateCreateAppointment, validateUpdateAppointment } from '../validator/appointment';

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
    apm = validateCreateAppointment(apm)
    const existingMedicalRecord = await MedicalRecord.findByPk(apm.medicalRecordId)
    if (!existingMedicalRecord) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Medical Record with ID: ${apm.medicalRecordId} not found.`)
    }
    const dateApm = convertDateTime(apm.date, apm.time)
    const appointment = {
        status: 'PENDING',
        dateTime: dateApm,
        medicalRecordId: apm.medicalRecordId,
        testPackageId: apm.testPackageId,
        departmentId: apm.departmentId
    }
    return await Appointment.create({ ...appointment })
}

export async function updateAppointment(appointmentId: string, apmDTO: UpdateAppointmentDTO) {
    const appointment = await Appointment.findByPk(appointmentId)
    if(!appointment) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Appointment with ID: ${appointmentId} not found.`)
    }
    apmDTO = validateUpdateAppointment(apmDTO)

    const dateApm = convertDateTime(apmDTO.date as string, apmDTO.time as string) // date  as d/m/y, time as h:m
    const appointmentUpdate = {
        status: apmDTO.status,
        dateTime: dateApm,
        medicalRecordId: apmDTO.medicalRecordId,
        testPackageId: apmDTO.testPackageId,
        departmentId: apmDTO.departmentId
    }
    await Appointment.update(appointmentUpdate, {
        where: {
            appointmentId: appointmentId
        }})
}

export async function deleteAppointment(appointmentId: string) {
    const appointment = await Appointment.findByPk(appointmentId)
    if(!appointment) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Appointment with ID: ${appointmentId} not found.`)
    }
    await Appointment.destroy({
        where: {
            appointmentId: appointmentId
        }
    })
}

export const scheduleAppointment = async (userId: string, apm: CreateAppointmentDTO) => {
    const user = await User.findByPk(userId)
    if (!user) {
        throw new CustomError(StatusCodes.NOT_FOUND, `User with ID: ${userId} not found.`)
    }
    const birthDay = user.birthDay?.getDay() + "/" + user.birthDay?.getMonth() + "/" + user.birthDay?.getFullYear()
    apm = validateCreateAppointment(apm)
    const existingMedicalRecord = await MedicalRecord.findByPk(apm.medicalRecordId)
    if (!existingMedicalRecord) {
         //TODO: create medical record
        const medicalRecordDTO: CreateMedicalRecordDTO = {   
                name: user.name||"",
                gender: "",
                birthDay: birthDay,
                relationship: "",
                phone: user.phone||"",
                address: user.address||"",
                patientId:userId
            }
        const medical_record = await createMedicalRecord(userId, medicalRecordDTO)
        apm.medicalRecordId = medical_record.medicalRecordId
    }
    const dateApm = convertDateTime(apm.date, apm.time)
    const appointment = {
        status: 'PENDING',
        dateTime: dateApm,
        medicalRecordId: apm.medicalRecordId,
        testPackageId: apm.testPackageId,
        departmentId: apm.departmentId
    }
    return await Appointment.create({ ...appointment })
}
