import express, {Application} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';


//Routes
import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/post.routes';


export class App {

    private app: Application;
    

    constructor(private port?:number | string) {
        this.app = express();
        this.setting();
        this.middleware();
        this.routes();
    }

    setting() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/posts',PostRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}