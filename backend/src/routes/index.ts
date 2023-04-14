import { Application } from 'express';
import adminRouter from './admin.route'
import postRouter from './post.route'
import userRouter from './user.route'

import { authMiddleware  } from '../middleware/auth';

export default function initRoutes(app: Application) {
    app.use("/api/admin", adminRouter)
    app.use("/api/post", authMiddleware, postRouter)
    app.use("/api/user", authMiddleware, userRouter)
};