import * as express from 'express';
import * as bodyParser from 'body-parser';

import MainController from './controller/main-controller';
import PersonController from './controller/person-controller';

class Server {
    port: number = 0;
    address: string = '';
    app: express.Express = null;
    
    constructor(port: number, address: string = 'localhost') {
        this.port = port;
        this.address = address;
        this.app = express();
    }

    listen(): void {
        this.app.listen(this.port, this.address, () => {
            console.log(`Server listening on ${this.address}:${this.port}`);
        });
    }

    middlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes(): void {
        this.app.use('/', MainController);
        this.app.use('/person', PersonController);
    }
    
    bootstrap(): void {
        this.middlewares();
        this.routes();
        this.listen();
    }
}

const port = parseInt(process.env.PORT);
export default new Server(port);