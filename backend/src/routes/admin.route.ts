import express from "express";

import * as adminController from '../controllers/admin.controller';

const router = express.Router();

router.route("/user")
    .post(adminController.createUser)
router.route("/user/:id")
    .delete(adminController.deleteUserByID)

router.route("/hospital")
    .post(adminController.createHospital)
router.route("/hospital/:id")
    .patch(adminController.updateHospital)
    .delete(adminController.deleteHospitalByID)

router.route("/service")
    .post(adminController.createService)
router.route("/service/:id")
    .patch(adminController.updateService)
    .delete(adminController.deleteServiceByID)

export default router