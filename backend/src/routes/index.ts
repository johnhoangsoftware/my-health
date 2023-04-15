import { Application } from 'express';
import adminRouter from './admin.route'
import postRouter from './post.route'
import userRouter from './user.route'
import hospitalRouter from './hospital.route'
import homeRouter from './home.route'

import { authMiddleware  } from '../middleware/auth';

export default function initRoutes(app: Application) {
    app.use("/api/admin", adminRouter)
    app.use("/api/post", authMiddleware, postRouter)
    app.use("/api/user", authMiddleware, userRouter)
    app.use("/api/hospital", authMiddleware, hospitalRouter)
    app.use("/api", authMiddleware, homeRouter)
};