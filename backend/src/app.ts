import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors'

import { connectToDatabase } from './configs/database.config';
import initRoutes from './routes';
import dotenv from 'dotenv'
dotenv.config();

export class App {

    private app: Application;

    constructor(private port?:number | string) {
        this.app = express();
        this.setting();
        this.middleware();
        this.routes();
    }

    setting() {
        this.app.set('port', this.port || process.env.PORT || 8080);
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors({
            origin: [process.env.CLIENT!]
        }))
    }

    routes() {
        initRoutes(this.app)
    }
    
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
        connectToDatabase()
    }
}