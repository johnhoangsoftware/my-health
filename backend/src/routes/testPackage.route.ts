import express from 'express'
import * as  testPackageController  from '../controllers/testPackage.controller'
const router = express.Router()

router.route("/")
    .get(testPackageController.all)
    
router.route("/:id")
    .get(testPackageController.detail)
export default router;