import express from 'express'
import * as  patientController  from '../controllers/patient.controller'
const router = express.Router()

router.route("/medical_record")
    .get(patientController.getMedicalRecords)
    .post(patientController.createMedicalRecord)

router.route("/medical_record/:id")
    .patch(patientController.updateMedicalRecord)
    .delete(patientController.deleteMedicalRecord)

router.route("/appointment")
    .post(patientController.makeAnAppointment)

router.route("/appointment/:id")
    .patch(patientController.updateAppointment)
    .delete(patientController.deleteAppointment)

export default router;