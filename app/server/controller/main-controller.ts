import {Router, Request, Response} from 'express';

class MainController {
    router: Router = null;
    constructor (router: Router) {
        this.router = router;
        router.get('/', this.mainAction);
    }
    mainAction(req: Request, res: Response){
        res.status(200).send('welcome boilerplate-ts-express');
    }
    exposeRoutes(){
        return this.router;
    }
}

const router: Router = Router();
export default new MainController(router).exposeRoutes();
