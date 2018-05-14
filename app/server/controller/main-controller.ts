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
}

const router: Router = Router();
const mainController = new MainController(router);

export default mainController.router;