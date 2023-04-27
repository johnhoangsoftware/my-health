import express from "express";

import * as hospitalController from '../controllers/hospital.controller';

const router = express.Router();

router.route("/:id")
    .get(hospitalController.hospitalInfo)

router.route("/:id/department")
    .get(hospitalController.getDepartments)

export default router