import express from "express";

import api from '../configs/api.config';
import * as adminController from '../controllers/admin.controller';

const router = express.Router();

router.route(api.admin.user.create)
    .post(adminController.createUser)
router.route(api.admin.user.manipulate)
    .delete(adminController.deleteUserByID)

router.route(api.admin.hospital.create)
    .post(adminController.createHospital)
router.route(api.admin.hospital.manipulate)
    .patch(adminController.updateHospital)
    .delete(adminController.deleteHospitalByID)

router.route(api.admin.service.create)
    .post(adminController.createService)
router.route(api.admin.service.manipulate)
    .patch(adminController.updateService)
    .delete(adminController.deleteServiceByID)

export default router