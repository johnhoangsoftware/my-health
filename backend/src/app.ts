import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors'
import * as socketio from "socket.io";
import * as http from "http";

import { connectToDatabase } from './configs/database.config';
import initRoutes from './routes';
import {socketSetup} from './controllers/chat.controller'
import dotenv from 'dotenv'
dotenv.config();

export class App {

    private app : Application
    private server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>

    constructor(private port?: number | string) {
        this.app = express()
        this.setting();
        this.middleware();
        this.routes();
        this.server = http.createServer(this.app)
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
        socketSetup(new socketio.Server(this.server), this.app)
    }

    routes() {
        initRoutes(this.app)
    }
    
    async listen() {
        await this.server.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
        connectToDatabase()
    }
}