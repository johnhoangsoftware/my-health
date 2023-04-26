import express from "express";

import * as doctorController from '../controllers/doctor.controller';

const router = express.Router();

router.route('/createNotify')
    .post(doctorController.createNotification)


export default router