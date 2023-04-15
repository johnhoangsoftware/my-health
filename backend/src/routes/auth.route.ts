import express from 'express';
import * as authController  from '../controllers/auth.controller';

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('Hello World!');
});

router.route('/login').post(authController.login);

router.route('/register').post(authController.register);

export default router;
