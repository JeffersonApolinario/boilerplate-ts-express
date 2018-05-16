import { Router, Request, Response } from 'express';
import PersonSchema from '../../mongoose/schemas/person';

class PersonController {
    router: Router = null;
    constructor(router: Router) {
        this.router = router;
        router.get('/', this.mainAction);
    }
    async mainAction(req: Request, res: Response) {
        try {
            let peoples = await PersonSchema.find();
            res.status(200).send(peoples);    
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    exposeRoutes() {
        return this.router;
    }
}

const router: Router = Router();

export default new PersonController(router).exposeRoutes();