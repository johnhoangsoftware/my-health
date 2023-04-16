import express from "express";

import * as hospitalController from '../controllers/hospital.controller';

const router = express.Router();

router.route("/:id")
    .get(hospitalController.hospitalInfo)

export default router