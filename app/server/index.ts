import * as express from 'express';
import * as bodyParser from 'body-parser';

import MainController from './controller/main-controller';
import PersonController from './controller/person-controller';

class Server {
    port: number = 0;
    address: string = '';
    app: express.Express = null; 
    constructor(port: number, address: string = 'localhost'){
        this.port = port;
        this.address = address;
        this.app = express();
        this.messageListen = this.messageListen.bind(this);
    }
    listen(): void{
        this.app.listen(this.port, this.address, this.messageListen);
    }
    messageListen(): void{
        console.log(`Server Listening on ${this.address}:${this.port}`);
    }
    register(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use('/', MainController);
        this.app.use('/person', PersonController);
    }
}

const port = parseInt(process.env.PORT);
const server = new Server(port);

export default server;