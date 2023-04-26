import express from "express";

import * as homeController from '../controllers/home.controller';

const router = express.Router();

router.route("/search-preview/:k")
    .get(homeController.searchPreview)

router.route("/search-doctor/:k")
    .get(homeController.searchAllDoctors)

router.route("/search-hospital/:k")
    .get(homeController.searchAllHospitals)

export default router