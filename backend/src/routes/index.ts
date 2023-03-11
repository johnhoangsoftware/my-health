import { Application } from 'express';
import adminRouter from './admin.route'

export default function initRoutes(app: Application) {
    app.use("/api/admin", adminRouter)
};