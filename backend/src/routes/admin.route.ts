import express from "express";

import api from '../configs/api.config';
import * as adminController from '../controllers/example.controller';

const router = express.Router();

router.route(api.admin.root)
    .get(adminController.doRequest)

export default router