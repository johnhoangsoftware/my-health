import { Router } from "express";
import { indexWellcome } from "../controllers/index.controller";

const router = Router();

router.route('/').get(indexWellcome);

export default router;