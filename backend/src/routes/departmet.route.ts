import express from 'express';
import * as departmentController  from '../controllers/department.controller';

const router = express.Router();

router.route("/")
    .get(departmentController.allDepartment)

export default router;
