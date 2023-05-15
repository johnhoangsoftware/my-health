import express from "express";

import * as doctorController from '../controllers/doctor.controller';

const router = express.Router();

router.route('/createNotify')
    .post(doctorController.createNotification)

router.route('/medical_record')
    .get(doctorController.getMedicalRecords)
    
router.route('/medical_record/:id').patch(doctorController.medicalNotes)
export default router