import { StatusCodes } from 'http-status-codes';
import CustomError from "../error/CustomError";
import { Appointment, Department, Doctor, MedicalRecord } from '../models';

export const getMedicalRecords = async (doctorId: string) => {
    const doctor = await Doctor.findByPk(doctorId)
    if (!doctor) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Doctor with ID: ${doctorId} not found.`)
    }
    const listAppointment = await Appointment.findAll({
        where: {
            deparmentId: doctor.departmentId
        },
        include: [
            {
                model: MedicalRecord,
            }]
    })
    console.log(doctor?.toJSON())
    
    if (listAppointment.length === 0) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Doctor with ID: ${doctorId} not found.`)
    }


    let listMedicalRecords
    listAppointment.map(async (appointment) => {
        listMedicalRecords = await Appointment.findAll({
            where: {
                medicalRecordId: appointment.medicalRecordId
            },
        })
    })


    return listMedicalRecords //listMedicalRecords
}

export const medicalNotes = async (doctorId: string, medicalRecordId: string, data: { [key: string]: any }) => {
    const doctor = await Doctor.findByPk(doctorId)
    if (!doctor) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Doctor with ID: ${doctorId} not found.`)
    }
    const medicalRecord = await MedicalRecord.findByPk(medicalRecordId)
    if (!medicalRecord) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Medical record with ID: ${medicalRecordId} not found.`)
    }
    const appointment = await Appointment.findOne({
        where: {
            medicalRecordId: medicalRecordId,
            deparmentId: doctor.departmentId
        }
    })
    if (!appointment) {
        throw new CustomError(StatusCodes.NOT_FOUND, `Appointment with medical record ID: ${medicalRecordId} not found.`)
    }
    medicalRecord.content = data.toJSON()
    medicalRecord.save()
    //const updatedMedicalRecord = await medicalRecord.update(data)
    return medicalRecord//updatedMedicalRecord
}